import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "extract-youtube-subtitles-iphone": {
    "title": "Como extrair legendas existentes do YouTube?",
    "description": "Extraia legendas existentes do YouTube com o ClipDock no iPhone ou iPad. Escolha o idioma e o formato e salve em Arquivos ou compartilhe.",
    "intro": "Salve as legendas que um vídeo do YouTube já oferece para facilitar a leitura ou edição. Cole o link, escolha as faixas e o formato e salve ou compartilhe os arquivos.",
    "tips": [
      {
        "title": "O que fazer se nenhuma legenda for encontrada?",
        "text": "Confirme que o vídeo abre normalmente e veja se ele tem legendas no YouTube. Sem legendas existentes, esta função não pode criá-las. Se houver legendas, confira o link e a rede e tente novamente."
      },
      {
        "title": "E se houver erros no texto das legendas?",
        "text": "As legendas automáticas vêm do YouTube e podem conter erros de reconhecimento. Após exportar, compare nomes, termos e tempos com o vídeo original antes de usar o texto."
      }
    ],
    "faq": [
      {
        "question": "Posso extrair legendas geradas automaticamente?",
        "answer": "Sim, desde que o vídeo ofereça essas legendas. Procure faixas identificadas como auto-generated (geradas automaticamente) no resultado da extração."
      },
      {
        "question": "Posso exportar vários idiomas de uma vez?",
        "answer": "Sim. Marque várias faixas ou toque em “Selecionar tudo” e use “Exportar legendas”. Os idiomas disponíveis são os que o vídeo já oferece."
      },
      {
        "question": "O ClipDock traduz ou cria legendas para vídeos sem legenda?",
        "answer": "Não. A função extrai apenas legendas já existentes nos vídeos do YouTube. Ela não traduz automaticamente nem cria legendas para vídeos que não as têm."
      },
      {
        "question": "As legendas são salvas em Fotos?",
        "answer": "Não. As legendas são arquivos de texto, não mídias da fototeca. Escolha salvar em Arquivos ou use “Compartilhar” para enviá-las a outro app."
      }
    ],
    "steps": [
      {
        "title": "Cole o link do vídeo do YouTube",
        "text": "Copie o link de compartilhamento do vídeo no YouTube. No ClipDock, toque em “Extração” (Extract) na barra inferior, abra a aba “Legendas” (Subtitles) e toque em “Colar” (Paste) ou insira o link manualmente. Use o link de um vídeo específico."
      },
      {
        "title": "Inicie a extração e aguarde a lista",
        "text": "Confira o link e toque em “Extrair” (Extract). Aguarde enquanto o botão mostra “Extraindo legendas…” (Extracting captions…). A função extrai apenas legendas existentes no YouTube; ela não transcreve o áudio de vídeos sem legendas."
      },
      {
        "title": "Escolha os idiomas das legendas",
        "text": "Toque no círculo à esquerda das faixas desejadas ou use “Selecionar tudo” (Select all). Confira o idioma e se a faixa foi gerada automaticamente. Os idiomas e as faixas disponíveis dependem do vídeo."
      },
      {
        "title": "Escolha o formato do arquivo de legenda",
        "text": "Toque em “Formato: SRT” (Format: SRT) para abrir “Formato da legenda” (Caption format). Escolha SRT, VTT, TTML, JSON3, SRV1, SRV2 ou SRV3 conforme o software que receberá o arquivo. Confira também os formatos disponíveis abaixo de cada faixa selecionada.",
        "sections": [
          {
            "title": "Não sabe qual formato escolher?",
            "text": "Você pode começar com SRT. Para um player na web, use VTT se for o formato solicitado. Se o software que receberá a legenda tiver um requisito específico, escolha um formato compatível."
          }
        ]
      },
      {
        "title": "Exporte para Arquivos ou compartilhe",
        "text": "Depois de escolher as faixas e o formato, toque em “Exportar legendas” (Export captions). O número entre parênteses indica as faixas selecionadas. No menu de destino (Export to), escolha salvar em Arquivos (Save to Files) ou “Compartilhar” (Share).",
        "sections": [
          {
            "title": "Salve em Arquivos",
            "text": "Escolha salvar em Arquivos, selecione o local e confirme. Depois, abra o app Arquivos para conferir as legendas."
          },
          {
            "title": "Compartilhe com outro app",
            "text": "Escolha “Compartilhar” e selecione o app ou método no menu do sistema. O conteúdo exportado é um arquivo de legenda. Salve e use apenas conteúdo seu ou autorizado."
          }
        ]
      }
    ],
    "exampleNote": "As imagens usam a interface do app em inglês e mostram duas faixas de legendas em inglês disponíveis. A demonstração termina no menu de exportação, sem confirmar que os arquivos foram salvos. O fluxo extrai legendas existentes, sem tradução ou transcrição de áudio."
  }
};
