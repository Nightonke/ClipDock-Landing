import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "Extrae los subtítulos existentes de YouTube",
    "description": "Extrae subtítulos existentes de YouTube con ClipDock en iPhone o iPad, elige los idiomas y el formato y guárdalos en Archivos o compártelos.",
    "intro": "Guarda los subtítulos que ya tiene un vídeo de YouTube para leerlos o editarlos. Pega el enlace, selecciona las pistas y el formato y guarda o comparte los archivos.",
    "tips": [
      {
        "title": "¿Qué hago si no aparecen subtítulos?",
        "text": "Comprueba que el vídeo se abra y que tenga subtítulos en YouTube. Si no los tiene, esta función no puede generarlos. Si ya existen, revisa el enlace y la conexión y vuelve a intentarlo."
      },
      {
        "title": "¿Qué hago si los subtítulos contienen errores?",
        "text": "Los subtítulos autogenerados proceden de YouTube y pueden contener errores de reconocimiento. Tras exportarlos, compara nombres, términos y tiempos con el vídeo antes de utilizarlos."
      }
    ],
    "faq": [
      {
        "question": "¿Se pueden extraer subtítulos autogenerados?",
        "answer": "Sí, si el vídeo los ofrece. Busca una pista marcada como auto-generated (generada automáticamente) en los resultados."
      },
      {
        "question": "¿Puedo exportar varios idiomas a la vez?",
        "answer": "Sí. Marca varias pistas o toca «Seleccionar todo» y después «Exportar subtítulos». Los idiomas disponibles son los que ya ofrece el vídeo."
      },
      {
        "question": "¿Puede traducir o generar subtítulos para un vídeo que no los tiene?",
        "answer": "No. Solo extrae los subtítulos ya existentes de YouTube. No traduce automáticamente ni genera subtítulos para vídeos que no los tienen."
      },
      {
        "question": "¿Los subtítulos se guardan en Fotos?",
        "answer": "No, se exportan como archivos. Usa «Guardar en Archivos» o compártelos con otra app."
      }
    ],
    "steps": [
      {
        "title": "Pega el enlace de YouTube",
        "text": "Copia el enlace compartido del vídeo de YouTube. Abre «Extracción» (Extract) en la barra inferior de ClipDock, entra en «Subtítulos» (Subtitles) y toca «Pegar» (Paste) o introduce el enlace manualmente. Usa el enlace de un vídeo concreto."
      },
      {
        "title": "Inicia la extracción y espera la lista",
        "text": "Comprueba el enlace y toca «Extraer» (Extract). Espera mientras aparezca «Extrayendo subtítulos…» (Extracting captions…). Solo se extraen subtítulos existentes de YouTube; no se transcribe el audio de vídeos sin subtítulos."
      },
      {
        "title": "Elige los idiomas de los subtítulos",
        "text": "Toca el círculo a la izquierda de cada pista o usa «Seleccionar todo» (Select all). Revisa el idioma y si la pista es autogenerada. Las pistas y los idiomas disponibles dependen del vídeo."
      },
      {
        "title": "Elige el formato del archivo de subtítulos",
        "text": "Toca «Formato: SRT» (Format: SRT) para abrir «Formato de subtítulos» (Caption format). Elige SRT, VTT, TTML, JSON3, SRV1, SRV2 o SRV3 según la app de destino y comprueba los formatos disponibles bajo cada pista seleccionada.",
        "sections": [
          {
            "title": "¿Qué formato elijo?",
            "text": "Puedes empezar con SRT. Para un reproductor web, elige VTT si así lo requiere. Si la app que usará los subtítulos especifica un formato, utiliza uno compatible."
          }
        ]
      },
      {
        "title": "Exporta a Archivos o comparte",
        "text": "Después de elegir pistas y formato, toca «Exportar subtítulos» (Export captions). El número entre paréntesis indica las pistas seleccionadas. En «Exportar a» (Export to), elige «Guardar en Archivos» (Save to Files) o «Compartir» (Share).",
        "sections": [
          {
            "title": "Guarda en Archivos",
            "text": "Elige «Guardar en Archivos», selecciona la ubicación y confirma. Después abre la app Archivos para comprobar los subtítulos."
          },
          {
            "title": "Comparte con otra app",
            "text": "Elige «Compartir» y selecciona la app o el método en el panel del sistema. Se exporta un archivo de subtítulos: guarda y utiliza solo contenido propio o autorizado."
          }
        ]
      }
    ],
    "exampleNote": "Las capturas usan la interfaz inglesa y muestran dos pistas de subtítulos en inglés. El flujo llega al menú de exportación; no muestra el guardado del archivo completado. Extrae subtítulos existentes, sin traducir ni transcribir audio."
  }
};
