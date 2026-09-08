export interface DemoCaption {
	/** Seconds in the source video. The end time is exclusive. */
	start: number;
	end: number;
	text: string;
}

/** Keep these timings aligned with public/assets/demos when replacing recordings. */
export const demoCaptions: Record<string, DemoCaption[]> = {
	"/assets/demos/share-link.mp4": [
		{ start: 0, end: 4, text: "打开视频分享菜单，点击「复制链接」。" },
		{ start: 4, end: 6, text: "返回 ClipDock，自动填入剪贴板链接。" },
		{ start: 6, end: 8, text: "点击「提取」，识别链接中的视频。" },
		{ start: 8, end: 12.4, text: "识别后开始下载，可在管理页查看进度。" },
	],
	"/assets/demos/copy-background.mp4": [
		{ start: 0, end: 4, text: "开启自动下载和后台检测，并允许通知。" },
		{ start: 4, end: 6, text: "回到视频 App，保持后台检测运行。" },
		{ start: 6, end: 10, text: "刷到喜欢的视频，打开分享并复制链接。" },
		{ start: 10, end: 15, text: "继续浏览、复制下一条，无需切回 ClipDock。" },
		{ start: 15, end: 21, text: "识别成功后，通知提示已开始后台下载。" },
		{ start: 21, end: 34.5, text: "继续刷视频，复制的链接会自动创建下载任务。" },
	],
	"/assets/demos/web-long-press.mp4": [
		{ start: 0, end: 4, text: "在内置浏览器打开网页，先播放视频。" },
		{ start: 4, end: 6, text: "查看检测到的视频，点击需要的资源。" },
		{ start: 6, end: 10, text: "验证视频资源后，自动创建下载任务。" },
		{ start: 10, end: 16, text: "打开管理页，查看视频下载进度。" },
		{ start: 16, end: 19.584, text: "下载完成，点开预览或保存到相册。" },
	],
	"/assets/demos/batch-playlist.mp4": [
		{ start: 0, end: 3, text: "在「批量」页粘贴播放列表链接。" },
		{ start: 3, end: 5, text: "点击「加载列表」，解析其中的视频。" },
		{ start: 5, end: 8, text: "选中需要的视频，一次加入下载队列。" },
		{ start: 8, end: 19, text: "在管理页查看多个视频的下载进度。" },
	],
};

export function captionAt(src: string, time: number, fallback: string): string {
	// CDN releases keep the original /assets/ suffix, including after redirects.
	const pathname = new URL(src, "https://clipdock.video").pathname;
	const assetIndex = pathname.indexOf("/assets/");
	const key = assetIndex >= 0 ? pathname.slice(assetIndex) : pathname;
	return demoCaptions[key]?.find((cue) => time >= cue.start && time < cue.end)?.text ?? fallback;
}
