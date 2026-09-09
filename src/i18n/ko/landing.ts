import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";

const labels: UiLabels = {
 features: "주요 기능", faq: "자주 묻는 질문", screenshots: "스크린샷", userReviews: "사용자 리뷰",
 downloadOn: "다운로드", appStore: "App Store", ratings: "개의 평가", version: "버전",
 requires: "시스템 요구 사항", updated: "업데이트", iphone: "iPhone", ipad: "iPad", privacy: "개인정보 처리방침",
 terms: "이용약관", allRightsReserved: "모든 권리 보유.", languageLabel: "언어",
 closeLightbox: "이미지 미리보기 닫기", previousImage: "이전 이미지", nextImage: "다음 이미지", goToImage: "이미지로 이동",
};
export const landing: LocalizedLandingContent = {
 locale: "ko", htmlLang: "ko", name: "ClipDock", shortName: "ClipDock",
 description: "지원되는 공유 링크에서 동영상을 추출하고 백그라운드로 다운로드하세요. 저장과 정리, 동영상 처리까지 함께할 수 있습니다.",
 seoTitle: "ClipDock | iPhone·iPad 웹 동영상 다운로더",
 metaDescription: "ClipDock으로 지원되는 웹 주소와 공유 링크에서 동영상을 추출하고 다운로드하세요. iPhone과 iPad에서 저장, 정리, 편집까지 할 수 있습니다.",
 keywords: ["ClipDock", "웹 동영상 다운로드", "동영상 링크 저장", "백그라운드 다운로드", "동영상 저장", "동영상 편집", "사진에 저장"],
 ...sharedStoreData,
 features: [], faqs: [], reviews: [], labels,
 appPreview: { ...sharedStoreData.appPreview, ariaLabel: "ClipDock iPhone 앱 미리보기 동영상" },
 screenshots: { iphone: [], ipad: [] },
};
