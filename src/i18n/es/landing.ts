import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";

const labels: UiLabels = {
	features: "Funciones",
	faq: "Preguntas frecuentes",
	screenshots: "Capturas de pantalla",
	userReviews: "Reseñas",
	downloadOn: "Descargar en",
	appStore: "App Store",
	ratings: "valoraciones",
	version: "Versión",
	requires: "Requisitos",
	updated: "Actualización",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "Política de privacidad",
	terms: "Términos de uso",
	allRightsReserved: "Todos los derechos reservados.",
	languageLabel: "Idioma",
	closeLightbox: "Cerrar vista previa",
	previousImage: "Captura anterior",
	nextImage: "Captura siguiente",
	goToImage: "Ir a la captura",
};

export const landing: LocalizedLandingContent = {
	locale: "es",
	htmlLang: "es",
	name: "ClipDock",
	shortName: "ClipDock",
	description: "Extrae vídeos de enlaces compartidos compatibles, descárgalos en segundo plano, guárdalos y organízalos, y procésalos con herramientas prácticas.",
	seoTitle: "ClipDock: descargador de vídeos para iPhone, iPad y Android",
	metaDescription: "Guarda vídeos, imágenes y audio de enlaces compatibles. Organiza archivos y recorta, convierte o redimensiona vídeos locales en iPhone, iPad y Android. Las funciones y fuentes disponibles varían por plataforma.",
	keywords: ["ClipDock", "descargar vídeos", "descargar vídeos web", "descargar desde enlaces", "descargas en segundo plano", "guardar vídeos", "procesar vídeos", "guardar en Fotos"],
	...sharedStoreData,
	features: [],
	faqs: [],
	reviews: [],
	labels,
	appPreview: { ...sharedStoreData.appPreview, ariaLabel: "Vista previa de ClipDock para iPhone" },
	screenshots: { iphone: [], ipad: [] },
};
