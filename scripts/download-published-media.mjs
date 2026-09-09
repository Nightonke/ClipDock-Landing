import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { setTimeout as delay } from 'node:timers/promises';

const run = promisify(execFile);
const transientCurlErrors = new Set([5, 6, 7, 18, 28, 52, 55, 56, 92]);
const transientHttpStatuses = new Set([408, 429, 500, 502, 503, 504, 522, 524]);
const responseStatus = output => Number(output?.subarray(-3).toString()) || 0;

// curl's --retry does not cover connection resets. Run each attempt separately
// so partial bytes from a failed transfer never contaminate the next response.
export async function downloadPublishedMedia(url, {
  maxTime = 30,
  maxBytes = 4 * 1024 * 1024,
  retryDelayMs = 1000,
  onRetry = message => console.warn(message),
} = {}) {
  const attempts = 4;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const { stdout } = await run('curl', [
        '--disable', '--location', '--fail', '--silent', '--show-error',
        '--connect-timeout', '10', '--max-time', String(maxTime),
        '--write-out', '\n%{http_code}', url,
      ], { encoding: 'buffer', maxBuffer: maxBytes + 4 });
      return stdout.subarray(0, -4);
    } catch (error) {
      const status = responseStatus(error.stdout);
      const retryable = transientCurlErrors.has(error.code)
        || (error.code === 22 && transientHttpStatuses.has(status));
      const reason = `curl ${error.code}${status ? `, HTTP ${status}` : ''}`;
      if (!retryable || attempt === attempts) {
        throw new Error(`Failed to download ${url} after ${attempt} attempt(s): ${reason}. ${error.stderr?.toString().trim() || error.message}`, { cause: error });
      }
      const wait = retryDelayMs * 2 ** (attempt - 1);
      onRetry(`Retrying ${url} after ${reason}; attempt ${attempt + 1}/${attempts} in ${wait}ms.`);
      await delay(wait);
    }
  }
}
