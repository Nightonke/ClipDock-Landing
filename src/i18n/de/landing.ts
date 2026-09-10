import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";

const labels: UiLabels = {
 features: "Funktionen",
 faq: "Häufige Fragen",
 screenshots: "Screenshots",
 userReviews: "Rezensionen",
 downloadOn: "Laden im",
 appStore: "App Store",
 ratings: "Bewertungen",
 version: "Version",
 requires: "Voraussetzungen",
 updated: "Aktualisiert",
 iphone: "iPhone",
 ipad: "iPad",
 privacy: "Datenschutz",
 terms: "Nutzungsbedingungen",
 allRightsReserved: "Alle Rechte vorbehalten.",
 languageLabel: "Sprache",
 closeLightbox: "Bildansicht schließen",
 previousImage: "Vorheriges Bild",
 nextImage: "Nächstes Bild",
 goToImage: "Zum Bild wechseln",
};

export const landing: LocalizedLandingContent = {
 locale: "de",
 htmlLang: "de",
 name: "ClipDock",
 shortName: "ClipDock",
 description: "Extrahiere Videos aus unterstützten Links, lade sie im Hintergrund herunter, verwalte sie und bearbeite sie mit praktischen Video-Werkzeugen.",
 seoTitle: "ClipDock | Webvideos laden auf iPhone und iPad",
 metaDescription: "Videos, Bilder und Audio aus unterstützten Links speichern: mit ClipDock für iPhone und iPad herunterladen, verwalten, bearbeiten und teilen.",
 keywords: ["ClipDock", "Videos herunterladen", "Webvideos speichern", "Video per Link laden", "Downloads im Hintergrund", "Videos bearbeiten", "YouTube-Untertitel", "Videos in Fotos speichern"],
 ...sharedStoreData,
 features: [],
 faqs: [],
 reviews: [],
 labels,
 appPreview: { ...sharedStoreData.appPreview, ariaLabel: "ClipDock-Vorschau auf dem iPhone" },
 screenshots: { iphone: [], ipad: [] },
};
