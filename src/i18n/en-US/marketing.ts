import type { MarketingContent } from "../shared/marketing";
export const en: MarketingContent = {
	nav: {
		features: "Features",
		useCases: "Use cases",
		faq: "FAQ",
		getApp: "Get the app",
		menu: "Menu",
	},
	hero: {
		eyebrow: "Multi-video workspace · iPhone + iPad",
		title: "More videos. One screen.\nA whole lot more fun.",
		description:
			"Play, align, compare, and export up to 36 videos on one screen. Built for the moments one player cannot show you.",
		primaryCta: "Download free",
		secondaryCta: "Watch the product film",
		ratingText: "4.4 ★ from 24 ratings",
		privacyText: "No data collected",
		filmLabel: "Split Screen Player in action",
		filmTitle: "Many views. One timeline.",
		soundHint: "Tap the player for sound",
	},
	capabilitiesLabel: "Inside the workspace",
	capabilities: [
		"Sync Point",
		"Sync Lock",
		"Frame stepping",
		"Custom layouts",
		"IPTV + Xtream",
		"External display",
		"Split-screen export",
	],
	chapters: [
		{
			id: "play",
			number: "01",
			kicker: "Multiple videos · One screen",
			title: "Watch up to 36 videos on one screen.",
			description:
				"Watch up to 36 videos at once with as many as 144 layouts. Built for iPhone and iPad in portrait or landscape, with the option to create your own layouts.",
			points: [
				"2–36 videos at once",
				"144 layouts + custom layouts",
				"Portrait and landscape",
				"iPad support",
			],
			imageIndex: 1,
			imageAlt: "Multiple videos playing together in Split Screen Player",
			linkLabel: "Explore multi-video playback",
			linkPath: "features/multi-video-player",
		},
		{
			id: "control",
			number: "02",
			kicker: "Global control · Fast and simple",
			title: "Control every video from one place.",
			description:
				"Use global progress controls, Sync Lock, and more to change every video's progress, playback state, speed, or active video in one move. Ideal for reviewing different edits, takes, camera angles, or reference footage.",
			points: ["Global progress control", "Sync Lock"],
			imageIndex: 9,
			imageAlt: "Global playback controls for multiple videos",
			linkLabel: "Explore global controls",
			linkPath: "features/multi-video-player",
		},
		{
			id: "align",
			number: "03",
			kicker: "Precise sync · Match the action",
			title: "Align the action, not just the time.",
			description:
				"Use Sync Point and continuous sync correction to keep different videos anchored to the same movement. Ideal for comparing sports, dance, fitness, lessons, and more.",
			points: ["Sync Point", "Continuous sync correction"],
			imageIndex: 4,
			imageAlt: "Multiple videos precisely synchronized to the same action",
			linkLabel: "Explore precise synchronization",
			linkPath: "features/video-sync-comparison",
		},
		{
			id: "export",
			number: "04",
			kicker: "Export · Share the whole view",
			title: "Turn many views into one finished video.",
			description:
				"Combine the multi-video playback on screen into a single video, with control over framing, resolution, frame rate, bitrate, borders, background, watermark, BGM, and audio sources. Ideal for comparison videos, tutorials, reaction videos, or short-form content.",
			points: ["Multiple aspect ratios", "Per-clip trim and speed", "Audio mix + BGM"],
			imageIndex: 6,
			imageAlt: "Split-screen export settings",
			linkLabel: "See split-screen export",
			linkPath: "features/split-screen-export",
		},
		{
			id: "streams",
			number: "05",
			kicker: "Video · Images · Web · Live · PDF · Music",
			title: "More than video. A multitasking workspace.",
			description:
				"Combine local video, HLS, M3U8, RTSP, IPTV, Xtream channels, images, web pages, PDFs, and music in the same layout.",
			points: [
				"IPTV + Xtream Codes",
				"HLS / M3U8 / RTSP",
				"Images, web pages, PDFs, and music",
			],
			imageIndex: 8,
			imageAlt: "Videos, images, a web page, and a PDF in one workspace",
			linkLabel: "Explore media and streaming support",
			linkPath: "features/iptv-streaming",
		},
	],
	useCases: {
		eyebrow: "Built for comparison",
		title: "When one view leaves something out.",
		description:
			"Split Screen Player is useful anywhere timing, angle, or context changes what you see.",
		items: [
			{
				slug: "sports-motion-analysis",
				number: "A / 01",
				title: "Sports & motion",
				description: "Compare form, timing, posture, or technique from multiple sessions and angles.",
				imageIndex: 4,
				linkLabel: "Open the sports workflow",
			},
			{
				slug: "multi-angle-review",
				number: "A / 02",
				title: "Takes & camera angles",
				description: "Review edits, performances, references, and multi-camera footage on one timeline.",
				imageIndex: 1,
				linkLabel: "Open the review workflow",
			},
			{
				slug: "learning-reference",
				number: "A / 03",
				title: "Learning & reference",
				description: "Keep a lesson, source video, PDF, image, and web page visible together.",
				imageIndex: 7,
				linkLabel: "Open the learning workflow",
			},
		],
	},
	comparison: {
		eyebrow: "The workflow gap",
		title: "A second player adds a window. This adds a system.",
		description:
			"See how much manual setup remains after the files are opened.",
		columns: ["What you need", "Separate players", "Video editor", "Split Screen Player"],
		rows: [
			{ label: "2–36 views together", values: ["Manual", "Partial", "Built in"] },
			{ label: "Live synchronized playback", values: ["Missing", "Partial", "Built in"] },
			{ label: "Frame-level comparison", values: ["Manual", "Built in", "Built in"] },
			{ label: "Custom multi-view layouts", values: ["Manual", "Built in", "Built in"] },
			{ label: "Instant split-screen export", values: ["Missing", "Built in", "Built in"] },
			{ label: "Streams, PDFs, and web pages", values: ["Partial", "Missing", "Built in"] },
		],
		note: "“Partial” and “Manual” describe the typical workflow. Individual apps may vary.",
	},
	trust: {
		eyebrow: "Designed to stay useful",
		title: "Serious controls. Honest boundaries.",
		description:
			"Your device and source files still determine real-world playback performance. The app gives you the tools to make that workspace manageable.",
		items: [
			{
				value: "No data",
				title: "Collected by the app",
				description: "The current App Store privacy label states that the developer does not collect data.",
			},
			{
				value: "iOS 15+",
				title: "Broad device support",
				description: "Runs on iPhone and iPad, with Apple silicon Mac and Apple Vision compatibility.",
			},
			{
				value: "1.0.26",
				title: "Actively improving",
				description: "Recent updates added better sync correction, drag-and-drop rearranging, and floating controls.",
			},
		],
	},
	steps: {
		eyebrow: "60-second setup",
		title: "Open. Arrange. Press play.",
		items: [
			{ title: "Choose your sources", description: "Select videos, folders, links, streams, images, PDFs, or web pages." },
			{ title: "Pick the layout", description: "Start with one of 144 layouts or create a custom arrangement." },
			{ title: "Sync and inspect", description: "Lock playback, set sync points, and review the exact moment you need." },
		],
	},
	closing: {
		eyebrow: "Your multi-view workspace starts here",
		title: "See the whole moment.",
		description: "Download free, open two videos, and build your first synchronized comparison.",
		cta: "Download Split Screen Player",
	},
	footerTagline: "One screen for every angle, source, and moment.",
	detailLabels: {
		home: "Home",
		keyBenefits: "What it gives you",
		howItWorks: "How the workflow works",
		exploreMore: "Explore more",
		backHome: "Back to the full product story",
	},
	details: {
		features: {
			"multi-video-player": {
				kindLabel: "Feature / multi-video playback",
				title: "A multi-video player built for the whole picture.",
				seoTitle: "Multi-Video Player for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Play 2 to 36 videos at once on iPhone and iPad with 144 layouts, custom split-screen arrangements, playlists, and external display support.",
				intro:
					"Most video players are designed around one file. Split Screen Player gives every clip its own view while keeping the full workspace under one set of controls.",
				promise: "From two references to a 36-view wall, the layout stays yours.",
				imageIndex: 1,
				imageAlt: "Multiple videos playing on one screen",
				highlights: [
					{ title: "Scale from 2 to 36", description: "Use a simple side-by-side view or fill an iPad with a dense multi-view layout." },
					{ title: "Start with 144 layouts", description: "Choose portrait or landscape presets, resize dividers, or build a custom layout." },
					{ title: "Control the workspace", description: "Reorder sources, cycle maximized views, normalize volume, and save bookmarks." },
				],
				steps: [
					{ title: "Select the videos", description: "Open individual files, albums, folders, playlists, or saved bookmarks." },
					{ title: "Choose a layout", description: "Pick a preset or create a custom grid for the number and shape of views." },
					{ title: "Play as one system", description: "Use global playback, progress, mute, and display controls across the workspace." },
				],
				closingTitle: "Stop switching between players.",
				closingDescription: "Put every clip on one screen and keep the context visible.",
			},
			"video-sync-comparison": {
				kindLabel: "Feature / sync & comparison",
				title: "Compare the same moment, not just two videos.",
				seoTitle: "Sync and Compare Videos Frame by Frame | Split Screen Player",
				metaDescription:
					"Synchronize multiple videos with Sync Point and Sync Lock, then compare motion frame by frame with millisecond timing, zoom, and checkpoints.",
				intro:
					"Different recordings rarely begin at the same instant. Sync Point lets you define the moment that matters in each clip, while Sync Lock keeps the relationship intact.",
				promise: "Match the movement once, then inspect every angle together.",
				imageIndex: 4,
				imageAlt: "Videos synchronized for comparison",
				highlights: [
					{ title: "Offset with Sync Point", description: "Anchor each clip to the same action even when the recordings started at different times." },
					{ title: "Stay aligned", description: "Use pre-roll and continuous correction to maintain synchronization during playback." },
					{ title: "Inspect frame by frame", description: "Step in either direction, display milliseconds, zoom, and save checkpoints." },
				],
				steps: [
					{ title: "Find the anchor", description: "Move each video to the shared motion, sound, or visual cue." },
					{ title: "Set and lock", description: "Save Sync Points and enable Sync Lock for linked seeking and playback." },
					{ title: "Review the delta", description: "Slow down, step frame by frame, and focus on the difference between angles." },
				],
				closingTitle: "The important difference can last one frame.",
				closingDescription: "Keep every angle aligned long enough to see it.",
			},
			"split-screen-export": {
				kindLabel: "Feature / split-screen export",
				title: "Export the comparison exactly as you see it.",
				seoTitle: "Split-Screen Video Export on iPhone & iPad | Split Screen Player",
				metaDescription:
					"Export multi-video layouts as one shareable video with crop, zoom, trim, speed, resolution, frame rate, borders, watermark, BGM, and audio controls.",
				intro:
					"The workspace does not have to remain inside the app. Split-screen export turns the complete layout into a single video for a tutorial, review, reaction, or short-form post.",
				promise: "Your arrangement, timing, framing, and audio become one finished file.",
				imageIndex: 5,
				imageAlt: "Split-screen video export controls",
				highlights: [
					{ title: "Keep the composition", description: "Preserve layout, crop, rotation, zoom, position, background, borders, and labels." },
					{ title: "Shape every clip", description: "Set trim ranges, playback speed, and framing independently for each source." },
					{ title: "Finish the sound", description: "Choose audio sources, balance volume, add fades, and include background music." },
				],
				steps: [
					{ title: "Arrange the view", description: "Build the layout and frame each source the way the audience should see it." },
					{ title: "Choose export settings", description: "Set ratio, resolution, frame rate, bitrate, visual treatment, and audio." },
					{ title: "Create one file", description: "Render the synchronized multi-view workspace as a shareable video." },
				],
				closingTitle: "The comparison is already edited.",
				closingDescription: "Turn the view on your screen into the video you send.",
			},
			"iptv-streaming": {
				kindLabel: "Feature / streams & sources",
				title: "One workspace for streams, files, and reference material.",
				seoTitle: "IPTV, Xtream, M3U8 & RTSP Multi-View Player | Split Screen Player",
				metaDescription:
					"Play IPTV, Xtream Codes, HLS, M3U8, and RTSP streams beside local videos, images, PDFs, and web pages on iPhone and iPad.",
				intro:
					"Comparison often involves more than local clips. Load stream links, IPTV channels, image folders, PDFs, and web references without leaving the multi-view layout.",
				promise: "Keep live and static sources visible in the same place.",
				imageIndex: 9,
				imageAlt: "IPTV and streaming sources in a multi-view layout",
				highlights: [
					{ title: "Connect live sources", description: "Open HLS, M3U8, and RTSP links with bookmarks and automatic retry." },
					{ title: "Browse IPTV", description: "Load and search IPTV or Xtream Codes channel lists inside the app." },
					{ title: "Mix source types", description: "Place streams beside local video, images, PDFs, audio, and web pages." },
				],
				steps: [
					{ title: "Add the source", description: "Paste a stream link, connect IPTV, or choose a local file or reference." },
					{ title: "Place it in the layout", description: "Mix source types inside any preset or custom split-screen arrangement." },
					{ title: "Save the workspace", description: "Bookmark the selected sources and layout so the full setup returns together." },
				],
				closingTitle: "Your references do not all live in one format.",
				closingDescription: "Your workspace should still keep them together.",
			},
		},
		useCases: {
			"sports-motion-analysis": {
				kindLabel: "Use case / sports & motion",
				title: "See what changed between repetitions.",
				seoTitle: "Sports Video Comparison & Motion Analysis | Split Screen Player",
				metaDescription:
					"Compare sports, dance, fitness, and technique videos side by side with synchronized playback, frame stepping, zoom, and checkpoints.",
				intro:
					"Small changes in timing, posture, balance, or range of motion are hard to spot when clips play one after another. Put them on the same timeline instead.",
				promise: "Compare sessions, athletes, and angles without losing the motion.",
				imageIndex: 4,
				imageAlt: "Sports videos aligned for motion comparison",
				highlights: [
					{ title: "Match the repetition", description: "Set Sync Points at the same phase of the movement across every recording." },
					{ title: "Control the pace", description: "Use linked playback, speed controls, frame stepping, and millisecond timing." },
					{ title: "Share the feedback", description: "Export the aligned views as one annotated comparison video." },
				],
				steps: [
					{ title: "Open each angle", description: "Choose recordings from different sessions, athletes, or camera positions." },
					{ title: "Anchor the action", description: "Align the same movement and lock the clips together." },
					{ title: "Review and export", description: "Inspect the frames that matter and create one comparison file." },
				],
				closingTitle: "Technique becomes clearer when timing matches.",
				closingDescription: "Bring every repetition onto the same screen.",
			},
			"multi-angle-review": {
				kindLabel: "Use case / takes & camera angles",
				title: "Review every take without leaving the scene.",
				seoTitle: "Multi-Angle Video Review for iPhone & iPad | Split Screen Player",
				metaDescription:
					"Review camera angles, performances, edits, takes, and reference clips together with synchronized multi-video playback and custom layouts.",
				intro:
					"Switching files hides continuity. A multi-view layout keeps performances, framing, timing, and edits visible at the same time.",
				promise: "Make decisions with every angle still in view.",
				imageIndex: 1,
				imageAlt: "Multiple camera angles displayed together",
				highlights: [
					{ title: "See every take", description: "Play alternative performances, edits, or camera positions side by side." },
					{ title: "Keep continuity visible", description: "Synchronize shared action and use linked seeking to compare exact beats." },
					{ title: "Build reference cuts", description: "Create layouts for review, reactions, tutorials, or short-form material." },
				],
				steps: [
					{ title: "Gather the footage", description: "Open selected takes, edits, camera angles, and reference clips." },
					{ title: "Arrange for the decision", description: "Choose a layout that makes framing, timing, or performance easy to compare." },
					{ title: "Save or export", description: "Bookmark the review workspace or render it as a single split-screen file." },
				],
				closingTitle: "Keep the scene intact while you compare it.",
				closingDescription: "One timeline makes every angle easier to judge.",
			},
			"learning-reference": {
				kindLabel: "Use case / learning & reference",
				title: "Keep the lesson and the source material together.",
				seoTitle: "Multi-View Learning & Reference Workspace | Split Screen Player",
				metaDescription:
					"View lesson videos, reference clips, PDFs, images, web pages, and streams together in one customizable iPhone or iPad workspace.",
				intro:
					"Learning breaks down when the reference disappears behind another app. Keep the demonstration, notes, source material, and your own recording visible together.",
				promise: "Less switching. More context.",
				imageIndex: 7,
				imageAlt: "Videos, web pages, PDFs, and images in one split-screen workspace",
				highlights: [
					{ title: "Mix formats", description: "Combine local video with images, PDF documents, web pages, streams, and audio." },
					{ title: "Build your layout", description: "Use a preset or custom arrangement that fits the lesson and device." },
					{ title: "Return instantly", description: "Save selected sources and the layout together as a reusable bookmark." },
				],
				steps: [
					{ title: "Choose the lesson", description: "Open the main demonstration, lecture, or reference video." },
					{ title: "Add the context", description: "Place notes, PDFs, web references, images, or another recording beside it." },
					{ title: "Save the workspace", description: "Bookmark the complete setup for the next study or practice session." },
				],
				closingTitle: "Reference material works better when it stays visible.",
				closingDescription: "Build one workspace for the whole lesson.",
			},
		},
	},
};
