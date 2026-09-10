export const capabilities = [
	"Descarga desde enlaces compartidos", "Descarga desde direcciones web", "Copia y descarga", "Sin cambiar de app constantemente",
	"Detecta y descarga vídeos web", "Descarga perfiles por lotes", "Descarga canales por lotes", "Descarga hashtags por lotes",
	"Descarga listas de reproducción por lotes", "Descarga colecciones por lotes", "Descargas en segundo plano", "Gestión de vídeos", "Guardar en Fotos",
	"Recortar", "Transcodificar", "Unir", "Cambiar el tamaño/lienzo", "Girar", "Reflejar", "Cambiar velocidad", "Extraer audio",
	"Fusionar audio y vídeo", "Reproducir al revés", "Agregar marca de agua", "Vídeo a GIF", "Vídeo a Live Photo",
	"Captura de video", "Cambiar MD5", "Extraer subtítulos de YouTube",
];

const supportedPlatforms = "YouTube, Sora (OpenAI), Instagram (incluidas las historias), X (Twitter), TikTok, Threads, Facebook, Vimeo, afreecatv, Tumblr, Triller, Likee, Twitch, Pinterest, Snapchat, Reddit, VK, Dailymotion, SoundCloud, Lemon8, Suno, AcFun, Bilibili, Tmall, Xianyu, Dianping, UC Video, Qutoutiao, Pipixia, Pipigaoxiao, Weibo, Miaopai, Oasis, Xiaokaxiu, Meitu, Meipai, NetEase Cloud Music, CCTV, Xinhuanet, Huxiu, Huya, Douyu, Tangdou, Ximalaya, Momo, Inke, Xunlei, WIDE, Zuiyou, Eyepetizer, Kuran, Jianying, Qiushibaike y Pear Video, entre otras plataformas. El contenido descargable depende del resultado de la extracción del enlace";

export const featureSections = [
	{
		number: "01",
		video: "share-link",
		kicker: "Del enlace al vídeo",
		title: "Descarga desde un enlace",
		description:
			"Pega un enlace compartido o una dirección web compatible y ClipDock extraerá los vídeos, imágenes o audios disponibles. Si la fuente ofrece versiones en HD o sin marca de agua, podrás elegirlas. La calidad, el formato y las marcas de agua dependen del recurso original.",
		points: ["Ver plataformas compatibles", "Elige entre las calidades que ofrece la fuente", "Vídeos, imágenes y audio", "Continúa descargando en segundo plano"],
		platformDetails: supportedPlatforms,
		placeholder: "Captura de la detección de enlaces",
		tone: "blue",
	},
	{
		number: "02",
		video: "copy-background",
		kicker: "Solo tienes que copiar",
		title: "Copia el enlace y sigue viendo",
		description:
			"Activa «Enlaces de descarga automática» y «Detectar en segundo plano» y mantén activa la imagen dentro de imagen. Al copiar un enlace compatible de YouTube, TikTok, X u otra plataforma, ClipDock creará la descarga en segundo plano. Activa las notificaciones de descarga y concede el permiso del sistema para recibir avisos de finalización o error.",
		points: ["Una vez activado, no hace falta volver a pegar el enlace", "Desliza la ventana flotante al borde para ocultarla"],
		placeholder: "Captura de las tareas de descarga",
		tone: "lime",
	},
	{
		number: "03",
		video: "web-long-press",
		kicker: "Reproduce y detecta recursos",
		title: "Mantén pulsado para descargar",
		description:
			"Entra en «Vídeo web», abre la página y reproduce el vídeo. Si hay anuncios, sáltalos o espera a que terminen. Mantén pulsado el vídeo para elegir un recurso descargable, o consulta los vídeos detectados con el botón inferior. La disponibilidad depende del sitio y de las condiciones de acceso.",
		points: ["Detecta vídeos descargables en la página", "Elige el recurso en la lista de detección", "Mantén pulsado el vídeo que se está reproduciendo"],
		placeholder: "Captura de una descarga desde el navegador integrado",
		tone: "coral",
	},
	{
		number: "04",
		video: "batch-playlist",
		kicker: "Descargas por lotes",
		title: "Elige una lista y descarga en lote",
		description: "Pega un enlace compatible de canal, perfil, lista de reproducción o hashtag. Carga la lista, selecciona los vídeos o imágenes que quieras y añádelos a la cola. Las listas se cargan por páginas; la versión gratuita permite cargar las primeras 2 páginas. Los resultados disponibles no siempre incluyen todas las publicaciones.",
		points: ["Ver compatibilidad de las descargas por lotes"],
		platformDetails: "Compatible con YouTube (canales, Shorts, hashtags y listas de reproducción), Instagram y TikTok (perfiles y hashtags), Douyin y Bilibili (perfiles y colecciones), y perfiles de X (Twitter), Weibo y Haokan Video, entre otros. Los tipos de enlace y el alcance de las listas varían según la plataforma.",
		placeholder: "Captura de descargas por lotes de canales, perfiles y listas de reproducción",
		tone: "blue",
	},

	{
		number: "05",
		kicker: "Extraer subtítulos de YouTube",
		title: "Guarda los subtítulos por separado",
		description: "Pega un enlace de YouTube para extraer los subtítulos que ya ofrece el vídeo. Elige los idiomas y el formato de archivo, y guárdalos en Archivos o compártelos con otra app para leerlos, organizarlos y usarlos después.",
		points: ["Admite pistas existentes en varios idiomas y subtítulos autogenerados", "Selecciona varias pistas y elige entre siete formatos, como SRT y VTT", "Guarda en Archivos o comparte directamente"],
		carousel: true,
		tutorial: "extract-youtube-subtitles-iphone",
		tone: "lime",
	},
];

