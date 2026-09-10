import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";
const labels: UiLabels = {
  features: "Fonctionnalités", faq: "Questions fréquentes", screenshots: "Captures d’écran", userReviews: "Avis des utilisateurs",
  downloadOn: "Télécharger dans l’", appStore: "App Store", ratings: "avis", version: "Version", requires: "Configuration requise", updated: "Mise à jour",
  iphone: "iPhone", ipad: "iPad", privacy: "Confidentialité", terms: "Conditions d’utilisation", allRightsReserved: "Tous droits réservés.", languageLabel: "Langue",
  closeLightbox: "Fermer l’aperçu", previousImage: "Image précédente", nextImage: "Image suivante", goToImage: "Aller à l’image"
};
export const landing: LocalizedLandingContent = {
  locale: "fr", htmlLang: "fr", name: "ClipDock : téléchargement de vidéos", shortName: "ClipDock",
  description: "Extrayez, téléchargez en arrière-plan, enregistrez et organisez les vidéos issues de liens compatibles, puis retouchez-les avec les outils intégrés.",
  seoTitle: "ClipDock : téléchargez des vidéos sur iPhone et iPad",
  metaDescription: "Avec ClipDock sur iPhone et iPad, extrayez, téléchargez, enregistrez, organisez et retouchez des vidéos à partir d’URL et de liens de partage compatibles.",
  keywords: ["ClipDock", "télécharger une vidéo", "téléchargement vidéo iPhone", "téléchargement vidéo iPad", "vidéo depuis un lien", "téléchargement en arrière-plan", "outils vidéo", "enregistrer dans Photos"],
  ...sharedStoreData, features: [], faqs: [], reviews: [], labels,
  appPreview: { ...sharedStoreData.appPreview, ariaLabel: "Vidéo de présentation de ClipDock sur iPhone" }, screenshots: { iphone: [], ipad: [] }
};
