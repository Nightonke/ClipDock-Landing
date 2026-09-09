const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
// The general dictionary can split product names and terms such as 链接 into single characters.
const productTerms = /(?:X（Twitter）|影随存|小红书|抖音|微博|链接|主页|拼接|宫格|转为|实况照片|长按|转码|镜像|音视频|音频|倒放|截图|剪贴板|手边)/gu;

// Keep Chinese words and their punctuation together without changing the copy.
export function headingParts(text: string): string[] {
	const parts: string[] = [];
	let prefix = "";
	const segments: { segment: string; isWordLike?: boolean }[] = [];
	let offset = 0;
	for (const match of text.matchAll(productTerms)) {
		segments.push(...segmenter.segment(text.slice(offset, match.index)));
		segments.push({ segment: match[0], isWordLike: true });
		offset = match.index + match[0].length;
	}
	segments.push(...segmenter.segment(text.slice(offset)));
	for (const { segment, isWordLike } of segments) {
		if (!isWordLike) {
			if (/^[（(“‘「《【]$/.test(segment) || !parts.length || prefix) {
				prefix += segment;
			} else {
				parts[parts.length - 1] += segment;
			}
			continue;
		}
		// Keep mixed abbreviations such as B 站 and UP 主 intact.
		if (!prefix && ((segment === "站" && parts.at(-1) === "B ") || (segment === "主" && parts.at(-1) === "UP "))) {
			parts[parts.length - 1] += segment;
		} else {
			parts.push(prefix + segment);
		}
		prefix = "";
	}
	if (prefix) {
		if (parts.length) parts[parts.length - 1] += prefix;
		else parts.push(prefix);
	}
	return parts;
}