export const tools = [
	{ mark: "CUT", slug: "trim-video-iphone", title: "Recortar video", description: "Conserva el fragmento del vídeo que te interesa." },
	{ mark: "CONV", slug: "transcode-video-iphone", title: "Transcodificar vídeo", description: "Convierte el formato del vídeo según el uso que quieras darle." },
	{ mark: "JOIN", slug: "join-videos-iphone", title: "Unir videos", description: "Combina varios clips en un solo vídeo, en el orden que elijas." },
	{ mark: "MIX", slug: "interleave-videos-iphone", title: "Intercalado", description: "Divide varios vídeos en segmentos y alterna sus fragmentos." },
	{ mark: "GRID", slug: "segment-grid-video-iphone", title: "Cuadrícula de segmentos", description: "Coloca distintos momentos de un vídeo en una cuadrícula." },
	{ mark: "SIZE", slug: "resize-video-iphone", title: "Cambiar el tamaño/lienzo", description: "Ajusta la proporción del lienzo y elige bordes, recorte para rellenar u otra distribución." },
	{ mark: "ROTATE", slug: "rotate-video-iphone", title: "Girar video", description: "Gira la imagen para orientarla como necesites." },
	{ mark: "MIRROR", slug: "mirror-video-iphone", title: "Vídeo espejo", description: "Invierte la imagen para crear un efecto de espejo." },
	{ mark: "SPEED", slug: "change-video-speed-iphone", title: "Cambiar velocidad", description: "Acelera o ralentiza la reproducción para ajustar el ritmo." },
	{ mark: "AUDIO", slug: "extract-audio-iphone", title: "Extraer audio", description: "Guarda el sonido del vídeo como un archivo de audio independiente." },
	{ mark: "SOUND", slug: "edit-video-audio-iphone", title: "Edición de audio", description: "Silencia el vídeo o ajusta su volumen." },
	{ mark: "MERGE", slug: "merge-audio-video-iphone", title: "Fusionar audio y vídeo", description: "Combina audio y vídeo en un solo archivo." },
	{ mark: "REVERSE", slug: "reverse-video-iphone", title: "Vídeo inverso", description: "Reproduce el vídeo desde el final hacia el principio." },
	{ mark: "MARK", slug: "add-watermark-video-iphone", title: "Agregar marca de agua", description: "Añade texto o una imagen como marca en tus vídeos." },
	{ mark: "GIF", slug: "video-to-gif-iphone", title: "Vídeo a GIF", description: "Convierte un fragmento en un GIF animado para compartirlo." },
	{ mark: "LIVE", slug: "video-to-live-photo-iphone", title: "Vídeo a Live Photo", description: "Convierte un vídeo en una Live Photo." },
	{ mark: "FRAMES", slug: "capture-video-frames-iphone", title: "Captura de video", description: "Extrae un fotograma o usa los modos de captura por lotes, inteligente y de vista previa grande." },
	{ mark: "MD5", slug: "change-video-md5-iphone", title: "Cambiar MD5", description: "Modifica el valor MD5 del archivo de vídeo." },
];

