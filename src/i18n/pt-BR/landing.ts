import type { UiLabels } from "@/types/content";
import { sharedStoreData, type LocalizedLandingContent } from "../shared/landing";

const labels: UiLabels = {
	features: "Recursos",
	faq: "Perguntas frequentes",
	screenshots: "Capturas de tela",
	userReviews: "Avaliações",
	downloadOn: "Baixe na",
	appStore: "App Store",
	ratings: "avaliações",
	version: "Versão",
	requires: "Requisitos",
	updated: "Atualização",
	iphone: "iPhone",
	ipad: "iPad",
	privacy: "Política de Privacidade",
	terms: "Termos de Uso",
	allRightsReserved: "Todos os direitos reservados.",
	languageLabel: "Idioma",
	closeLightbox: "Fechar imagem ampliada",
	previousImage: "Captura anterior",
	nextImage: "Próxima captura",
	goToImage: "Ir para a captura",
};

export const landing: LocalizedLandingContent = {
	locale: "pt-BR",
	htmlLang: "pt-BR",
	name: "ClipDock",
	shortName: "ClipDock",
	description: "Extraia vídeos de links compartilhados compatíveis, baixe em segundo plano, salve, organize e edite com ferramentas práticas.",
	seoTitle: "ClipDock | Baixe vídeos da web no iPhone e iPad",
	metaDescription: "Extraia, baixe, salve, organize e edite vídeos de páginas e links compartilhados compatíveis com o ClipDock para iPhone e iPad.",
	keywords: ["ClipDock", "baixar vídeos", "baixar vídeos da web", "baixar por link", "download em segundo plano", "salvar vídeos", "editar vídeos", "salvar em Fotos"],
	...sharedStoreData,
	features: [],
	faqs: [],
	reviews: [],
	labels,
	appPreview: { ...sharedStoreData.appPreview, ariaLabel: "Prévia do ClipDock para iPhone" },
	screenshots: { iphone: [], ipad: [] },
};
