/** Check required copy recursively. Lists may vary in length (for example SEO keywords). */
export function validateCopy(reference: unknown, value: unknown, path: string): void {
 if (typeof reference === 'string') {
  if (typeof value !== 'string' || (reference.trim() && !value.trim())) throw new Error(`Missing text: ${path}`);
 } else if (Array.isArray(reference)) {
  if (!Array.isArray(value) || (reference.length && !value.length)) throw new Error(`Missing list: ${path}`);
  if (reference.length) value.forEach((entry, index) => validateCopy(reference[Math.min(index, reference.length - 1)], entry, `${path}[${index}]`));
 } else if (reference && typeof reference === 'object') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Missing object: ${path}`);
  for (const [key, entry] of Object.entries(reference)) {
   if (!Object.hasOwn(value, key)) throw new Error(`Missing key: ${path}.${key}`);
   validateCopy(entry, (value as Record<string, unknown>)[key], `${path}.${key}`);
  }
 }
}