export const faqs = [
	{
		question: "¿Qué enlaces admite ClipDock?",
		answer:
			`ClipDock admite ${supportedPlatforms}.`,
	},
	{
		question: "¿Por qué no se detectan algunos enlaces?",
		answer:
			"Los cambios en la página, el inicio de sesión, las restricciones regionales, la conexión, los recursos caducados, el DRM o los controles de acceso pueden impedir la detección. Comprueba que el enlace se abra correctamente y vuelve a intentarlo.",
	},
	{
		question: "¿Dónde se guardan los vídeos descargados?",
		answer:
			"Al terminar la descarga, puedes ver, buscar, ordenar o compartir el vídeo en «Gestión» → «Completadas». Toca «Guardar en Fotos» para guardarlo manualmente o activa «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga». Se requiere permiso para Fotos y un formato compatible.",
	},
	{
		question: "¿Se puede descargar en segundo plano?",
		answer:
			"Sí, ClipDock admite tareas de descarga en segundo plano. iOS puede ajustar su tiempo de ejecución según los recursos del sistema, la conexión y el ahorro de energía.",
	},
	{
		question: "¿ClipDock recopila mis datos?",
		answer:
			"La etiqueta de privacidad actual del App Store indica que no se recopilan datos. Al acceder a sitios o recursos de terceros, estos pueden tratar la información habitual de las solicitudes de red según sus propias políticas de privacidad.",
	},
	{
		question: "¿Puedo descargar cualquier vídeo de Internet?",
		answer:
			"No. Guarda solo contenido que te pertenezca, para el que tengas autorización o cuyo uso permita la ley, y respeta las normas del titular, del sitio y de tu región.",
	},
];


export const ui = {
  "ogAlt": "ClipDock — Descarga vídeos de la web en iPhone y iPad",
  "eyebrow": "Múltiples plataformas · iPhone + iPad",
  "heroLine1": "Copia el enlace.",
  "heroLine2": "Guarda el vídeo.",
  "heroDescription": "Guarda vídeos, imágenes y audio de enlaces compartidos y páginas compatibles con ClipDock. Descarga al copiar o selecciona publicaciones por lotes para reducir tareas repetitivas. La calidad, el formato y las marcas de agua dependen de la fuente.",
  "freeDownload": "Descargar gratis",
  "qrLabel": "Escanea con tu iPhone para descargar ClipDock",
  "qrAlt": "Código QR para descargar ClipDock",
  "scan": "Escanea con tu iPhone",
  "getApp": "Descargar app",
  "productInfo": "Información del producto",
  "ratings": "valoraciones",
  "privacyProof": "Sin recopilación de datos de la app",
  "capabilities": "Funciones principales de ClipDock",
  "subtitleLink": "Ver tutorial de subtítulos",
  "demoSuffix": " · Demostración",
  "progress": "Progreso de reproducción del vídeo",
  "placeholder": "Espacio reservado para una imagen",
  "toolsKicker": "Después de descargar",
  "toolsTitle": "Tus herramientas de vídeo, a mano",
  "toolsDescription": "Guardar es solo el primer paso. ClipDock también reúne herramientas para recortar, convertir, unir y compartir tus vídeos.",
  "readTutorial": "Leer tutorial",
  "trustKicker": "Funciones y límites claros",
  "trustTitle": "Descarga con los límites claros.",
  "trustDescription": "ClipDock está pensado para contenido que tienes derecho a guardar y procesar. La disponibilidad de cada enlace también depende de la plataforma y del propio recurso.",
  "trustValue1": "Sin recopilar",
  "trustLabel1": "Datos de la app",
  "trustText1": "La etiqueta de privacidad actual del App Store indica que el desarrollador no recopila datos a través de esta app.",
  "trustLabel2": "iPhone y iPad",
  "trustText2": "Compatible con iPhone con iOS 15 o posterior y iPad con iPadOS 15 o posterior.",
  "trustValue3": "Uso legítimo",
  "trustLabel3": "Guarda contenido que puedas usar",
  "trustText3": "No elude DRM, pagos, controles de acceso ni restricciones de las plataformas.",
  "faqKicker": "Preguntas frecuentes",
  "faqTitle": "Resuelve tus dudas antes de descargar.",
  "closingKicker": "¿Tienes otro enlace para guardar?",
  "closingTitle": "Tus vídeos, siempre a mano.",
  "closingDescription": "ClipDock se descarga gratis en iPhone y iPad e incluye compras dentro de la app.",
  "storeDownload": "Descargar en el App Store",
  "closingQr": "Escanea para descargar ClipDock"
};
