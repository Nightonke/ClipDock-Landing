import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "Convierte un vídeo en GIF",
    "description": "Crea un GIF con un fragmento de vídeo en iPhone o iPad. Elige el intervalo y ajusta los fotogramas por segundo y el ancho para equilibrar fluidez, detalle y tamaño.",
    "intro": "Crea un GIF con un fragmento de vídeo. Elige el intervalo y ajusta los fotogramas por segundo y el ancho para equilibrar fluidez, detalle y tamaño.",
    "tips": [
      {
        "title": "El GIF ocupa demasiado espacio",
        "text": "Acorta primero el fragmento y después reduce el ancho o los fotogramas por segundo. Cambia una sola opción cada vez para comparar calidad y tamaño."
      }
    ],
    "faq": [
      {
        "question": "¿Por qué el GIF no tiene sonido?",
        "answer": "GIF no admite audio. Si necesitas conservar el sonido, exporta un vídeo."
      },
      {
        "question": "¿Por qué algunas opciones tienen asterisco?",
        "answer": "La pantalla indica que los fragmentos de más de 10 segundos, las frecuencias altas, el ancho de 720 píxeles y los preajustes requieren VIP. Este ejemplo usa parámetros gratuitos."
      }
    ],
    "steps": [
      {
        "title": "Abre «Vídeo a GIF»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Vídeo a GIF» (Video to GIF)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige el fragmento y un preajuste",
        "text": "Importa el vídeo, previsualízalo y revisa «Preajustes» (Presets) y «Rango de clip» (Clip Range). El ejemplo usa «Personalizado» (Custom) y conserva unos 6 segundos.",
        "sections": [
          {
            "title": "Personalizado y preajustes con asterisco",
            "text": "«Personalizado» permite elegir los parámetros. «Claro*» (Clear*), «Suave*» (Smooth*) y «Largo*» (Long*) priorizan detalle, fluidez y duración, respectivamente. El asterisco indica que requieren VIP."
          },
          {
            "title": "Conserva solo el movimiento que necesitas",
            "text": "Arrastra los controles redondos de los extremos para ajustar el inicio y el final. Arriba se muestran los tiempos y los segundos seleccionados. Un intervalo más largo suele necesitar más fotogramas y espacio. Más de 10 segundos requiere VIP."
          }
        ]
      },
      {
        "title": "Ajusta los fotogramas por segundo y el ancho",
        "text": "Revisa «Velocidad de fotogramas» (Frame Rate), «Ancho» (Width) y el tamaño estimado y toca «Iniciar procesamiento» (Start Processing). El ejemplo usa 8 fps y 360 píxeles de ancho; estima unos 1,2 MB y 48 fotogramas.",
        "sections": [
          {
            "title": "Fotogramas por segundo",
            "text": "Hay opciones de 6, 8, 12, 15* y 24* fps. Una frecuencia mayor suele dar más continuidad al movimiento, pero aumenta los fotogramas y el tamaño. Prueba 8 fps para movimientos sencillos y compara valores superiores para acciones rápidas. 15 y 24 fps requieren VIP."
          },
          {
            "title": "Ancho del GIF en píxeles",
            "text": "Se ofrecen 240, 360, 540 y 720*. Un ancho mayor suele conservar más detalle y puede generar archivos mayores. 720 requiere VIP. Ampliar la salida no recupera detalles ausentes del vídeo original."
          },
          {
            "title": "El tamaño es una estimación",
            "text": "6 segundos × 8 fps son unos 48 fotogramas. El tamaño comprimido también depende de la complejidad de la imagen; comprueba el archivo exportado. GIF no contiene sonido: si lo necesitas, guarda como vídeo."
          }
        ]
      },
      {
        "title": "Guarda el GIF generado",
        "text": "Cuando aparezca «Procesamiento completo» (Processing Complete), toca «Guardar en Fotos» (Save to Photos) o «Compartir archivo» (Share File). «Listo» (Done) cierra el aviso. Comprueba la animación en una app compatible con GIF.",
        "sections": []
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se exportó un GIF de unos 6 segundos con «Personalizado», 8 fps y 360 píxeles de ancho. No se verificaron las combinaciones concretas de los preajustes de pago."
  },
  "video-to-live-photo-iphone": {
    "title": "Convierte un vídeo en Live Photo",
    "description": "Convierte un vídeo en Live Photo en iPhone o iPad. Elige el intervalo, la portada y el sonido y guárdala en Fotos.",
    "intro": "Convierte un fragmento de vídeo en Live Photo, con una imagen de portada y la opción de conservar el sonido. Selecciona el intervalo y el fotograma de portada y guarda en Fotos.",
    "tips": [
      {
        "title": "Revisa la portada y el movimiento por separado",
        "text": "Una buena portada no garantiza que todo el movimiento sea adecuado. Después de guardar, revisa el inicio, el final, el sonido y la portada. Comparte con un método que conserve la Live Photo."
      }
    ],
    "faq": [
      {
        "question": "¿Puedo usarla como fondo animado?",
        "answer": "Convertir y guardar una Live Photo no garantiza su compatibilidad como fondo de la pantalla de bloqueo. Depende del dispositivo y del sistema. Este tutorial no equipara una conversión correcta con un fondo compatible."
      },
      {
        "question": "¿En qué se diferencia de un GIF?",
        "answer": "Son formatos y métodos de compartir distintos. Live Photo puede conservar sonido; GIF sirve para animaciones sin audio."
      }
    ],
    "steps": [
      {
        "title": "Abre «Vídeo a Live Photo»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Vídeo a Live Photo» (Video to Live Photo)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Define el intervalo y la imagen de portada",
        "text": "Importa el vídeo y elige el movimiento en «Rango de clip» (Clip Range). Después ajusta «Marco de portada» (Cover Frame), el fotograma que se mostrará en reposo. El ejemplo usa 00:00–00:03.",
        "sections": [
          {
            "title": "Elige el intervalo de movimiento",
            "text": "Los controles redondos de los extremos ajustan el inicio y el final, y arriba aparece la duración. Selecciona un fragmento corto alrededor de la acción principal. La pantalla indica que más de 3 segundos requiere VIP."
          },
          {
            "title": "Elige el fotograma de portada",
            "text": "Arrastra el control de portada y compara la miniatura y el tiempo. Busca un fotograma con el sujeto definido y una expresión natural, sin ojos cerrados ni desenfoque de movimiento marcado. La portada y el intervalo de movimiento se ajustan por separado."
          }
        ]
      },
      {
        "title": "Elige el sonido y la calidad",
        "text": "Revisa «Sonido» (Sound) y «Calidad de la Live Photo» (Live Photo Quality) y toca «Iniciar procesamiento» (Start Processing). El ejemplo mantiene el sonido y usa «Equilibrado» (Balanced).",
        "sections": [
          {
            "title": "Eliminar o mantener el sonido",
            "text": "«Eliminar sonido» (Remove Sound) quita el audio; «Mantener sonido» (Keep Sound) conserva el del fragmento. Elige silencio si solo necesitas el movimiento o conserva el sonido para mantener el ambiente."
          },
          {
            "title": "Equilibrado, HD* y Original*",
            "text": "Puedes empezar con «Equilibrado». «HD» y «Original» requieren VIP. Aumentar la calidad de salida no recupera detalles ausentes del vídeo original."
          }
        ]
      },
      {
        "title": "Comprueba la Live Photo en Fotos",
        "text": "Espera a ver «Live Photo guardada en Fotos» (Live Photo saved to Photos) y toca «OK». En Fotos, mantén pulsada la Live Photo para revisar el movimiento, la portada y el sonido.",
        "sections": []
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. El ejemplo usa 3 segundos y calidad «Equilibrado». Se recibió la confirmación de guardado de la app; no se verificó la reproducción manteniendo pulsado en Fotos."
  },
  "transcode-video-iphone": {
    "title": "Convierte el formato o comprime un vídeo",
    "description": "Usa «Transcodificar vídeo» en iPhone o iPad para cambiar el formato o reducir el tamaño. Elige formato, resolución y calidad y previsualiza la exportación.",
    "intro": "Usa «Transcodificar vídeo» para cambiar el formato o reducir el tamaño. Elige formato, resolución y calidad y previsualiza la exportación.",
    "tips": [
      {
        "title": "La compresión no da el resultado esperado",
        "text": "Conserva el original y compara distintas calidades o resoluciones con un fragmento corto. Evita comprimir repetidamente un resultado ya comprimido."
      }
    ],
    "faq": [
      {
        "question": "¿Por qué el tamaño apenas disminuye?",
        "answer": "El original puede ser ya pequeño o los parámetros pueden conservar mucha calidad. El tamaño final depende de la duración, dimensiones, códec y tasa de bits, entre otros factores."
      },
      {
        "question": "¿Convertir a 1080p mejora el detalle?",
        "answer": "Ampliar un vídeo de baja resolución no genera detalles que no existían. Evalúa el resultado al reproducirlo."
      }
    ],
    "steps": [
      {
        "title": "Abre «Transcodificar vídeo»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Transcodificar vídeo» (Transcode Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige primero el formato, la calidad y la resolución",
        "text": "Importa el vídeo y revisa «Formato de salida» (Output Format), «Calidad de salida» (Output Quality) y «Resolución» (Resolution). Después decide si conservar el sonido.",
        "sections": [
          {
            "title": "Formato de salida: MP4, MOV o M4V",
            "text": "Son formatos contenedores del archivo. Puedes empezar con MP4 para compartir; elige MOV o M4V si la app de destino lo requiere. La extensión y el códec interno son conceptos diferentes."
          },
          {
            "title": "Calidad de salida y tamaño",
            "text": "«Alta calidad» (High Quality) prioriza el detalle, «Estándar» (Standard) busca un equilibrio y «Tamaño más pequeño» (Smaller Size) prioriza el tamaño. La imagen y otros parámetros también influyen: el nombre del preajuste no determina por sí solo el tamaño final."
          },
          {
            "title": "Resolución y sonido",
            "text": "Las opciones son «Original», 720p, 480p y 1080p*. «Original» conserva las dimensiones; el vídeo del ejemplo mide 640×338. En «Sonido» (Sound), elige «Mantener sonido» (Keep Sound) o «Silencio» (Mute). Reducir la resolución puede reducir el tamaño; aumentarla no recupera detalle perdido."
          }
        ]
      },
      {
        "title": "Comprende el codificador y la tasa de bits",
        "text": "Revisa «Códec» (Codec), «Bitrate» y el resumen de salida al final de la pantalla. Confirma que refleje tus opciones y toca «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Códec: H.264 o HEVC*",
            "text": "Puedes empezar con H.264. HEVC requiere VIP y puede mejorar la eficiencia de compresión, pero comprueba la compatibilidad del dispositivo o app de reproducción. Un contenedor MP4 puede usar códecs distintos."
          },
          {
            "title": "Tasa de bits automática, por tamaño o personalizada",
            "text": "«Automático» (Auto) deja que la herramienta elija la tasa. «Tamaño objetivo» (Target Size) permite ajustarla a un tamaño y «Velocidad de bits personalizada» (Custom Bitrate) permite definirla; estas dos opciones requieren VIP. A igualdad de condiciones, una tasa menor suele producir archivos menores, pero puede aumentar los defectos de compresión."
          },
          {
            "title": "Opciones VIP de esta versión",
            "text": "La pantalla indica que HEVC, 1080p, HD original, tamaño objetivo y tasa personalizada requieren VIP. El ejemplo exporta un vídeo de baja resolución con «Original», «Estándar», «Mantener sonido» y «Automático»."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Previsualiza el resultado y compara tamaño y calidad con el original. Revisa especialmente los bordes del texto, las zonas oscuras y los movimientos rápidos antes de guardar.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. El ejemplo usa resolución «Original», calidad «Estándar», «Mantener sonido» y tasa «Automático», y exporta unos 6 segundos en MP4/H.264."
  },
  "trim-video-iphone": {
    "title": "Recorta la duración de un vídeo",
    "description": "Conserva solo el fragmento que necesitas en iPhone o iPad. Ajusta el inicio y el final en «Recortar video» y guarda el clip o procésalo con otra herramienta.",
    "intro": "Conserva solo el fragmento que necesitas. Ajusta el inicio y el final en «Recortar video» y guarda el clip o procésalo con otra herramienta.",
    "tips": [
      {
        "title": "Aquí se recorta el tiempo",
        "text": "«Recortar video» elige qué intervalo conservar. Para cambiar la proporción de la imagen o el lienzo, usa «Cambiar el tamaño/lienzo»."
      }
    ],
    "faq": [
      {
        "question": "¿Cómo conservo solo un fragmento central?",
        "answer": "Mueve tanto el inicio como el final, comprueba los tiempos del intervalo y previsualiza antes de exportar."
      },
      {
        "question": "¿Por qué la división uniforme abre la pantalla VIP?",
        "answer": "«División uniforme» requiere VIP. Para recortar un solo intervalo, usa «Selecciona Segmento»."
      }
    ],
    "steps": [
      {
        "title": "Abre «Recortar video»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Recortar video» (Trim Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Ajusta el modo de recorte y el intervalo",
        "text": "Elige un vídeo, selecciona «Selecciona Segmento» (Select Segment) en «Modo de recorte» (Trim Mode) y ajusta los dos controles de «Rango de recorte» (Trim Range).",
        "sections": [
          {
            "title": "Exporta el segmento seleccionado",
            "text": "El extremo izquierdo controla el inicio y el derecho el final. Arriba aparecen ambos tiempos y la duración seleccionada; abajo se confirma el intervalo que se exportará. El ejemplo usa 00:00–00:06."
          },
          {
            "title": "Distingue la vista previa del intervalo",
            "text": "La duración bajo la tarjeta de vista previa pertenece al vídeo original; «Rango de recorte» indica lo que conservarás. Después de ajustar, comprueba que no cortes el inicio de una acción ni la última frase."
          },
          {
            "title": "División uniforme*: varios segmentos",
            "text": "«División uniforme» (Even Split) divide el vídeo completo en partes iguales y las exporta juntas; requiere VIP. Para conservar un único fragmento, usa «Selecciona Segmento»."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Toca «Iniciar procesamiento» (Start Processing), reproduce el clip exportado y revisa su inicio y final. Guárdalo o usa «Seguir procesando» (Keep Processing) para abrir otra herramienta.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» abre el selector de herramientas con el resultado; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se recortaron los primeros 6 segundos de un vídeo de unos 2 minutos y 26 segundos con «Selecciona Segmento». «División uniforme» abrió la pantalla VIP; no se exportaron divisiones uniformes."
  },
  "join-videos-iphone": {
    "title": "Une varios vídeos en orden",
    "description": "Usa «Unir videos» en iPhone o iPad para combinar viajes, eventos o explicaciones por partes. Elige el vídeo principal para el comienzo, añade los otros clips y ordénalos.",
    "intro": "Usa «Unir videos» para combinar viajes, eventos o explicaciones por partes. Elige el vídeo principal para el comienzo, añade los otros clips y ordénalos.",
    "tips": [
      {
        "title": "¿Qué hago si tienen orientaciones o dimensiones distintas?",
        "text": "La pantalla de unión no tiene ajustes independientes de lienzo, recorte o bordes. Si necesitas una proporción concreta, prepara los clips con «Cambiar el tamaño/lienzo» u otra herramienta y revisa el resultado después de unirlos."
      },
      {
        "title": "Conserva la configuración antes de cambiar de herramienta",
        "text": "La varita de la esquina superior derecha abre «Edición rápida» con el vídeo principal. Volver desde allí a «Unir videos» puede reiniciar la lista añadida. Si ya ordenaste los clips, inicia el procesamiento directamente; si cambias de herramienta, revisa de nuevo la lista."
      }
    ],
    "faq": [
      {
        "question": "¿Por qué dice «2 clips añadidos» y el resultado tiene tres?",
        "answer": "El contador solo incluye los vídeos añadidos, no el principal. Un vídeo principal y dos añadidos forman tres clips."
      },
      {
        "question": "¿Puedo mover un clip añadido delante del principal?",
        "answer": "Las flechas solo cambian el orden dentro de la lista añadida. La flecha hacia arriba del primer clip está desactivada. Para cambiar el comienzo, selecciona otro vídeo principal."
      },
      {
        "question": "¿Puedo ajustar transiciones, música de fondo o calidad?",
        "answer": "La pantalla de unión no ofrece esas opciones. Permite previsualizar el vídeo principal, añadir clips y ordenarlos. Usa las herramientas correspondientes para otros efectos."
      },
      {
        "question": "¿Por qué «Listo» no guarda el resultado en Fotos?",
        "answer": "«Listo» solo cierra el resultado. Toca «Guardar en Fotos» por separado y comprueba el permiso y la confirmación de guardado."
      }
    ],
    "steps": [
      {
        "title": "Abre la herramienta para unir vídeos",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Unir videos» (Stitch Videos)."
      },
      {
        "title": "Elige el vídeo principal y revisa la vista previa",
        "text": "En «Seleccionar vídeo» (Select Video), usa «Elegir entre Fotos» (Choose from Photos) para elegir el primero. Será el vídeo principal y abrirá el resultado. Revisa el archivo al entrar en las opciones.",
        "sections": [
          {
            "title": "Vista previa, nombre y tiempo",
            "text": "Toca reproducir en el centro para previsualizar el vídeo principal. Debajo aparecen el nombre, la posición y la duración para identificar la versión correcta. El principal dura 02:26 en el ejemplo; todavía no es la duración total de la unión."
          },
          {
            "title": "¿Qué significa 640×338?",
            "text": "Son las dimensiones en píxeles del vídeo principal. Es información del archivo, no un selector de tamaño de salida. La pantalla de unión no tiene opciones independientes de resolución, fotogramas por segundo o calidad."
          },
          {
            "title": "¿Por qué el contador no incluye el vídeo principal?",
            "text": "Solo cuenta los clips agregados mediante «Añadir vídeo» (Add Video), sin incluir el principal de arriba. 0 significa que aún no hay clips añadidos. Para unir vídeos, añade al menos otro en el siguiente paso."
          }
        ]
      },
      {
        "title": "Añade los siguientes clips",
        "text": "En «Opciones de procesamiento» (Processing Options), toca «Añadir vídeo». Elige la fuente en «Seleccionar vídeos para unir» (Select Videos to Stitch). El ejemplo vuelve a usar «Elegir entre Fotos».",
        "sections": [
          {
            "title": "Elige entre las tres fuentes",
            "text": "«Elegir entre Descargas» (Choose from Downloads) usa vídeos descargados en la app; «Elegir entre Fotos» usa la fototeca y «Elija entre archivos» (Choose from Files) abre el selector de archivos. Elige según dónde esté el vídeo; no necesitas volver a descargar uno que ya tienes en Fotos."
          },
          {
            "title": "Selecciona varios vídeos en Fotos y confirma",
            "text": "Toca los vídeos que quieras añadir; sus miniaturas mostrarán números de selección. Confirma con la marca azul de arriba a la derecha. Puedes tocar «Añadir vídeo» otra vez para importar más. Revisa el total al volver para no añadir el principal por duplicado."
          }
        ]
      },
      {
        "title": "Revisa la cantidad y el orden",
        "text": "El contador excluye el principal: «2 clips añadidos» (2 clips added) significa tres en total. La lista añadida empieza por «Clip 2» y se reproduce de arriba abajo después del principal.",
        "sections": [
          {
            "title": "Ordena los clips con las flechas",
            "text": "Las flechas cambian el orden de los clips añadidos. El primero no puede subir más ni el último bajar más. Si solo hay un clip añadido, ambas flechas están desactivadas."
          },
          {
            "title": "El principal y la lista añadida",
            "text": "El vídeo principal de arriba abre el resultado y no forma parte de la lista que se puede ordenar. Para cambiar el comienzo, vuelve a seleccionar el principal y añade los siguientes clips."
          },
          {
            "title": "Miniaturas, duraciones y eliminación",
            "text": "La miniatura, el nombre y la duración de cada fila ayudan a distinguir clips. La papelera roja elimina ese clip añadido. Revisa el orden, los duplicados y el contenido antes de empezar. El ejemplo sigue: principal 02:26 → Clip 2 05:11 → Clip 3 04:10."
          }
        ]
      },
      {
        "title": "Inicia la unión y consulta el progreso",
        "text": "Confirma los clips y toca «Iniciar procesamiento» (Start Processing). El aviso muestra «Procesando vídeo» (Processing video) y el porcentaje. Espera a que aparezca el resultado para revisarlo.",
        "sections": [
          {
            "title": "Notificaciones y segundo plano",
            "text": "Durante tareas largas aparece «Notificarme cuando se complete» (Notify me when complete). Actívalo si quieres un aviso y atiende la solicitud de permiso. La app indica que intentará continuar si pasas a segundo plano, pero el sistema puede limitar el tiempo de ejecución."
          },
          {
            "title": "Cancela la tarea actual",
            "text": "«Cancelar» (Cancel), al pie del aviso, cancela la tarea; no oculta simplemente la ventana de progreso. Si necesitas el resultado, deja que siga hasta terminar."
          }
        ]
      },
      {
        "title": "Previsualiza la unión y guárdala en Fotos",
        "text": "Previsualiza el resultado y confirma el orden. La lista de entrada muestra duraciones redondeadas a segundos; usa el archivo de salida para comprobar el total.",
        "sections": [
          {
            "title": "Qué revisar antes de guardar",
            "text": "Reproduce el resultado y comprueba el principio, el final y las uniones: orden, proporción de imagen y continuidad del audio. En este ejemplo, revisa especialmente alrededor de 02:26 y 07:37. Decide si conservarlo después de verlo o escucharlo completo."
          },
          {
            "title": "Guardar en Fotos",
            "text": "Toca «Guardar en Fotos» (Save to Photos) y concede el permiso solicitado. Espera a ver «Guardado en Fotos» (Saved to Photos) y comprueba el resultado en Fotos."
          },
          {
            "title": "Seguir procesando, compartir o terminar",
            "text": "«Seguir procesando» (Keep Processing) permite continuar editando; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Para conservarlo en Fotos, toca primero «Guardar en Fotos»; «Listo» no es un botón de guardado."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se unieron tres vídeos, se cambió el orden de los añadidos y se reprodujo el resultado de 11:46, con confirmación de guardado. En esa versión, volver a la unión desde «Edición rápida» reinició la lista añadida."
  },
  "interleave-videos-iphone": {
    "title": "Intercala fragmentos de varios vídeos",
    "description": "Usa «Intercalado» en iPhone o iPad para alternar fragmentos de distintos vídeos. Añade los archivos y ajusta la división, el orden inicial y la transición del audio.",
    "intro": "Usa «Intercalado» para alternar fragmentos de distintos vídeos. Añade los archivos y ajusta la división, el orden inicial y la transición del audio.",
    "tips": [
      {
        "title": "El ritmo cambia demasiado",
        "text": "El modo de segmentos totales no garantiza fragmentos de igual duración entre fuentes. A y B tienen duraciones diferentes en el ejemplo y la interfaz ya muestra segmentos de longitudes distintas."
      }
    ],
    "faq": [
      {
        "question": "¿En qué se diferencia de unir vídeos?",
        "answer": "«Unir videos» concatena clips completos en orden; «Intercalado» alterna entre fuentes según las reglas de división."
      },
      {
        "question": "¿Por qué puedo usar el número de segmentos aunque tenga asterisco?",
        "answer": "Hasta 5 segmentos en total son gratuitos. Revisa el valor elegido y la explicación de los permisos: el asterisco no implica que todos los valores requieran VIP."
      }
    ],
    "steps": [
      {
        "title": "Abre «Intercalado»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Intercalado» (Interleave)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Añade los vídeos A y B",
        "text": "El principal aparece como «A Vídeo actual» (A Current Video). Toca «Añadir vídeo» (Add Video) e importa B desde descargas, Fotos o Archivos. En Fotos, confirma la selección con la marca de arriba a la derecha.",
        "sections": [
          {
            "title": "Cantidad añadida y total",
            "text": "«1 añadido, 2 vídeos en total» (1 added, 2 videos total) significa que hay dos fuentes. A es el principal y su icono de candado no se puede usar. Los vídeos añadidos tienen controles para ordenar o eliminar; su disponibilidad depende de la posición y la cantidad."
          },
          {
            "title": "Archivos del ejemplo",
            "text": "A dura unos 6 segundos y B unos 2 minutos y 26 segundos. Cuando las fuentes difieren mucho, sus segmentos también pueden tener duraciones muy distintas. Para un ritmo más uniforme, recorta primero las fuentes a longitudes parecidas."
          }
        ]
      },
      {
        "title": "Configura los segmentos y las reglas de intercalado",
        "text": "El ejemplo usa «Segmentos totales» (Total Segments), «5 segmentos» (5 segments), «Comience con A» (Start with A) y el fundido de audio predeterminado de 50 ms. Lee la distribución al final de la pantalla.",
        "sections": [
          {
            "title": "Segmentos totales o duración fija*",
            "text": "«Segmentos totales» distribuye el número total. En el ejemplo hay 5: A se divide en 3 de unos 2 segundos y B en 2 de aproximadamente 1 minuto y 13 segundos, que se alternan. «Duración fija» (Fixed Duration) divide por tiempo y requiere VIP."
          },
          {
            "title": "Elige qué fuente abre el vídeo",
            "text": "«Comience con A» empieza por el principal y «Comience con B» (Start with B) por B. Al cambiar la fuente inicial, vuelve a leer la distribución para confirmar el comienzo."
          },
          {
            "title": "Suaviza los cortes de sonido",
            "text": "El fundido predeterminado de unos 50 ms suaviza cada corte de audio. La pantalla indica que dos vídeos, hasta 5 segmentos y el fundido predeterminado son gratuitos. Más fuentes, duración fija y fundido personalizado requieren VIP."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Toca «Iniciar procesamiento» (Start Processing) y revisa cada cambio al reproducir: la fuente inicial, el orden de fragmentos y las transiciones de audio.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. El ejemplo A/B usa 5 segmentos, «Comience con A» y fundido de audio de 50 ms. El resultado muestra 02:31."
  },
  "segment-grid-video-iphone": {
    "title": "Crea una cuadrícula de segmentos de vídeo",
    "description": "Divide un vídeo por tiempo y reproduce sus fragmentos a la vez en una cuadrícula en iPhone o iPad. Elige filas, columnas, sonido y dimensiones de salida.",
    "intro": "Divide un vídeo por tiempo y reproduce sus fragmentos a la vez en una cuadrícula. Elige filas, columnas, sonido y dimensiones de salida.",
    "tips": [
      {
        "title": "Las celdas se ven poco nítidas",
        "text": "Con un tamaño de salida fijo, más celdas dejan menos píxeles para cada una. Reduce filas o columnas o elige dimensiones adecuadas y compara el resultado."
      }
    ],
    "faq": [
      {
        "question": "¿Combina varios vídeos independientes en una cuadrícula?",
        "answer": "Esta herramienta usa distintos intervalos de un solo vídeo. No tiene una lista de archivos añadidos como «Unir videos»."
      },
      {
        "question": "¿Por qué no hay sonido por defecto?",
        "answer": "Se usa «Silencio» para evitar audio superpuesto. Si lo necesitas, elige «Audio del primer segmento»."
      }
    ],
    "steps": [
      {
        "title": "Abre «Cuadrícula de segmentos»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Cuadrícula de segmentos» (Segment Grid)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Ajusta las filas, las columnas y el sonido",
        "text": "Importa un vídeo y revisa «Columnas» (Columns), «Filas» (Rows) y «Sonido» (Sound). El ejemplo usa 2 columnas, 2 filas y el silencio predeterminado.",
        "sections": [
          {
            "title": "Filas × columnas determina las celdas",
            "text": "2×2 crea cuatro celdas y divide el vídeo en cuatro intervalos iguales. Como se reproducen a la vez, el resultado dura menos que el original. La duración de la pantalla es estimada: comprueba la salida final."
          },
          {
            "title": "Silencio o audio del primer segmento",
            "text": "«Silencio» (Mute) evita superponer sonidos. «Audio del primer segmento» (First Segment Audio) conserva el sonido del primer fragmento. Comprueba que sea adecuado para acompañar toda la cuadrícula."
          },
          {
            "title": "Opciones gratuitas y asteriscos",
            "text": "Puedes empezar con la cuadrícula gratuita 2×2 y «Tamaño del vídeo original» (Original Video Size). 3 o más filas o columnas, salida cuadrada y conservar el tamaño original de cada celda requieren VIP."
          }
        ]
      },
      {
        "title": "Elige las dimensiones de salida",
        "text": "Toca «Tamaño de exportación» (Export Size) para ver las dimensiones. El ajuste se refiere al vídeo completo, no a cada celda.",
        "sections": [
          {
            "title": "Tamaño del vídeo o de cada celda",
            "text": "En el ejemplo, «Tamaño del vídeo original» es 640×338 para las cuatro celdas juntas. «Mantén cada mosaico en su tamaño original» (Keep Each Tile Original Size) muestra 1280×676*. Conservar más píxeles por celda puede aumentar mucho el tamaño y el tiempo de procesamiento y estar limitado por el sistema."
          },
          {
            "title": "Horizontal, vertical o cuadrado",
            "text": "También hay opciones de 1280×720, 1920×1080, 1080×1920 y 1080×1080*. Elige según dónde lo mostrarás y comprueba que cada celda se vea nítida y completa."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Toca «Iniciar procesamiento» (Start Processing) y previsualiza la cuadrícula. Revisa el fragmento de cada celda, las dimensiones y el sonido.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se exportó en silencio, con 2×2 y «Tamaño del vídeo original». Para unos 6 segundos de entrada, se estimaron unos 2 segundos de salida; el resultado muestra aproximadamente 1 segundo redondeado. Ninguna indicación mide la duración con precisión de fotograma."
  },
  "resize-video-iphone": {
    "title": "Ajusta el lienzo y la distribución del vídeo",
    "description": "Usa «Cambiar el tamaño/lienzo» en iPhone o iPad para cambiar la proporción. «Ajustar» conserva la imagen completa y «Relleno de recorte» llena el lienzo.",
    "intro": "Usa «Cambiar el tamaño/lienzo» para cambiar la proporción. «Ajustar» conserva la imagen completa y «Relleno de recorte» llena el lienzo.",
    "tips": [
      {
        "title": "Decide si puedes recortar los bordes",
        "text": "Si hay subtítulos o contenido importante cerca del borde, prueba «Ajustar». Para llenar el lienzo, usa «Relleno de recorte» y revisa los fotogramas importantes."
      }
    ],
    "faq": [
      {
        "question": "¿Cambiar la proporción estira la imagen?",
        "answer": "«Ajustar» mantiene la proporción y añade fondo cuando hace falta. Si eliges otra distribución, revisa si hay recorte o estiramiento antes de exportar."
      },
      {
        "question": "¿Cómo cambio la resolución de salida?",
        "answer": "Esta herramienta se centra en la proporción y la distribución. Para cambiar dimensiones y formato, consulta la resolución de «Transcodificar vídeo»."
      }
    ],
    "steps": [
      {
        "title": "Abre «Cambiar el tamaño/lienzo»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Cambiar el tamaño/lienzo» (Resize / Canvas)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige la proporción del lienzo",
        "text": "Elige la proporción en «Relación de lienzo» (Canvas Ratio) y revisa «Diseño» (Layout) y el color de fondo. El ejemplo usa 1:1, «Ajustar» (Fit) y fondo negro.",
        "sections": [
          {
            "title": "Original, 16:9, 9:16, 1:1, 4:3 o 3:4",
            "text": "«Original» mantiene la proporción de origen. 16:9 se usa habitualmente para horizontal, 9:16 para vertical y 1:1 para cuadrado. La proporción describe la relación entre ancho y alto, no una resolución en píxeles como 1080p."
          },
          {
            "title": "Color de fondo*",
            "text": "#000000 es negro. Cuando la imagen y el lienzo tienen proporciones diferentes y se usa «Ajustar», queda una zona de fondo. Cambiar su color requiere VIP."
          }
        ]
      },
      {
        "title": "Elige ajustar con bordes, recortar para rellenar u otra distribución",
        "text": "Toca «Diseño» para abrir la lista. Elige una distribución, vuelve a las opciones, revisa el resumen y toca «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Ajustar: conserva la imagen completa",
            "text": "Coloca toda la imagen proporcionalmente en el lienzo, con fondo si hace falta. Sirve para no recortar personas, subtítulos ni contenido de los bordes. El ejemplo se exportó con «Ajustar»."
          },
          {
            "title": "Relleno de recorte: llena el lienzo",
            "text": "Llena el lienzo manteniendo la proporción, lo que puede recortar bordes si las proporciones difieren. Comprueba la vista previa, especialmente subtítulos, cabezas y extremos laterales."
          },
          {
            "title": "Desenfoque y distribuciones con asterisco",
            "text": "«Desenfoque 1:1*» (Blur 1:1*), «Doble 1:1*» (Double 1:1*), «Doble simétrico 1:1*» (Symmetric Double 1:1*), «Triple 1:1*» (Triple 1:1*) y «Triple desenfoque 1:1*» (Triple Blur 1:1*) son fondos desenfocados o distribuciones de varios paneles que requieren VIP."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Previsualiza la proporción del lienzo, los bordes y el fondo. Con «Ajustar», confirma que se conserve toda la imagen antes de guardar.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se exportó con lienzo 1:1, «Ajustar» y fondo negro. No se verificaron las salidas de pago con fondo desenfocado o varios paneles."
  },
  "rotate-video-iphone": {
    "title": "Gira la orientación de un vídeo",
    "description": "Si un vídeo aparece de lado o boca abajo, usa «Girar video» en iPhone o iPad. Elige el ángulo, revisa la vista previa y guarda el resultado.",
    "intro": "Si un vídeo aparece de lado o boca abajo, usa «Girar video». Elige el ángulo, revisa la vista previa y guarda el resultado.",
    "tips": [
      {
        "title": "Girar y reflejar son operaciones distintas",
        "text": "Girar cambia la orientación. Reflejar intercambia izquierda y derecha o arriba y abajo. Para texto invertido en una selfie, consulta «Vídeo espejo»."
      }
    ],
    "faq": [
      {
        "question": "¿Qué opción corrige un vídeo boca abajo?",
        "answer": "Elige 180 y comprueba en la vista previa que el sujeto quede orientado correctamente."
      },
      {
        "question": "¿Girar cambia la duración?",
        "answer": "Esta operación cambia la orientación. Comprueba la duración del archivo de salida después de girarlo."
      }
    ],
    "steps": [
      {
        "title": "Abre «Girar video»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Girar video» (Rotate Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige la dirección de giro",
        "text": "Elige el ángulo en «Rotación» (Rotation) y comprueba la orientación en la vista previa. El ejemplo usa «Girar hacia la derecha 90» (Rotate Right 90).",
        "sections": [
          {
            "title": "90° a la derecha, 180° o 90° a la izquierda",
            "text": "«Girar hacia la derecha 90» gira un cuarto de vuelta en sentido horario; 180 da media vuelta y «Girar hacia la izquierda 90» (Rotate Left 90) gira un cuarto en sentido antihorario. Un giro de 90° intercambia la orientación horizontal y vertical."
          },
          {
            "title": "Bordes negros de la vista previa",
            "text": "Un vídeo vertical dentro de una tarjeta horizontal puede mostrar bordes negros. Eso no implica que el archivo exportado incluya los mismos bordes. Comprueba las dimensiones y la reproducción del archivo guardado."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Toca «Iniciar procesamiento» (Start Processing) y revisa la orientación del resultado. Guarda cuando el texto y el sujeto estén correctamente orientados.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se giró 90 grados a la derecha un fragmento de unos 6 segundos; el cambio se vio en la vista previa y en la exportación."
  },
  "mirror-video-iphone": {
    "title": "Refleja la imagen de un vídeo",
    "description": "Usa «Vídeo espejo» en iPhone o iPad para invertir la imagen horizontal o verticalmente. Revisa el efecto antes de exportar, especialmente textos y logotipos.",
    "intro": "Usa «Vídeo espejo» para invertir la imagen horizontal o verticalmente. Revisa el efecto antes de exportar, especialmente textos y logotipos.",
    "tips": [
      {
        "title": "Los subtítulos también pueden quedar invertidos",
        "text": "El espejo afecta a toda la imagen. Si el fragmento contiene texto, comprueba si puedes aceptar el cambio de orientación."
      }
    ],
    "faq": [
      {
        "question": "¿Qué elijo si izquierda y derecha están intercambiadas?",
        "answer": "Prueba «H Flip» y revisa el texto o la posición de los elementos en la imagen."
      },
      {
        "question": "¿Reflejar reproduce el movimiento al revés?",
        "answer": "No. Para invertir el orden temporal, usa «Vídeo inverso»."
      }
    ],
    "steps": [
      {
        "title": "Abre «Vídeo espejo»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Vídeo espejo» (Mirror Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Previsualiza el efecto de espejo",
        "text": "Después de importar, «Modo espejo» (Mirror Mode) muestra el modo actual. El ejemplo usa «H Flip» (inversión horizontal). Observa los detalles a izquierda y derecha en la vista previa antes de abrir la lista.",
        "sections": []
      },
      {
        "title": "Distingue los modos de inversión y simetría",
        "text": "Toca «Modo espejo» para ver las opciones, elige una, vuelve y toca «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Inversión horizontal, vertical o central",
            "text": "«H Flip» intercambia izquierda y derecha; «V Flip» (inversión vertical) intercambia arriba y abajo; «180» (media vuelta) gira media vuelta. Como los nombres se parecen, revisa texto o señales claras de la imagen."
          },
          {
            "title": "Simulación lateral*, superior* o central*",
            "text": "«Simulación lateral*» (Side Sym*), «Simulación superior*» (Top Sym*) y «Simulación central*» (Center Sym*) crean efectos simétricos, distintos de invertir toda la imagen. Requieren VIP; consulta la vista previa al elegirlos."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Previsualiza el resultado y revisa las posiciones horizontales o verticales. El texto, los logotipos y los subtítulos incrustados también se invierten.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se exportó con «H Flip». Solo se revisaron los accesos a las simetrías de pago, sin verificar sus resultados."
  },
  "reverse-video-iphone": {
    "title": "Reproduce un vídeo al revés",
    "description": "Usa «Vídeo inverso» en iPhone o iPad para reproducir desde el final al principio. Elige silencio, audio original o audio invertido y previsualiza el resultado.",
    "intro": "Usa «Vídeo inverso» para reproducir desde el final al principio. Elige silencio, audio original o audio invertido y previsualiza el resultado.",
    "tips": [
      {
        "title": "Recorta primero un fragmento corto",
        "text": "Usa «Recortar video» para conservar la acción que te interesa antes de invertirla. Así podrás revisar mejor el ritmo y reducir lo que se procesa."
      }
    ],
    "faq": [
      {
        "question": "¿Invertir el vídeo equivale a girarlo 180 grados?",
        "answer": "No. Invertir cambia el orden temporal; «Girar video» cambia la orientación de la imagen."
      },
      {
        "question": "¿Por qué el resultado no tiene sonido?",
        "answer": "El ejemplo usa «Silencio», la opción predeterminada. Si necesitas sonido, elige el modo correspondiente y comprueba la exportación."
      }
    ],
    "steps": [
      {
        "title": "Abre «Vídeo inverso»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Vídeo inverso» (Reverse Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige el sonido para la reproducción al revés",
        "text": "En «Sonido» (Sound), elige «Silencio» (Mute), «Mantener audio» (Keep Audio) o «Audio inverso» (Reverse Audio). El ejemplo usa «Silencio» y después «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Silencio: sin audio",
            "text": "Sirve para conservar solo la acción invertida y evitar que diálogos o sonidos ambientales invertidos resulten extraños."
          },
          {
            "title": "Mantener o invertir el audio",
            "text": "«Mantener audio» conserva el orden original del sonido; «Audio inverso» lo reproduce al revés. Elige según necesites y escucha los diálogos o la música exportados."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Reproduce el resultado y confirma que la acción vaya del final al principio. Revisa el comienzo, el final y el modo de audio antes de guardar.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Solo se probó «Silencio» y el resultado empieza por el final del original. No se verificaron «Mantener audio» ni «Audio inverso»."
  },
  "change-video-speed-iphone": {
    "title": "Acelera o ralentiza un vídeo",
    "description": "Usa «Cambiar velocidad» en iPhone o iPad para acelerar o ralentizar un vídeo. Elige el multiplicador y revisa la duración y el sonido antes de guardar.",
    "intro": "Usa «Cambiar velocidad» para acelerar o ralentizar un vídeo. Elige el multiplicador y revisa la duración y el sonido antes de guardar.",
    "tips": [
      {
        "title": "Ralentizar no siempre mejora la fluidez",
        "text": "La cámara lenta puede hacer más visibles la falta de fotogramas o el desenfoque de movimiento del original. Compara un fragmento corto: el multiplicador por sí solo no garantiza el efecto."
      }
    ],
    "faq": [
      {
        "question": "¿Cuánto dura un vídeo a 2x?",
        "answer": "Normalmente, aproximadamente la mitad. Comprueba la duración real del archivo de salida."
      },
      {
        "question": "¿Por qué no hay sonido a velocidades altas?",
        "answer": "La pantalla indica que por encima de 4x el audio se elimina automáticamente."
      }
    ],
    "steps": [
      {
        "title": "Abre «Cambiar velocidad»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Cambiar velocidad» (Change Speed)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Ajusta la velocidad y el tono",
        "text": "Arrastra «Velocidad» (Speed) y revisa el multiplicador de la derecha y «Duración estimada del procesamiento» (Estimated processed duration), que aquí indica cuánto durará el vídeo resultante. Confirma y toca «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Multiplicador y duración",
            "text": "1x es la velocidad original, más de 1 acelera y menos de 1 ralentiza. La duración de salida es aproximadamente la original dividida por el multiplicador: 6 segundos ÷ 1,5 ≈ 4 segundos. Comprueba el resultado real."
          },
          {
            "title": "Conservar el tono al cambiar la velocidad",
            "text": "Esta opción VIP mantiene el tono original. Sin ella, el tono puede cambiar con la velocidad. Escucha con especial atención los diálogos y el canto."
          },
          {
            "title": "Rango de velocidad y audio",
            "text": "La pantalla indica que 0,5x–2x es gratuito; el rango ampliado de 0,1x–32x y conservar el tono requieren VIP. Por encima de 4x se elimina el audio automáticamente."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Reproduce el resultado y revisa ritmo, duración y sonido. Si va demasiado rápido o lento, cambia el multiplicador y exporta de nuevo.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. El ejemplo usa 1,50x sin conservar el tono y convierte unos 6 segundos en aproximadamente 4."
  },
  "edit-video-audio-iphone": {
    "title": "Silencia un vídeo o ajusta su volumen",
    "description": "Usa «Edición de audio» en iPhone o iPad para silenciar, ajustar el volumen o sustituir el audio de un vídeo. Elige el modo, configura sus parámetros y escucha el resultado.",
    "intro": "Usa «Edición de audio» para silenciar, ajustar el volumen o sustituir el audio de un vídeo. Elige el modo, configura sus parámetros y escucha el resultado.",
    "tips": [
      {
        "title": "El sonido está distorsionado o tiene demasiado ruido",
        "text": "Revisa la calidad original y ajusta con moderación. Subir el volumen también puede amplificar el ruido. Conserva el vídeo original para comparar."
      }
    ],
    "faq": [
      {
        "question": "¿Se obtiene un archivo de audio?",
        "answer": "Esta herramienta modifica el sonido del vídeo y sigue exportando un vídeo. Para un archivo de audio independiente, usa «Extraer audio»."
      },
      {
        "question": "¿Cómo compruebo el porcentaje de volumen?",
        "answer": "Revisa el porcentaje junto al control y el resumen del historial de exportación, y escucha el resultado."
      }
    ],
    "steps": [
      {
        "title": "Abre «Edición de audio»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Edición de audio» (Audio Editing)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige el modo de procesamiento de audio",
        "text": "En «Modo de procesamiento» (Processing Mode), elige «Silencio» (Mute), «Volumen» (Volume) o «Reemplazar*» (Replace*). «Volumen» muestra el control de volumen y el interruptor de fundido.",
        "sections": [
          {
            "title": "Silencio: elimina el sonido",
            "text": "Elige «Silencio» si solo necesitas la imagen. Reproduce la exportación para confirmar que se ha eliminado el audio, en lugar de limitarte a silenciar el reproductor."
          },
          {
            "title": "Volumen: ajusta la intensidad",
            "text": "Arrastra el control y revisa el porcentaje. 100% mantiene la proporción de volumen original. Subirlo también puede amplificar el ruido; escucha la exportación antes de guardar."
          },
          {
            "title": "Reemplazar* y fundido de entrada/salida*",
            "text": "«Reemplazar» cambia la fuente del audio y «Fundido de entrada/salida» (Fade In/Out) añade fundidos. Ambos requieren VIP. Para elegir vídeo y audio por separado, puedes usar «Fusionar audio y vídeo» (Merge Audio and Video)."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Escucha el vídeo exportado y compáralo con el original. Si quieres cambiar el volumen, comprueba que haya cambiado el porcentaje antes de exportar; 100% mantiene la proporción original.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se exportó con «Volumen» al 100%, sin demostrar un cambio de volumen. No se ejecutaron «Reemplazar» ni los fundidos."
  },
  "add-watermark-video-iphone": {
    "title": "Añade una marca de agua de texto",
    "description": "Añade una marca de agua con ClipDock en iPhone o iPad: escribe el texto, ajusta tamaño y posición, previsualiza y guarda el vídeo.",
    "intro": "Usa «Agregar marca de agua» para escribir un texto y ajustar su tamaño y posición. Las capturas de parámetros y del resultado usan textos y vídeos diferentes; consulta las notas del ejemplo.",
    "tips": [
      {
        "title": "Previsualiza antes de guardar",
        "text": "La marca debe ser legible sin tapar contenido importante. Conserva el original para poder cambiar texto, posición o estilo y exportar otra vez."
      }
    ],
    "faq": [
      {
        "question": "¿La marca de agua con imagen es gratuita?",
        "answer": "La opción «Imagen*» tiene una marca VIP en esta versión. El ejemplo muestra una marca de texto."
      },
      {
        "question": "¿Por qué el texto del resultado difiere del de los parámetros?",
        "answer": "La pantalla de parámetros usa ClipDock Demo; la captura de un dispositivo real usa Made by ClipDock y otro vídeo. Ambas ilustran el mismo flujo de marcas de texto."
      }
    ],
    "steps": [
      {
        "title": "Abre «Agregar marca de agua»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Agregar marca de agua» (Add Watermark)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Configura el texto y el tamaño de la marca",
        "text": "Elige «Texto» (Text) en «Tipo de marca de agua» (Watermark Type), toca «Contenido de texto» (Text Content), escribe y confirma. El ejemplo usa ClipDock Demo. La vista previa muestra la posición y el aspecto aproximado.",
        "sections": [
          {
            "title": "Texto o imagen*",
            "text": "«Texto» crea una marca escrita. «Imagen» (Image) es la opción VIP para usar una imagen. Este ejemplo solo configura texto y no usa una marca de imagen."
          },
          {
            "title": "Tamaño del texto",
            "text": "El porcentaje de tamaño aparece a la derecha del control; el ejemplo usa 100%. Revisa la vista previa para no tapar al sujeto, los subtítulos ni contenido importante."
          }
        ]
      },
      {
        "title": "Ajusta la posición y el aspecto",
        "text": "Revisa «Posición de marca de agua» (Watermark Position), color, fondo, trazo y «Opacidad» (Opacity). Las opciones con asterisco requieren VIP. Que se muestre un valor predeterminado no significa que modificarlo sea gratis.",
        "sections": [
          {
            "title": "Posición de la marca",
            "text": "Puedes elegir arriba a la izquierda, arriba a la derecha, abajo a la izquierda, abajo a la derecha o el centro. El ejemplo usa abajo a la derecha. Evita tapar al sujeto o los subtítulos y revisa por separado los vídeos horizontales y verticales."
          },
          {
            "title": "Color, fondo y trazo",
            "text": "«Color del texto» (Text Color) cambia el color; «Mostrar fondo» (Show Background) controla el fondo del texto; «Trazo del texto» (Text Stroke) y «Color del trazo» (Stroke Color) ajustan el contorno. Estas opciones requieren VIP. Comprueba el contraste, sobre todo si la iluminación del vídeo cambia mucho."
          },
          {
            "title": "Ajusta la intensidad de la marca",
            "text": "El ejemplo muestra 75%. Al bajar el valor de «Opacidad», la marca se vuelve más tenue y puede perder legibilidad. Este parámetro requiere VIP."
          }
        ]
      },
      {
        "title": "Previsualiza el vídeo con la marca de agua y guárdalo",
        "text": "Toca «Iniciar procesamiento» (Start Processing) y previsualiza la marca en el vídeo exportado. Revisa texto, posición y legibilidad en distintas escenas.",
        "sections": [
          {
            "title": "Comprueba la marca de agua",
            "text": "Reproduce el resultado y comprueba la nitidez, la posición y si tapa al sujeto o los subtítulos. La captura final usa otro vídeo y otro texto, pero sigue el mismo flujo de los parámetros anteriores."
          },
          {
            "title": "Guarda en Fotos o comparte",
            "text": "Toca «Guardar en Fotos» (Save to Photos) y, tras la confirmación, comprueba el archivo en Fotos. «Compartir archivo» (Share File) abre las opciones para compartir."
          },
          {
            "title": "Sigue procesando o termina",
            "text": "«Seguir procesando» (Keep Processing) permite continuar con el resultado; «Listo» (Done) cierra la página, sin guardarlo en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas del acceso y los parámetros proceden del simulador de iPhone 17 Pro Max; el resultado procede de un iPhone real. Los parámetros usan ClipDock Demo y el resultado usa otro vídeo y Made by ClipDock. Solo se configuró una marca de texto; no se verificaron cambios de estilo de pago."
  },
  "capture-video-frames-iphone": {
    "title": "Extrae un fotograma de un vídeo",
    "description": "Usa «Captura de video» en iPhone o iPad para guardar un fotograma como imagen. Elige un momento nítido, previsualiza y guarda o comparte.",
    "intro": "Usa «Captura de video» para guardar un fotograma como imagen. Elige un momento nítido, previsualiza y guarda o comparte.",
    "tips": [
      {
        "title": "La imagen está borrosa",
        "text": "Elige un momento con menos movimiento y comprueba la nitidez del vídeo original. Extraer un fotograma no repara una imagen que ya estaba borrosa."
      }
    ],
    "faq": [
      {
        "question": "¿Puedo extraer varias imágenes a la vez?",
        "answer": "«Lote*» extrae fotogramas por lotes y requiere VIP. Para una sola imagen, usa «Único»."
      },
      {
        "question": "¿En qué se diferencia de una captura de pantalla del teléfono?",
        "answer": "«Captura de video» exporta el fotograma con dimensiones que dependen del vídeo. Una captura de pantalla del teléfono puede incluir controles de reproducción y la interfaz del sistema."
      }
    ],
    "steps": [
      {
        "title": "Abre «Captura de video»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Captura de video» (Video Capture)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Elige el modo y el momento de captura",
        "text": "Importa el vídeo, elige «Modo de captura» (Capture Mode) y ajusta «Tiempo de captura» (Capture Time). El ejemplo usa «Único» (Single), 00:00 y ninguna marca de tiempo.",
        "sections": [
          {
            "title": "Único: exporta un fotograma",
            "text": "Arrastra el control de tiempo y observa la vista previa. Elige un fotograma nítido y toca «Exportar imagen» (Export Image). Se exporta la imagen del vídeo, sin botones de la app ni marco de teléfono."
          },
          {
            "title": "Lote*, Inteligente* y Hoja de contactos*",
            "text": "«Lote» (Batch), «Inteligente» (Smart) y «Hoja de contactos» (Sheet) permiten extraer varios fotogramas, seleccionarlos de forma inteligente o crear una imagen de vista previa con varios. Requieren VIP; abre cada modo para ver sus ajustes."
          },
          {
            "title": "Añade una marca de tiempo",
            "text": "Esta opción añade el tiempo del fotograma. Déjala desactivada para mostrar solo el contenido o actívala para indicar el momento de origen. Revisa posición y legibilidad en la imagen exportada."
          }
        ]
      },
      {
        "title": "Previsualiza las imágenes y guárdalas",
        "text": "Toca «Exportar imagen» para abrir «Vista previa de captura de pantalla» (Screenshot Preview). Revisa la imagen, las dimensiones y el tamaño y toca «Guardar en Fotos» (Save to Photos) o «Compartir archivo» (Share File). «Listo» (Done) cierra la vista previa.",
        "sections": [
          {
            "title": "Las dimensiones proceden del vídeo",
            "text": "El vídeo del ejemplo mide 640×338 y la imagen exportada muestra esas mismas dimensiones. Una pantalla de teléfono mayor no añade detalle al vídeo original."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. «Único» exportó un JPEG de 640×338. No se verificaron ajustes ni resultados de «Lote», «Inteligente» o «Hoja de contactos»."
  },
  "extract-audio-iphone": {
    "title": "Extrae el audio de un vídeo",
    "description": "Usa «Extraer audio» en iPhone o iPad para guardar el sonido por separado. Selecciona un vídeo de Fotos o Archivos y guarda o comparte el audio.",
    "intro": "Usa «Extraer audio» para guardar el sonido por separado. Selecciona un vídeo de Fotos o Archivos y guarda o comparte el audio.",
    "tips": [
      {
        "title": "¿Qué hago si no hay sonido después de extraer?",
        "text": "Reproduce el original y comprueba que el reproductor no esté silenciado. Si el archivo no tiene pista de audio, la herramienta no puede recuperar sonido inexistente. Extraer tampoco mejora automáticamente la calidad del audio."
      },
      {
        "title": "Puedes continuar aunque no haya descargas",
        "text": "«No hay vídeos descargados disponibles para procesar» solo indica que no hay vídeos descargados en la app. Aquí usamos «Elegir entre Fotos» para importar directamente desde la fototeca."
      }
    ],
    "faq": [
      {
        "question": "¿Puedo elegir MP3 u otro formato?",
        "answer": "Este flujo genera M4A directamente y no ofrece un menú de formatos. El tutorial no incluye conversión a MP3."
      },
      {
        "question": "¿Por qué no aparece el resultado en Fotos?",
        "answer": "El resultado es un archivo de audio, no un vídeo ni una foto. Abre «Compartir archivo» y usa «Guardar en Archivos» u otra opción para gestionarlo."
      },
      {
        "question": "¿Puedo extraer el sonido directamente de un enlace compartido?",
        "answer": "Este tutorial procesa un vídeo que ya está en Fotos. Si solo tienes un enlace, guarda primero el vídeo con el tutorial de la plataforma correspondiente y después extrae el audio."
      }
    ],
    "steps": [
      {
        "title": "Abre la herramienta de extracción de audio",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Extraer audio» (Extract Audio)."
      },
      {
        "title": "Elige un vídeo de Fotos",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) y selecciona el vídeo en el selector del sistema. Puedes importar aunque no haya vídeos descargados. Si el archivo está en Archivos, usa «Elija entre archivos» (Choose from Files)."
      },
      {
        "title": "Espera a que termine la extracción",
        "text": "La extracción comienza al seleccionar el vídeo, sin un botón de inicio adicional. Cuando aparezcan «Procesamiento completo» (Processing Complete) y el archivo .m4a, toca «Compartir archivo» (Share File) para guardar o compartir. «Listo» (Done) cierra el aviso."
      },
      {
        "title": "Abre las opciones para compartir y guardar",
        "text": "En el panel de «Compartir archivo», elige «Guardar en Archivos» para conservar una copia o comparte con otra app. Después de guardar, abre el audio y comprueba el sonido y la duración."
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. La selección genera M4A directamente, sin menú de formatos. Las capturas llegan al panel para compartir; no muestran el guardado en Archivos completado. Los botones del sistema pueden seguir el idioma del dispositivo."
  },
  "change-video-md5-iphone": {
    "title": "Usa la herramienta para cambiar el MD5",
    "description": "Usa «Cambiar MD5» en iPhone o iPad para generar una copia procesada. Si necesitas confirmar el cambio, compara los hashes del original y de la salida con una herramienta de verificación.",
    "intro": "Usa «Cambiar MD5» para generar una copia procesada. Si necesitas confirmar el cambio, compara los hashes del original y de la salida con una herramienta de verificación.",
    "tips": [
      {
        "title": "Verifica los archivos reales",
        "text": "Un cambio de nombre no demuestra que haya cambiado el MD5. Si dependes de ese valor, calcula y compara los hashes de entrada y salida; el aviso de finalización no basta."
      }
    ],
    "faq": [
      {
        "question": "¿Mejora la calidad o reduce el tamaño?",
        "answer": "Este tutorial no presenta el cambio de MD5 como mejora de imagen ni compresión. Para comprimir, usa «Transcodificar vídeo»."
      },
      {
        "question": "¿Cambiar el hash modifica los derechos de uso del vídeo?",
        "answer": "No. Cambiar el hash del archivo no cambia los derechos de uso del contenido."
      }
    ],
    "steps": [
      {
        "title": "Abre «Cambiar MD5»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Cambiar MD5» (Change MD5)."
      },
      {
        "title": "Selecciona un vídeo y espera",
        "text": "Elige un vídeo de Fotos u otra fuente disponible. El procesamiento comienza directamente, sin una pantalla independiente de parámetros.",
        "sections": [
          {
            "title": "No se puede introducir un hash objetivo",
            "text": "La herramienta no tiene un campo para escribir un MD5 objetivo, por lo que no permite elegir un hash arbitrario."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Comprueba el archivo nuevo y guárdalo o compártelo. Para confirmar que el MD5 sea diferente, calcula y compara los hashes del original y la salida. El cambio de nombre no sustituye esa comprobación.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se generó _md5.mp4 y se abrió el resultado, pero no se compararon los valores MD5 de entrada y salida."
  },
  "merge-audio-video-iphone": {
    "title": "Combina un vídeo con otro audio",
    "description": "Usa «Fusionar audio y vídeo» en iPhone o iPad para combinar la imagen de un vídeo con el sonido de otro archivo. Elige primero el vídeo y después la fuente de audio y comprueba sonido y sincronización al exportar.",
    "intro": "Usa «Fusionar audio y vídeo» para combinar la imagen de un vídeo con el sonido de otro archivo. Elige primero el vídeo y después la fuente de audio y comprueba sonido y sincronización al exportar.",
    "tips": [
      {
        "title": "El sonido no está sincronizado o el final no encaja",
        "text": "Revisa las duraciones y los puntos de inicio de los archivos. Esta pantalla no tiene controles de desfase temporal ni bucle. Si hace falta, prepara los archivos por separado antes de fusionarlos de nuevo."
      }
    ],
    "faq": [
      {
        "question": "¿Tengo que extraer el audio primero?",
        "answer": "No. «Extraer audio del vídeo de Fotos» obtiene el sonido directamente de otro vídeo de la fototeca."
      },
      {
        "question": "¿Puedo ajustar la mezcla de dos pistas?",
        "answer": "Esta pantalla no tiene controles de mezcla ni de varias pistas. Si necesitas mezclar, prepara primero el audio por separado."
      }
    ],
    "steps": [
      {
        "title": "Abre «Fusionar audio y vídeo»",
        "text": "Toca «Procesamiento» (Process) en la barra inferior y abre «Fusionar audio y vídeo» (Merge Audio and Video)."
      },
      {
        "title": "Elige el vídeo que quieras procesar",
        "text": "En «Seleccionar vídeo» (Select Video), toca «Elegir entre Fotos» (Choose from Photos) o «Elija entre archivos» (Choose from Files) para importar. Puedes hacerlo aunque la lista de descargas esté vacía."
      },
      {
        "title": "Selecciona primero el vídeo",
        "text": "Importa primero el vídeo cuya imagen quieres conservar. La tarjeta superior muestra su vista previa, dimensiones y duración. «Fuente de audio» (Audio Source) aparece inicialmente como «No seleccionado» (Not Selected): aún falta elegir el sonido.",
        "sections": [
          {
            "title": "Confirma la imagen y el sonido por separado",
            "text": "Decide qué vídeo aporta la imagen y después elige el sonido. Ver la vista previa del vídeo no significa que la fuente de audio ya esté configurada."
          }
        ]
      },
      {
        "title": "Elige la fuente del audio",
        "text": "Toca «Fuente de audio». El menú ofrece «Elija entre archivos» y «Extraer audio del vídeo de Fotos» (Extract audio from Photos video).",
        "sections": [
          {
            "title": "Elige desde Archivos",
            "text": "Selecciona el archivo de audio que has preparado mediante el selector de archivos del sistema."
          },
          {
            "title": "Extrae el audio de un vídeo de Fotos",
            "text": "Esta opción obtiene el sonido de un vídeo de la fototeca. El ejemplo la usa para elegir otro vídeo, sin exportar antes un archivo de audio independiente."
          }
        ]
      },
      {
        "title": "Revisa las fuentes seleccionadas antes de fusionar",
        "text": "Al volver, «Fuente de audio» muestra el nombre del archivo elegido. Comprueba que sea correcto y toca «Iniciar procesamiento» (Start Processing).",
        "sections": [
          {
            "title": "Sin parámetros adicionales de mezcla",
            "text": "«Fuente de audio» selecciona la entrada de sonido. Esta pantalla no ofrece controles independientes de mezcla, desfase, bucle ni recorte de audio. Prepara esos ajustes antes de fusionar y escucha el resultado."
          }
        ]
      },
      {
        "title": "Revisa el resultado y guárdalo o sigue procesándolo",
        "text": "Antes de guardar, reproduce el resultado y comprueba la fuente de audio, la sincronización inicial, el volumen y el final. Presta especial atención si las dos fuentes tienen duraciones diferentes.",
        "sections": [
          {
            "title": "Previsualiza y guarda",
            "text": "Reproduce el resultado y comprueba la imagen, la duración y el sonido. Después toca «Guardar en Fotos» (Save to Photos). La primera vez puede pedir permiso para añadir fotos y vídeos. Tras la confirmación, comprueba el archivo en Fotos."
          },
          {
            "title": "Otros botones del resultado",
            "text": "«Seguir procesando» (Keep Processing) lleva el resultado al selector de herramientas; «Compartir archivo» (Share File) abre las opciones para compartir y «Listo» (Done) cierra el resultado. Tocar «Listo» no guarda en Fotos."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa del simulador de iPhone 17 Pro Max (iOS 26.0); el texto indica los botones en español. Los parámetros y límites corresponden a esa versión. Se obtuvo audio de otro vídeo de Fotos y se generó un vídeo de unos 6 segundos. No se escuchó la pista fusionada completa por segmentos."
  }
};
