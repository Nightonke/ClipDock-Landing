import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "batch-download-bilibili-collection-iphone": {
    "title": "Descarga una colección de Bilibili",
    "description": "Copia el enlace de una colección de Bilibili, carga sus vídeos en ClipDock, elige la calidad y crea una descarga por lotes en iPhone o iPad. Incluye un ejemplo con b23.tv.",
    "intro": "Usa el enlace compartido de una colección de Bilibili para guardar tus propias series de vídeos o contenido autorizado sin copiar cada enlace por separado.",
    "tips": [
      {
        "title": "La cantidad extraída no coincide con los episodios de la colección",
        "text": "Comprueba que el enlace sea de la colección y revisa las páginas cargadas, los límites de tu cuenta y el acceso a los recursos. «Seleccionar cargados» solo selecciona los elementos ya cargados; la lista puede no incluir todos los episodios. Evita enviar toda la colección otra vez sin revisar el resultado."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencian los enlaces de una colección y de un perfil de Bilibili?",
        "answer": "Una colección reúne un grupo de vídeos; el perfil corresponde al creador. Copia el enlace desde el panel para compartir de la colección. Un enlace corto b23.tv no permite distinguir el tipo de origen por sí solo: revisa el nombre y la lista tras cargarlos."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace de la colección de Bilibili",
        "text": "Abre la colección en Bilibili, toca su botón para compartir y después «Copiar enlace». El ejemplo usa «米娜舞蹈-大摆锤», que muestra 62 episodios. Comprueba que compartes la colección y no solo el vídeo que se está reproduciendo."
      },
      {
        "title": "Pega el enlace de la colección",
        "text": "Abre «Extracción» (Extract) en ClipDock, entra en «Lote» (Batch) y toca «Pegar» (Paste). El ejemplo usa el enlace corto b23.tv de abajo; utiliza el enlace real copiado desde la colección que quieres guardar.",
        "exampleUrl": "https://b23.tv/drSfmMh"
      },
      {
        "title": "Carga los vídeos de la colección",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba que el nombre de origen coincida con la colección y selecciona los vídeos, o usa «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue). El ejemplo carga y selecciona 62 elementos y muestra «Añadir a la cola (62)»."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-tiktok-hashtag-iphone": {
    "title": "Descarga vídeos de un hashtag de TikTok",
    "description": "Carga un hashtag de TikTok en ClipDock, elige la calidad y crea descargas por lotes en iPhone o iPad. Incluye el formato del enlace del hashtag beauty.",
    "intro": "Usa el enlace de un hashtag para guardar vídeos propios o autorizados sobre un mismo tema. Este tutorial usa beauty como ejemplo para evitar copiar cada vídeo por separado.",
    "tips": [
      {
        "title": "Los resultados no coinciden con la página del hashtag",
        "text": "Comprueba que el enlace contenga /tag/ y revisa el nombre del hashtag, las páginas cargadas y los límites de tu cuenta. Los resultados pueden no incluir todos los vídeos. «Seleccionar cargados» solo selecciona recursos cargados; evita volver a enviar toda la lista sin revisarla."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencian los enlaces de hashtag y de perfil de TikTok?",
        "answer": "Un hashtag reúne vídeos de distintos creadores; un perfil corresponde a un creador. Para descargar un hashtag, usa una dirección completa como https://www.tiktok.com/tag/beauty, no solo #beauty."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace del hashtag de TikTok",
        "text": "El formato es https://www.tiktok.com/tag/nombre-del-hashtag; aquí usamos beauty. En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste) para introducir el enlace completo. El nombre del hashtag en la dirección no lleva #.",
        "exampleUrl": "https://www.tiktok.com/tag/beauty"
      },
      {
        "title": "Carga los vídeos del hashtag",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba que la fuente sea beauty, selecciona los vídeos o usa «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue). El ejemplo carga y selecciona 19 elementos y muestra «Añadir a la cola (19)»."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-instagram-hashtag-iphone": {
    "title": "Descarga imágenes de un hashtag de Instagram",
    "description": "Carga un hashtag de Instagram en ClipDock, filtra las imágenes y crea descargas por lotes en iPhone o iPad. Incluye el formato del enlace del hashtag model.",
    "intro": "Usa el enlace de un hashtag de Instagram para guardar imágenes propias o autorizadas sobre un mismo tema. Este tutorial usa model como ejemplo para evitar copiar cada publicación por separado.",
    "tips": [
      {
        "title": "Los resultados no coinciden con la página del hashtag",
        "text": "Comprueba que el enlace contenga /explore/tags/ y revisa el nombre del hashtag, las páginas cargadas y los límites de tu cuenta. Los resultados pueden no incluir todas las publicaciones. «Seleccionar cargados» solo selecciona recursos cargados; evita volver a enviar toda la lista sin revisarla."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencian los enlaces de hashtag y de perfil de Instagram?",
        "answer": "Un hashtag reúne publicaciones de distintos creadores; un perfil corresponde a un creador. Para descargar un hashtag, usa una dirección completa como https://www.instagram.com/explore/tags/model, no solo #model."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace del hashtag de Instagram",
        "text": "El formato es https://www.instagram.com/explore/tags/nombre-del-hashtag; aquí usamos model. En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste) para introducir el enlace completo. El nombre del hashtag en la dirección no lleva #.",
        "exampleUrl": "https://www.instagram.com/explore/tags/model"
      },
      {
        "title": "Carga los recursos del hashtag",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona imágenes y añádelas a la cola",
        "text": "Comprueba que la fuente sea model y selecciona las imágenes. Puedes filtrar por «Imagen» (Image) o usar «Seleccionar cargados» (Select loaded). Después de filtrar, revisa los elementos seleccionados y su cantidad y toca «Añadir a la cola de descargas» (Add to queue). El ejemplo carga y selecciona 21 elementos marcados como imágenes y muestra «Añadir a la cola (21)»."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la selección de imágenes y la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar este lote. Las cantidades y los límites son los del ejemplo."
  },
  "batch-download-youtube-shorts-iphone": {
    "title": "Descarga YouTube Shorts por lotes",
    "description": "Usa el enlace de Shorts de un canal para cargar sus vídeos, elegir la calidad y crear descargas por lotes en iPhone o iPad con ClipDock. Incluye el formato completo del enlace.",
    "intro": "Para descargar Shorts por lotes, usa la página de Shorts del canal. Así puedes guardar tus propios vídeos cortos o los de un creador que te haya dado permiso sin copiar cada enlace por separado.",
    "tips": [
      {
        "title": "Los resultados no coinciden con los Shorts del canal",
        "text": "Comprueba el identificador del canal y que la dirección termine en /shorts. Revisa las páginas cargadas y los límites de tu cuenta. Los resultados pueden no incluir todos los Shorts; «Seleccionar cargados» solo selecciona recursos cargados. Evita volver a enviar toda la lista sin revisarla."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia la lista de Shorts de un enlace a un solo Short?",
        "answer": "Una dirección como https://youtube.com/@dailymoodvideo/shorts corresponde a la lista del canal; /shorts/ID-del-vídeo corresponde a un vídeo individual. Para descargar por lotes, usa un enlace con el identificador del canal y terminado en /shorts."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace de la lista de Shorts",
        "text": "Usa la dirección completa de la página de Shorts del canal, con el formato https://youtube.com/@identificador/shorts. Aquí usamos @dailymoodvideo. En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste). Conserva /shorts al final.",
        "exampleUrl": "https://youtube.com/@dailymoodvideo/shorts"
      },
      {
        "title": "Carga la lista de Shorts",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba que la fuente sea @dailymoodvideo, selecciona los Shorts o usa «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue). El ejemplo carga y selecciona 48 elementos y muestra «Añadir a la cola (48)»."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-youtube-hashtag-iphone": {
    "title": "Descarga vídeos de un hashtag de YouTube",
    "description": "Carga un hashtag de YouTube en ClipDock, elige la calidad y crea descargas por lotes en iPhone o iPad. Incluye el formato del enlace de carmusic.",
    "intro": "Usa la página de un hashtag de YouTube para guardar vídeos propios o autorizados sobre un mismo tema sin copiar cada enlace por separado.",
    "tips": [
      {
        "title": "Los resultados no coinciden con la página del hashtag",
        "text": "Comprueba que el enlace contenga /hashtag/ y revisa el nombre del hashtag, las páginas cargadas y los límites de tu cuenta. Los resultados pueden no incluir todos los vídeos; «Seleccionar cargados» solo selecciona recursos cargados. Evita volver a enviar toda la lista sin revisarla."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia un hashtag de un canal o una lista de reproducción?",
        "answer": "Un hashtag reúne vídeos de distintos creadores, un canal corresponde al perfil del creador y una lista de reproducción es una colección concreta. Usa un enlace completo como https://youtube.com/hashtag/carmusic, no solo #carmusic."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace del hashtag",
        "text": "El formato es https://youtube.com/hashtag/nombre-del-hashtag; aquí usamos carmusic. En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste) para introducir el enlace completo. El nombre del hashtag en la dirección no lleva #.",
        "exampleUrl": "https://youtube.com/hashtag/carmusic"
      },
      {
        "title": "Carga los vídeos del hashtag",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba que la fuente sea carmusic, selecciona los vídeos o usa «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue). El ejemplo carga y selecciona 36 elementos y muestra «Añadir a la cola (36)»."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-youtube-channel-iphone": {
    "title": "Descarga vídeos de un canal de YouTube",
    "description": "Copia el enlace de un canal de YouTube, extrae sus vídeos en ClipDock y crea descargas por lotes en iPhone o iPad. Aprende a revisar resultados, elementos ausentes y errores.",
    "intro": "La descarga por lotes de un canal usa el perfil del creador, no un vídeo individual. Sirve para guardar tus propias publicaciones o vídeos autorizados sin copiar cada enlace por separado.",
    "tips": [
      {
        "title": "La cantidad extraída no coincide con la del canal",
        "text": "Revisa las páginas cargadas y los límites de tu cuenta y comprueba si hay publicaciones inaccesibles. La cantidad del canal puede diferir de los recursos descargables. «Seleccionar cargados» solo selecciona lo cargado; evita volver a enviar todo el canal sin revisarlo."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencian las descargas de canales y de listas de reproducción?",
        "answer": "Ambas son descargas por lotes, pero parten de páginas diferentes y abarcan publicaciones distintas. Un canal corresponde al perfil del creador; una lista, a una colección concreta. Revisa siempre los resultados de la extracción."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace del canal de YouTube",
        "text": "Abre el canal que quieras guardar y toca «Copiar enlace» (Copy link) en el panel para compartir. El ejemplo usa @fashion-house-mafia. Comprueba que el enlace sea del canal y no de un vídeo o una lista de reproducción."
      },
      {
        "title": "Pega el enlace del canal",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste). La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago, según lo indicado en la app."
      },
      {
        "title": "Carga los vídeos del canal",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba la fuente y selecciona los vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue)."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "download-youtube-playlist-iphone": {
    "title": "Descarga una lista de reproducción de YouTube",
    "description": "Copia el enlace de una lista de YouTube, extrae sus vídeos en ClipDock y crea descargas por lotes en iPhone o iPad. Aprende a revisar resultados, elementos ausentes y errores.",
    "intro": "La descarga por lotes usa el enlace de la lista, no el de un vídeo individual. Sirve para guardar tus propias series o fragmentos de cursos autorizados sin copiar cada vídeo por separado.",
    "tips": [
      {
        "title": "La cantidad extraída no coincide con la de la lista",
        "text": "Comprueba si hay publicaciones inaccesibles y si has copiado el enlace correcto de la lista. La cantidad visible puede diferir de los recursos descargables. Evita volver a enviar toda la lista sin revisar el resultado."
      }
    ],
    "faq": [
      {
        "question": "¿Sirve este tutorial también para descargar un canal?",
        "answer": "No es exactamente el mismo flujo. Ambos usan descargas por lotes, pero las páginas de origen y las publicaciones incluidas son diferentes. Revisa los resultados de cada extracción."
      },
      {
        "question": "¿Los archivos del lote se guardan automáticamente en Fotos?",
        "answer": "Puedes activar «Guardar automáticamente las descargas completadas en Fotos» en «Configuración de descarga» para guardar los archivos compatibles. Si no lo activas, usa «Guardar en Fotos» después de descargar. Se requiere permiso para Fotos y un formato compatible."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace de la lista de reproducción",
        "text": "Copia el enlace compartido de la lista de YouTube. En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch) y toca «Pegar» (Paste). Comprueba que el enlace sea de la lista y no de un solo vídeo."
      },
      {
        "title": "Carga la lista de reproducción",
        "text": "Toca «Cargar lista» (Load list) y espera a que desaparezca «Cargando lista» (Loading list). Esta acción solo obtiene publicaciones para seleccionar: todavía debes elegir elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y añádelos a la cola",
        "text": "Comprueba la fuente y selecciona los vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue)."
      },
      {
        "title": "Consulta la cola y el progreso",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado."
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-instagram-profile-iphone": {
    "title": "Descarga publicaciones de un perfil de Instagram",
    "description": "Guarda publicaciones de un mismo creador de Instagram en iPhone o iPad: copia el enlace del perfil, carga la lista en «Lote» y elige qué descargar.",
    "intro": "Guarda publicaciones de un mismo creador de Instagram: copia el enlace del perfil, carga la lista en «Lote» y elige qué descargar.",
    "tips": [
      {
        "title": "Revisa primero el alcance de la lista",
        "text": "La lista refleja los resultados devueltos. No garantiza incluir historias, contenido privado o eliminado ni todo el historial. Antes de añadir el lote, comprueba el creador, el tipo de recurso y la cantidad seleccionada."
      }
    ],
    "faq": [
      {
        "question": "¿Puedo descargar solo vídeos y excluir las imágenes?",
        "answer": "Aplica el filtro «Vídeo» y revisa los elementos seleccionados y la cantidad de «Añadir a la cola de descargas» antes de confirmar."
      },
      {
        "question": "¿Tocar «Cargar lista» inicia la descarga?",
        "answer": "No. Después de cargar, debes seleccionar elementos y tocar «Añadir a la cola de descargas»."
      },
      {
        "question": "¿Por qué aparecen 12 posts y 16 items?",
        "answer": "Las publicaciones y los recursos multimedia no son la misma unidad: una publicación puede contener varias imágenes. La cantidad que se descargará depende de los elementos seleccionados y del botón para añadirlos a la cola."
      },
      {
        "question": "¿La indicación «Sin límite» de la captura se aplica a todos?",
        "answer": "No. Consulta la cuota y los límites que muestra tu propia cuenta."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace del perfil de Instagram",
        "text": "Abre el perfil del creador en Instagram, toca los tres puntos de la esquina superior derecha y elige «Copiar URL del perfil» (Copy profile URL). Necesitas la dirección del perfil; para un solo reel, consulta el tutorial de descarga individual."
      },
      {
        "title": "Pega el enlace",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch), toca «Pegar» (Paste) y comprueba que el enlace sea del perfil de Instagram elegido."
      },
      {
        "title": "Carga las publicaciones del perfil",
        "text": "Toca «Cargar lista» (Load list) y espera a que termine «Cargando lista» (Loading list). Esto solo obtiene publicaciones para seleccionar; las descargas se crean después de confirmar los elementos y añadirlos a la cola. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Filtra los recursos y añádelos a la cola",
        "text": "Comprueba la fuente y selecciona los vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue).",
        "sections": [
          {
            "title": "Filtra por Todo, Vídeo o Imagen",
            "text": "«Todos» (All) muestra todos los tipos, «Vídeo» (Video) filtra los vídeos e «Imagen» (Image) filtra las imágenes. Si solo quieres vídeos, elige «Vídeo» y comprueba las marcas y el total seleccionado antes de enviar para no añadir imágenes que no necesitas."
          },
          {
            "title": "¿Por qué difieren las cantidades de publicaciones y recursos?",
            "text": "Una publicación puede contener varios archivos multimedia. Por ejemplo, una publicación con varias imágenes aumenta la cantidad de recursos respecto a la de publicaciones. Revisa el total seleccionado antes de descargar."
          },
          {
            "title": "Selecciona elementos o todos los cargados",
            "text": "La marca azul a la derecha indica que el elemento está seleccionado; puedes cambiarla. «Seleccionar cargados» selecciona los elementos ya cargados: comprueba el total de la pantalla. «Cambiar enlace» (Change link) permite usar otro perfil."
          },
          {
            "title": "Ajusta la calidad del lote",
            "text": "«Usar ajustes de descarga» (Follow download settings) aplica la calidad elegida en la configuración de descarga. Toca «Calidad del lote» para ver las opciones y confirma la selección antes de añadirla a la cola."
          }
        ]
      },
      {
        "title": "Revisa las tareas en «Gestión»",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado.",
        "sections": [
          {
            "title": "Estar en cola no significa haber terminado",
            "text": "«En espera» (Queued) indica que la tarea está en cola. Previsualiza los archivos en «Completadas» y consulta los errores en «Error». Si el archivo no se guardó automáticamente, usa «Guardar en Fotos» (Save to Photos) para crear una copia en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-tiktok-profile-iphone": {
    "title": "Descarga vídeos de un perfil de TikTok",
    "description": "Guarda publicaciones de un mismo creador de TikTok en iPhone o iPad: copia el enlace del perfil, carga la lista en «Lote» y elige qué descargar.",
    "intro": "Guarda publicaciones de un mismo creador de TikTok: copia el enlace del perfil, carga la lista en «Lote» y elige qué descargar.",
    "tips": [
      {
        "title": "Elige primero las publicaciones que necesitas",
        "text": "La descarga del perfil resulta útil para varios vídeos de un creador. Si solo quieres uno, su enlace individual facilita identificarlo. Antes de enviar el perfil de nuevo, revisa lo ya descargado para evitar duplicados."
      }
    ],
    "faq": [
      {
        "question": "¿Cargar la lista del perfil inicia las descargas?",
        "answer": "No. Debes seleccionar recursos, revisar la calidad y la cantidad y tocar «Añadir a la cola de descargas»."
      },
      {
        "question": "¿Aparecen todas las publicaciones del perfil?",
        "answer": "No se garantiza. La lista refleja los recursos que se han podido cargar y no es una copia completa de todo el historial ni del contenido restringido."
      },
      {
        "question": "¿Por qué algunos elementos solo se llaman «Recurso»?",
        "answer": "Algunos elementos tienen un título genérico. Identifícalos por la miniatura, el tipo y la fecha y previsualiza el archivo después de descargarlo."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace del perfil del creador",
        "text": "Abre el perfil en TikTok, toca la flecha para compartir de la esquina superior derecha y elige «Copiar enlace» (Copy link) en «Enviar a» (Send to). Copia el perfil, no un vídeo individual."
      },
      {
        "title": "Pega la dirección del perfil",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch), toca «Pegar» (Paste) y comprueba que el enlace sea del perfil de TikTok elegido."
      },
      {
        "title": "Carga la lista y espera los resultados",
        "text": "Toca «Cargar lista» (Load list) y espera a que termine «Cargando lista» (Loading list). Todavía no se está descargando: en el siguiente paso tendrás que confirmar los elementos y tocar «Añadir a la cola de descargas» (Add to queue). La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Elige recursos y calidad y añádelos a la cola",
        "text": "Revisa la fuente y selecciona vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa el total y toca «Añadir a la cola de descargas».",
        "sections": [
          {
            "title": "Filtra el tipo de recurso",
            "text": "«Todos» (All) muestra todos los recursos, «Vídeo» (Video) muestra vídeos e «Imagen» (Image) muestra imágenes. Para descargar solo vídeos, cambia a «Vídeo» y revisa la selección y el total. La marca azul a la derecha indica que el elemento está seleccionado y se puede cambiar."
          },
          {
            "title": "Qué abarca «Seleccionar cargados»",
            "text": "«Seleccionar cargados» selecciona los elementos ya cargados. posts cuenta publicaciones e items cuenta recursos; una publicación puede tener varios archivos. La lista no equivale a todo el historial del creador. Usa «Cambiar enlace» (Change link) para elegir otro perfil."
          },
          {
            "title": "Ajusta la calidad del lote",
            "text": "«Usar ajustes de descarga» (Follow download settings) aplica la calidad elegida en la configuración de descarga. Toca «Calidad del lote» para ver las opciones y confirma la selección antes de añadirla a la cola."
          },
          {
            "title": "Comprueba las cantidades y los límites de tu cuenta",
            "text": "Antes de enviar, revisa el total seleccionado y la cuota disponible. posts cuenta publicaciones e items cuenta archivos multimedia, por lo que pueden diferir. Para cambiar de fuente, toca «Cambiar enlace»."
          }
        ]
      },
      {
        "title": "Consulta el progreso y las tareas fallidas",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado.",
        "sections": [
          {
            "title": "En espera, descargando y completadas",
            "text": "«En espera» (Queued) indica que la tarea está en cola. Previsualiza los archivos en «Completadas» y consulta los errores en «Error». Si el archivo no se guardó automáticamente, usa «Guardar en Fotos» (Save to Photos) para crear una copia en Fotos."
          },
          {
            "title": "Revisa los elementos fallidos",
            "text": "Abre la tarea fallida y consulta su error. Comprueba el enlace de origen y la conexión antes de reintentar según corresponda. El número total de errores no explica su causa."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-douyin-profile-iphone": {
    "title": "Descarga vídeos de un perfil de Douyin",
    "description": "Guarda publicaciones de un mismo creador de Douyin en iPhone o iPad: copia el perfil, carga la lista en «Lote» y elige qué descargar.",
    "intro": "Guarda publicaciones de un mismo creador de Douyin: copia el perfil, carga la lista en «Lote» y elige qué descargar. Este tutorial reutiliza capturas de TikTok para ilustrar los pasos; no documenta una prueba de Douyin. Usa tu propio enlace de perfil de Douyin.",
    "tips": [
      {
        "title": "Elige primero las publicaciones que necesitas",
        "text": "La descarga del perfil resulta útil para varios vídeos de un creador. Si solo quieres uno, su enlace individual facilita identificarlo. Antes de enviar el perfil de nuevo, revisa lo ya descargado para evitar duplicados."
      }
    ],
    "faq": [
      {
        "question": "¿Cargar la lista del perfil inicia las descargas?",
        "answer": "No. Debes seleccionar recursos, revisar la calidad y la cantidad y tocar «Añadir a la cola de descargas»."
      },
      {
        "question": "¿Aparecen todas las publicaciones del perfil?",
        "answer": "No se garantiza. La lista refleja los recursos que se han podido cargar y no es una copia completa de todo el historial ni del contenido restringido."
      },
      {
        "question": "¿Por qué algunos elementos solo se llaman «Recurso»?",
        "answer": "Algunos elementos tienen un título genérico. Identifícalos por la miniatura, el tipo y la fecha y previsualiza el archivo después de descargarlo."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace del perfil del creador",
        "text": "Abre el perfil del creador en Douyin y copia el enlace desde el menú para compartir del perfil."
      },
      {
        "title": "Pega la dirección del perfil",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch), toca «Pegar» (Paste) y comprueba que el enlace sea del perfil de Douyin elegido."
      },
      {
        "title": "Carga la lista y espera los resultados",
        "text": "Toca «Cargar lista» (Load list) y espera a que termine «Cargando lista» (Loading list). Todavía no se está descargando: en el siguiente paso tendrás que confirmar los elementos y tocar «Añadir a la cola de descargas» (Add to queue). La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Elige recursos y calidad y añádelos a la cola",
        "text": "Revisa la fuente y selecciona vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa el total y toca «Añadir a la cola de descargas».",
        "sections": [
          {
            "title": "Filtra el tipo de recurso",
            "text": "«Todos» (All) muestra todos los recursos, «Vídeo» (Video) muestra vídeos e «Imagen» (Image) muestra imágenes. Para descargar solo vídeos, cambia a «Vídeo» y revisa la selección y el total. La marca azul a la derecha indica que el elemento está seleccionado y se puede cambiar."
          },
          {
            "title": "Qué abarca «Seleccionar cargados»",
            "text": "«Seleccionar cargados» selecciona los elementos ya cargados. posts cuenta publicaciones e items cuenta recursos; una publicación puede tener varios archivos. La lista no equivale a todo el historial del creador. Usa «Cambiar enlace» (Change link) para elegir otro perfil."
          },
          {
            "title": "Ajusta la calidad del lote",
            "text": "«Usar ajustes de descarga» (Follow download settings) aplica la calidad elegida en la configuración de descarga. Toca «Calidad del lote» para ver las opciones y confirma la selección antes de añadirla a la cola."
          },
          {
            "title": "Comprueba las cantidades y los límites de tu cuenta",
            "text": "Antes de enviar, revisa el total seleccionado y la cuota disponible. posts cuenta publicaciones e items cuenta archivos multimedia, por lo que pueden diferir. Para cambiar de fuente, toca «Cambiar enlace»."
          }
        ]
      },
      {
        "title": "Consulta el progreso y las tareas fallidas",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado.",
        "sections": [
          {
            "title": "En espera, descargando y completadas",
            "text": "«En espera» (Queued) indica que la tarea está en cola. Previsualiza los archivos en «Completadas» y consulta los errores en «Error». Si el archivo no se guardó automáticamente, usa «Guardar en Fotos» (Save to Photos) para crear una copia en Fotos."
          },
          {
            "title": "Revisa los elementos fallidos",
            "text": "Abre la tarea fallida y consulta su error. Comprueba el enlace de origen y la conexión antes de reintentar según corresponda. El número total de errores no explica su causa."
          }
        ]
      }
    ],
    "exampleNote": "Se reutilizan capturas de TikTok: la cuenta, el enlace y las cantidades no proceden de una prueba de Douyin. Muestran la cola en ejecución, pero no todas las descargas terminadas ni el guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no representan los resultados de este lote. Los límites y las cantidades son los del ejemplo."
  },
  "batch-download-weibo-profile-iphone": {
    "title": "Descarga vídeos de un perfil de Weibo",
    "description": "Guarda publicaciones de un mismo creador de Weibo en iPhone o iPad: copia el perfil, carga la lista en «Lote» y elige qué descargar.",
    "intro": "Guarda publicaciones de un mismo creador de Weibo: copia el perfil, carga la lista en «Lote» y elige qué descargar.",
    "tips": [
      {
        "title": "Revisa el alcance por partes",
        "text": "Elige las publicaciones que necesitas y carga más páginas cuando haga falta. Antes de enviar el perfil de nuevo, revisa lo ya descargado para evitar duplicados. La lista depende de los resultados devueltos y no es una copia completa del historial."
      }
    ],
    "faq": [
      {
        "question": "¿Por qué solo aparecen 16 elementos?",
        "answer": "Al principio solo se muestra el contenido de las páginas cargadas. Si hay más publicaciones, toca «Cargar siguiente página» para obtenerlas."
      },
      {
        "question": "¿«Cargar siguiente página» inicia descargas?",
        "answer": "Cargar la lista y descargar son dos fases diferentes. Tras revisar los elementos seleccionados, debes tocar «Añadir a la cola de descargas»."
      },
      {
        "question": "¿Puedo descargar solo algunos vídeos?",
        "answer": "Sí, cambia las marcas de selección según necesites. Después de filtrar por «Vídeo», revisa también el total seleccionado y la cantidad del botón para añadir a la cola."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace del perfil de Weibo",
        "text": "Abre el perfil del creador en Weibo, despliega el menú para compartir y copia el enlace. Usa la dirección del perfil, no la de una publicación individual."
      },
      {
        "title": "Pega la dirección del perfil",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch), toca «Pegar» (Paste) y comprueba que el enlace sea del perfil de Weibo elegido."
      },
      {
        "title": "Carga la lista y espera la respuesta",
        "text": "Toca «Cargar lista» (Load list) y espera mientras aparezca «Cargando lista» (Loading list). Esto no inicia descargas: después debes seleccionar recursos y tocar «Añadir a la cola de descargas» (Add to queue). La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Selecciona vídeos y carga más páginas si hace falta",
        "text": "Revisa la fuente y selecciona vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa el total y toca «Añadir a la cola de descargas».",
        "sections": [
          {
            "title": "Carga la siguiente página para ver más publicaciones",
            "text": "Toca «Cargar siguiente página» (Load next page) y revisa los nuevos elementos y el total seleccionado. La lista puede no incluir todo el historial ni las publicaciones restringidas."
          },
          {
            "title": "Filtra y selecciona los recursos",
            "text": "«Todos» (All) muestra todos los tipos, «Vídeo» (Video) filtra vídeos e «Imagen» (Image) filtra imágenes. La marca azul indica selección y «Seleccionar cargados» selecciona los elementos cargados. Si solo necesitas algunos vídeos, ajusta las marcas y revisa la cantidad del botón inferior."
          },
          {
            "title": "Calidad del lote y cola de descargas",
            "text": "«Usar ajustes de descarga» (Follow download settings) aplica la calidad elegida en la configuración de descarga. Toca «Calidad del lote» para ver las opciones y confirma la selección antes de añadirla a la cola."
          },
          {
            "title": "Publicaciones, recursos y límites",
            "text": "Revisa el total seleccionado y la cuota disponible antes de enviar. posts cuenta publicaciones e items cuenta archivos multimedia; pueden diferir. Para cambiar de fuente, toca «Cambiar enlace» (Change link)."
          }
        ]
      },
      {
        "title": "Consulta la cola en «Gestión»",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado.",
        "sections": [
          {
            "title": "Previsualiza y guarda los archivos completados",
            "text": "«En espera» (Queued) indica que la tarea está en cola. Previsualiza los archivos en «Completadas» y consulta los errores en «Error». Si el archivo no se guardó automáticamente, usa «Guardar en Fotos» (Save to Photos) para crear una copia en Fotos."
          },
          {
            "title": "Comprueba los elementos fallidos",
            "text": "Abre la tarea fallida y consulta su error. Comprueba el enlace de origen y la conexión antes de reintentar según corresponda. El número total de errores no explica su causa."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  },
  "batch-download-bilibili-profile-iphone": {
    "title": "Descarga vídeos de un creador de Bilibili",
    "description": "Guarda publicaciones de un mismo creador de Bilibili en iPhone o iPad: copia el perfil, carga la lista en «Lote» y elige qué descargar.",
    "intro": "Guarda publicaciones de un mismo creador de Bilibili: copia el perfil, carga la lista en «Lote» y elige qué descargar.",
    "tips": [
      {
        "title": "Selecciona según la lista disponible",
        "text": "El alcance del perfil depende de los resultados devueltos. No es una copia completa de todo el historial ni del contenido restringido. Revisa los archivos descargados antes de volver a enviar el perfil."
      }
    ],
    "faq": [
      {
        "question": "¿Puedo pegar directamente un enlace corto b23.tv?",
        "answer": "Este ejemplo carga publicaciones desde un enlace corto b23.tv copiado del perfil del creador. Comprueba que el enlace proceda del perfil y que el creador devuelto sea el correcto."
      },
      {
        "question": "¿Por qué solo hay 20 recursos?",
        "answer": "En el ejemplo solo se ha cargado una página. Usa «Cargar siguiente página» al final de la lista para ver los siguientes recursos devueltos."
      },
      {
        "question": "¿También se muestran colecciones, favoritos o vídeos de varias partes?",
        "answer": "Este tutorial cubre las publicaciones del perfil. Las colecciones, los favoritos y los vídeos de varias partes usan enlaces diferentes y no se muestran aquí."
      },
      {
        "question": "¿Siempre se puede descargar la máxima calidad?",
        "answer": "No se garantiza. Las calidades disponibles dependen de los recursos devueltos por el enlace. Revisa «Calidad del lote» antes de añadirlos a la cola."
      }
    ],
    "steps": [
      {
        "title": "Copia el enlace compartido del perfil de Bilibili",
        "text": "Abre el perfil del creador en Bilibili y copia el enlace desde su menú para compartir. Comprueba que compartes el perfil y no un vídeo individual."
      },
      {
        "title": "Pega el enlace corto del perfil",
        "text": "En ClipDock, abre «Extracción» (Extract) → «Lote» (Batch), toca «Pegar» (Paste) y comprueba que el enlace sea del perfil de Bilibili elegido.",
        "sections": [
          {
            "title": "Comprueba también la fuente de los enlaces cortos",
            "text": "El ejemplo usa directamente el enlace corto copiado; no es necesario modificarlo. El dominio b23.tv por sí solo no distingue perfiles de vídeos individuales. Copia desde el perfil y confirma el nombre del creador después de cargar."
          }
        ]
      },
      {
        "title": "Carga las publicaciones",
        "text": "Toca «Cargar lista» (Load list) y espera a que termine «Cargando lista» (Loading list). La carga solo obtiene recursos para seleccionar; todavía debes confirmar los elementos y añadirlos a la cola para descargarlos. La versión gratuita permite cargar las primeras 2 páginas; para cargar más se requiere VIP de pago."
      },
      {
        "title": "Elige vídeos y carga más páginas si hace falta",
        "text": "Comprueba la fuente y selecciona los vídeos o imágenes. Puedes filtrar por tipo o usar «Seleccionar cargados» (Select loaded). Ajusta «Calidad del lote» (Batch quality), revisa la cantidad y toca «Añadir a la cola de descargas» (Add to queue).",
        "sections": [
          {
            "title": "Carga la siguiente página para ver más vídeos",
            "text": "Toca «Cargar siguiente página» (Load next page) y revisa los nuevos elementos y el total seleccionado. La lista puede no incluir todo el historial ni las publicaciones restringidas."
          },
          {
            "title": "Filtra y selecciona qué descargar",
            "text": "«Todos» (All) muestra todos los tipos, «Vídeo» (Video) filtra vídeos e «Imagen» (Image) filtra imágenes. La marca azul indica selección y se puede cambiar. «Seleccionar cargados» selecciona lo cargado. Revisa el total para evitar descargar recursos que no necesitas."
          },
          {
            "title": "Ajusta la calidad del lote",
            "text": "«Usar ajustes de descarga» (Follow download settings) aplica la calidad elegida en la configuración de descarga. Toca «Calidad del lote» para ver las opciones y confirma la selección antes de añadirla a la cola."
          },
          {
            "title": "Revisa tu cuenta y las cantidades",
            "text": "Revisa el total seleccionado y la cuota disponible antes de enviar. posts cuenta publicaciones e items cuenta archivos multimedia; pueden diferir. Para cambiar de fuente, toca «Cambiar enlace» (Change link)."
          }
        ]
      },
      {
        "title": "Consulta la cola y los resultados",
        "text": "Abre «Gestión» (Manager). «Descargando» (Active) incluye tareas en espera y en proceso, «Completadas» (Done) contiene los archivos descargados y «Error» (Failed) reúne las tareas fallidas. Abre cada elemento para revisar su estado.",
        "sections": [
          {
            "title": "Revisa el alcance antes de descargar vídeos largos",
            "text": "Comprueba la duración y el tamaño estimado de los vídeos largos. Descarga primero los que necesitas y añade otros después si hace falta."
          },
          {
            "title": "Previsualiza y guarda al terminar",
            "text": "«En espera» (Queued) indica que la tarea está en cola. Previsualiza los archivos en «Completadas» y consulta los errores en «Error». Si el archivo no se guardó automáticamente, usa «Guardar en Fotos» (Save to Photos) para crear una copia en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas muestran la cola en ejecución, pero no que todas las descargas hayan terminado ni que se hayan guardado en Fotos. Los totales de «Gestión» incluyen otras tareas y no sirven para contar los resultados de este lote. Las cantidades y los límites de la cuenta son los del ejemplo."
  }
};
