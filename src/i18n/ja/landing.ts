import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";

const labels: UiLabels = {
 features: "機能", faq: "よくある質問", screenshots: "スクリーンショット", userReviews: "ユーザーレビュー",
 downloadOn: "ダウンロード", appStore: "App Store", ratings: "件の評価", version: "バージョン",
 requires: "システム要件", updated: "更新日", iphone: "iPhone", ipad: "iPad", privacy: "プライバシーポリシー",
 terms: "利用規約", allRightsReserved: "無断転載を禁じます。", languageLabel: "言語",
 closeLightbox: "画像のプレビューを閉じる", previousImage: "前の画像", nextImage: "次の画像", goToImage: "画像へ移動",
};
export const landing: LocalizedLandingContent = {
 locale: "ja", htmlLang: "ja", name: "ClipDock", shortName: "ClipDock",
 description: "対応する共有リンクから動画を抽出し、バックグラウンドでダウンロード。保存・整理から動画の加工まで。",
 seoTitle: "ClipDock｜iPhone・iPad向けWeb動画ダウンローダー",
 metaDescription: "ClipDockで対応するURLや共有リンクから動画を抽出・ダウンロード。保存、整理、加工をiPhoneとiPadで。",
 keywords: ["ClipDock", "Web動画ダウンロード", "動画リンク保存", "バックグラウンドダウンロード", "動画保存", "動画加工", "写真に保存"],
 ...sharedStoreData,
 features: [], faqs: [], reviews: [], labels,
 appPreview: { ...sharedStoreData.appPreview, ariaLabel: "ClipDock iPhoneアプリのプレビュー動画" },
 screenshots: { iphone: [], ipad: [] },
};
