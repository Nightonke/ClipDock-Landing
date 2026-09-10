import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "video-to-gif-iphone": {
    "title": "Como converter um vídeo em GIF?",
    "description": "Transforme um trecho de vídeo em GIF no iPhone ou iPad. Escolha o trecho e ajuste a taxa de quadros e a largura para equilibrar fluidez, nitidez e tamanho do arquivo.",
    "intro": "Transforme um trecho de vídeo em GIF. Escolha o trecho e ajuste a taxa de quadros e a largura para equilibrar fluidez, nitidez e tamanho do arquivo.",
    "tips": [
      {
        "title": "O GIF ficou muito grande",
        "text": "Encurte o trecho e depois reduza a largura ou a taxa de quadros. Altere uma opção por vez para comparar e encontrar um equilíbrio entre nitidez e tamanho."
      }
    ],
    "faq": [
      {
        "question": "Por que o GIF não tem som?",
        "answer": "O formato GIF não contém áudio. Para manter o som, use uma saída de vídeo."
      },
      {
        "question": "Por que algumas opções têm asterisco?",
        "answer": "A tela informa que trechos acima de 10 segundos, taxas de quadros mais altas, largura de 720 pixels e predefinições exigem VIP. O exemplo usa parâmetros gratuitos."
      }
    ],
    "steps": [
      {
        "title": "Abra Vídeo para GIF",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Vídeo para GIF” (Video to GIF)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha o trecho e a predefinição",
        "text": "Após importar, confira o vídeo e veja “Predefinições” (Presets) e “Intervalo de clipe” (Clip Range). O exemplo usa “Personalizado” (Custom) e mantém cerca de 6 segundos.",
        "sections": [
          {
            "title": "Personalizado e predefinições com asterisco",
            "text": "“Personalizado” permite escolher os parâmetros. As predefinições “Limpo*” (Clear*), “Suave*” (Smooth*) e “Longo*” (Long*) priorizam nitidez, fluidez ou um trecho mais longo. O asterisco indica que é necessário VIP."
          },
          {
            "title": "Intervalo de clipe: mantenha o movimento desejado",
            "text": "Arraste os controles circulares nas extremidades para ajustar o início e o fim. A tela mostra os tempos e a duração selecionada. Trechos mais longos costumam exigir mais quadros e gerar arquivos maiores. Acima de 10 segundos, é necessário VIP."
          }
        ]
      },
      {
        "title": "Ajuste a taxa de quadros e a largura",
        "text": "Role até “Taxa de quadros” (Frame Rate), “Largura” (Width) e o tamanho estimado. Confira as opções e toque em “Iniciar processamento” (Start Processing). O exemplo usa 8 fps e 360 pixels de largura; a tela estima cerca de 1,2 MB e 48 quadros.",
        "sections": [
          {
            "title": "Taxa de quadros: quantas imagens por segundo",
            "text": "A tela oferece 6, 8, 12, 15* e 24* fps. Uma taxa maior costuma tornar o movimento mais fluido, mas aumenta a quantidade de quadros e o tamanho. Para movimentos simples, experimente 8 fps; para movimentos rápidos, compare taxas maiores. As opções de 15 e 24 fps têm marcação VIP."
          },
          {
            "title": "Largura: o tamanho do GIF em pixels",
            "text": "As opções são 240, 360, 540 e 720*. Uma largura maior costuma preservar mais detalhes, mas também pode gerar um arquivo maior. A opção de 720 exige VIP. Aumentar a saída não recupera detalhes ausentes no vídeo original."
          },
          {
            "title": "A estimativa não é o tamanho final",
            "text": "6 segundos × 8 fps resultam em cerca de 48 quadros. O tamanho comprimido também depende da complexidade das imagens. Confira o arquivo exportado. GIF não contém som; para manter o áudio, salve como vídeo."
          }
        ]
      },
      {
        "title": "Salve o GIF gerado",
        "text": "Ao aparecer “Processamento concluído” (Processing Complete), toque em “Salvar em Fotos” (Save to Photos) ou use “Compartilhar arquivo” (Share File). “Concluído” (Done) fecha o aviso. Depois, confira a animação em um app compatível com GIF.",
        "sections": []
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo exporta um GIF de cerca de 6 segundos com “Personalizado”, 8 fps e largura de 360 pixels. As combinações específicas das predefinições pagas não foram verificadas."
  },
  "video-to-live-photo-iphone": {
    "title": "Como converter um vídeo em Live Photo?",
    "description": "Converta um vídeo em Live Photo no iPhone ou iPad. Escolha o trecho, a capa e o som e salve em Fotos.",
    "intro": "Transforme um trecho curto em Live Photo, com uma capa estática à sua escolha e a opção de manter o som. Defina o trecho e o quadro de capa e salve em Fotos.",
    "tips": [
      {
        "title": "Confira a capa e o movimento separadamente",
        "text": "Uma boa capa não garante que todo o movimento esteja como você quer. Após salvar, confira o início, o fim, o som e a capa. Ao compartilhar, use um método que preserve a Live Photo."
      }
    ],
    "faq": [
      {
        "question": "Posso usar diretamente como papel de parede animado?",
        "answer": "Converter e salvar uma Live Photo não garante compatibilidade com o papel de parede da tela bloqueada. Isso também depende do dispositivo e do sistema. Este tutorial não considera a conversão uma prova de que o papel de parede funcionará."
      },
      {
        "question": "Qual é a diferença em relação ao GIF?",
        "answer": "Os formatos e as formas de compartilhamento são diferentes. A Live Photo pode manter o som; o GIF é uma imagem animada sem áudio."
      }
    ],
    "steps": [
      {
        "title": "Abra Vídeo para Live Photo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Vídeo para Live Photo” (Video to Live Photo)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Defina o trecho e a capa",
        "text": "Após importar, escolha o movimento em “Intervalo de clipe” (Clip Range) e defina o quadro de capa em “Moldura de capa” (Cover Frame). O exemplo seleciona 00:00–00:03.",
        "sections": [
          {
            "title": "Intervalo de clipe: escolha o movimento",
            "text": "Os controles circulares nas extremidades ajustam o início e o fim; a duração aparece acima. Comece com um trecho curto em torno do movimento principal. A tela informa que trechos acima de 3 segundos exigem VIP."
          },
          {
            "title": "Moldura de capa: escolha a imagem estática",
            "text": "Arraste o controle da capa e confira a miniatura à esquerda e o tempo indicado. Escolha um quadro em que o assunto esteja nítido e a expressão natural, evitando olhos fechados ou borrões de movimento. A capa e o intervalo do movimento são ajustes separados."
          }
        ]
      },
      {
        "title": "Escolha o som e a qualidade",
        "text": "Role até “Som” (Sound) e “Qualidade da Live Photo” (Live Photo Quality). Confira as opções e toque em “Iniciar processamento” (Start Processing). O exemplo mantém o som e usa “Balanceado” (Balanced).",
        "sections": [
          {
            "title": "Remover som ou manter o som",
            "text": "“Remover som” (Remove Sound) elimina o áudio; “Manter o som” (Keep Sound) preserva o som do trecho. Remova o áudio se quiser só o movimento ou mantenha-o para preservar o ambiente da gravação."
          },
          {
            "title": "Balanceado, HD* e Original*",
            "text": "Comece com “Balanceado”. “HD” (HD) e “Original” (Original) têm marcação VIP. Aumentar a qualidade da saída não recupera detalhes ausentes na origem."
          }
        ]
      },
      {
        "title": "Confira a Live Photo em Fotos",
        "text": "Aguarde o aviso “Live Photo salva no app Fotos” (Live Photo saved to Photos) e toque em “OK” (OK). No app Fotos, mantenha a Live Photo pressionada para conferir o movimento, a capa e o som.",
        "sections": []
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo usa 3 segundos e qualidade “Balanceado”. O app confirmou o salvamento, mas a reprodução ao manter pressionado no app Fotos não foi verificada."
  },
  "transcode-video-iphone": {
    "title": "Como converter e comprimir vídeos?",
    "description": "Use “Transcodificar vídeo” no iPhone ou iPad para mudar o formato ou reduzir o tamanho do arquivo. Escolha formato, resolução e qualidade e confira o resultado após exportar.",
    "intro": "Use “Transcodificar vídeo” para mudar o formato ou reduzir o tamanho do arquivo. Escolha formato, resolução e qualidade e confira o resultado após exportar.",
    "tips": [
      {
        "title": "A compressão não ficou boa",
        "text": "Mantenha o original e compare diferentes qualidades ou resoluções em um trecho curto. Evite recomprimir repetidamente um resultado já comprimido."
      }
    ],
    "faq": [
      {
        "question": "Por que o arquivo não diminuiu muito?",
        "answer": "O original pode já ser pequeno, ou os parâmetros de saída podem preservar mais qualidade. O tamanho final depende de duração, dimensões, codec, taxa de bits e outros fatores."
      },
      {
        "question": "Converter para 1080p melhora a nitidez?",
        "answer": "Aumentar a resolução de um vídeo menor não cria detalhes que não existiam. Confira o resultado na reprodução."
      }
    ],
    "steps": [
      {
        "title": "Abra Transcodificar vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Transcodificar vídeo” (Transcode Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha o formato, a qualidade e a resolução",
        "text": "Após importar, confira “Formato de saída” (Output Format), “Qualidade de saída” (Output Quality) e “Resolução” (Resolution). Depois, decida se quer manter o som.",
        "sections": [
          {
            "title": "Formato de saída: MP4, MOV ou M4V",
            "text": "Essas opções definem o contêiner do arquivo. Para compartilhar no dia a dia, comece com MP4. Se o software de destino exigir MOV ou M4V, escolha o formato correspondente. A extensão do arquivo e o codec interno são conceitos diferentes."
          },
          {
            "title": "Qualidade de saída: imagem e tamanho",
            "text": "“Alta qualidade” (High Quality) prioriza a imagem; “Padrão” (Standard) busca um equilíbrio; “Tamanho menor” (Smaller Size) prioriza reduzir o arquivo. O tamanho também depende das imagens e de outros parâmetros. O nome da predefinição não determina o tamanho final."
          },
          {
            "title": "Resolução e som",
            "text": "As opções de resolução são “Original” (Original), 720p, 480p e 1080p*. “Original” mantém as dimensões da origem; o vídeo do exemplo tem 640×338. Em “Som” (Sound), escolha “Manter o som” (Keep Sound) ou “Silenciar” (Mute). Reduzir a resolução pode diminuir o arquivo; aumentá-la não recupera detalhes ausentes."
          }
        ]
      },
      {
        "title": "Entenda o codec e a taxa de bits",
        "text": "Role até “Codec” (Codec), “Taxa de bits” (Bitrate) e o resumo de saída no final da tela. Confira se o resumo corresponde às suas escolhas e toque em “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "Codec: H.264 ou HEVC*",
            "text": "Você pode começar com H.264. HEVC exige VIP e pode oferecer compressão mais eficiente, mas confira a compatibilidade do dispositivo ou app de reprodução. Um contêiner MP4 pode usar codecs diferentes."
          },
          {
            "title": "Taxa de bits: automático, tamanho alvo* ou personalizada*",
            "text": "“Automático” (Auto) deixa a ferramenta escolher a taxa de bits. “Tamanho alvo” (Target Size) permite configurar pelo tamanho desejado; “Taxa de bits personalizada” (Custom Bitrate) permite definir a taxa. As duas últimas opções exigem VIP. Em condições iguais, uma taxa menor costuma gerar arquivos menores, mas pode deixar mais sinais de compressão."
          },
          {
            "title": "Opções VIP desta versão",
            "text": "A tela informa que HEVC, 1080p, original em alta definição, tamanho alvo e taxa de bits personalizada exigem VIP. O exemplo gerou um resultado com uma origem de baixa resolução, “Original”, “Padrão”, “Manter o som” e “Automático”."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Reproduza o vídeo exportado e compare o tamanho e a qualidade com o original. Observe principalmente bordas de texto, áreas escuras e movimentos rápidos antes de decidir salvar.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo usa resolução “Original”, qualidade “Padrão”, “Manter o som” e taxa de bits “Automático”, exportando cerca de 6 segundos em MP4/H.264."
  },
  "trim-video-iphone": {
    "title": "Como cortar a duração de um vídeo?",
    "description": "No iPhone ou iPad, mantenha apenas a parte desejada do vídeo. Defina o início e o fim em “Cortar vídeo” e salve o trecho ou continue em outra ferramenta.",
    "intro": "Mantenha apenas a parte desejada do vídeo. Defina o início e o fim em “Cortar vídeo” e salve o trecho ou continue em outra ferramenta.",
    "tips": [
      {
        "title": "Este corte ajusta o tempo",
        "text": "“Cortar vídeo” define qual intervalo de tempo será mantido. Para mudar a proporção da imagem ou da tela, use “Redimensionar / Canvas”."
      }
    ],
    "faq": [
      {
        "question": "Como manter apenas um trecho do meio?",
        "answer": "Ajuste o início e o fim, confira os tempos indicados no intervalo e depois reproduza e exporte."
      },
      {
        "question": "Por que a divisão uniforme abre a tela VIP?",
        "answer": "“Divisão uniforme” exige VIP. Para recortar apenas um intervalo, use “Selecionar segmento”."
      }
    ],
    "steps": [
      {
        "title": "Abra Cortar vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Cortar vídeo” (Trim Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Defina o modo de corte e o intervalo",
        "text": "Após escolher o vídeo, selecione “Selecionar segmento” (Select Segment) em “Modo de corte” (Trim Mode) e ajuste os dois controles de “Intervalo de corte” (Trim Range).",
        "sections": [
          {
            "title": "Selecionar segmento: exporte o trecho marcado",
            "text": "O controle esquerdo define o início; o direito, o fim. Acima, aparecem os tempos e a duração selecionada. O texto abaixo confirma o intervalo a exportar. No exemplo, ele vai de 00:00 a 00:06."
          },
          {
            "title": "Não confunda a prévia com o intervalo",
            "text": "A duração total abaixo da prévia é a do vídeo original. “Intervalo de corte” indica a parte que será mantida. Após ajustar, confira a imagem para não cortar o começo do movimento ou a última frase."
          },
          {
            "title": "Divisão uniforme*: partes de mesma duração",
            "text": "“Divisão uniforme” (Even Split) divide o vídeo inteiro em partes iguais e exporta todas juntas. A opção exige VIP. Para manter apenas um trecho, use “Selecionar segmento”."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Toque em “Iniciar processamento” (Start Processing), reproduza o trecho exportado e confira o início e o fim. Depois, salve ou use “Continue processando” (Keep Processing) para abrir outra ferramenta.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo recorta os primeiros 6 segundos de um vídeo de cerca de 2 minutos e 26 segundos com “Selecionar segmento”. “Divisão uniforme” abriu a tela VIP; a exportação em partes iguais não foi executada."
  },
  "join-videos-iphone": {
    "title": "Como juntar vídeos na ordem desejada?",
    "description": "No iPhone ou iPad, use “Montar vídeos” para juntar cenas de viagem, registros de eventos ou explicações em partes. Escolha o vídeo inicial, adicione os outros trechos e ajuste a ordem.",
    "intro": "Use “Montar vídeos” para juntar cenas de viagem, registros de eventos ou explicações em partes. Escolha o vídeo inicial, adicione os outros trechos e ajuste a ordem.",
    "tips": [
      {
        "title": "E se os vídeos tiverem orientações ou dimensões diferentes?",
        "text": "A tela de montagem não oferece ajustes separados de tela, recorte de imagem ou bordas. Se você precisa de uma proporção específica, prepare os arquivos com “Redimensionar / Canvas” ou outra ferramenta adequada antes de montar e confira o resultado."
      },
      {
        "title": "Mantenha a tela de configuração aberta",
        "text": "A varinha no canto superior direito leva o vídeo principal à seleção de “Edição rápida”. Voltar a “Montar vídeos” por esse caminho pode redefinir a lista de vídeos adicionados. Se a ordem já estiver pronta, inicie o processamento. Após trocar de ferramenta, confira a lista novamente."
      }
    ],
    "faq": [
      {
        "question": "Por que aparecem 2 clipes adicionados, mas o resultado tem três?",
        "answer": "O contador inclui apenas os vídeos adicionados depois, sem o vídeo principal do início. Um vídeo principal mais dois adicionados resulta em três trechos."
      },
      {
        "question": "Posso mover um trecho adicionado para antes do vídeo principal?",
        "answer": "As setas ajustam apenas a ordem da lista de vídeos adicionados. A seta para cima do primeiro item fica desativada. Para mudar o início, escolha outro vídeo principal."
      },
      {
        "question": "Posso configurar transições, música de fundo ou qualidade de saída aqui?",
        "answer": "A tela de montagem não tem essas opções. Ela serve para conferir o vídeo principal, adicionar trechos e ajustar a ordem. Use a ferramenta correspondente para outros efeitos."
      },
      {
        "question": "Por que o vídeo não aparece em Fotos após tocar em Concluído?",
        "answer": "“Concluído” apenas fecha a tela de resultado. Toque separadamente em “Salvar em Fotos” e confira a permissão e a confirmação de salvamento."
      }
    ],
    "steps": [
      {
        "title": "Abra a ferramenta de montagem em Processamento",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Montar vídeos” (Stitch Videos)."
      },
      {
        "title": "Escolha o vídeo principal e confira a prévia",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) e selecione o primeiro vídeo. Ele será o vídeo principal e abrirá a montagem. Confira o arquivo na tela de configuração.",
        "sections": [
          {
            "title": "Prévia, nome do arquivo e linha do tempo",
            "text": "Toque no botão central para reproduzir o vídeo principal. Abaixo aparecem o nome do arquivo, a posição de reprodução e a duração. Use essas informações para conferir a versão. O vídeo principal do exemplo dura 02:26; esse ainda não é o tempo total da montagem."
          },
          {
            "title": "O que significa 640×338?",
            "text": "São as dimensões em pixels do vídeo principal. É uma informação do arquivo, não um seletor de tamanho de saída. A tela de montagem não oferece opções separadas de resolução, taxa de quadros ou qualidade."
          },
          {
            "title": "Por que o vídeo principal não entra no contador?",
            "text": "O número conta apenas os trechos incluídos por “Adicionar vídeo” (Add Video), sem o vídeo principal acima. Zero indica que nenhum trecho foi adicionado. Para juntar vídeos, adicione pelo menos mais um na próxima etapa."
          }
        ]
      },
      {
        "title": "Adicione os próximos trechos",
        "text": "Em “Opções de processamento” (Processing Options), toque em “Adicionar vídeo”. Na janela “Selecionar vídeos para unir” (Select Videos to Stitch), escolha a origem dos arquivos. O exemplo usa novamente “Escolher entre fotos”.",
        "sections": [
          {
            "title": "Escolha entre as três origens",
            "text": "“Escolher nos Downloads” (Choose from Downloads) usa vídeos baixados no app; “Escolher entre fotos” abre a fototeca; “Escolher entre os arquivos” (Choose from Files) abre o seletor de arquivos. Escolha conforme o local da mídia. Não é necessário baixar novamente um vídeo de Fotos para montar."
          },
          {
            "title": "Selecione vários vídeos em Fotos e confirme",
            "text": "Toque nos vídeos que quer adicionar; as miniaturas mostram números de seleção. Confirme com a marca azul no canto superior direito. Para incluir mais trechos, toque novamente em “Adicionar vídeo”. Ao voltar, confira a lista para evitar adicionar o vídeo principal duas vezes."
          }
        ]
      },
      {
        "title": "Confira a quantidade e ajuste a ordem",
        "text": "O total adicionado não inclui o vídeo principal: “2 clipes adicionados” (2 clips added) significa três trechos no resultado. A lista começa em “Clip 2” (Clip 2) e segue de cima para baixo, após o vídeo principal.",
        "sections": [
          {
            "title": "Setas: ajuste a ordem dos trechos adicionados",
            "text": "Use as setas para cima e para baixo para reordenar os trechos adicionados. O primeiro não pode subir mais; o último não pode descer mais. Com apenas um trecho adicionado, as duas setas ficam indisponíveis."
          },
          {
            "title": "Vídeo principal e lista de trechos",
            "text": "O vídeo principal fica fixo no início e não aparece na lista de reordenação. Para começar com outro vídeo, volte, selecione um novo vídeo principal e adicione os demais trechos."
          },
          {
            "title": "Miniatura, duração e botão de remover",
            "text": "Cada linha mostra a miniatura, o nome e a duração para identificar o trecho. A lixeira vermelha remove aquele item da lista. Confira a ordem, as duplicatas e o conteúdo antes de iniciar. No exemplo, a sequência é vídeo principal 02:26 → Clip 2 05:11 → Clip 3 04:10."
          }
        ]
      },
      {
        "title": "Inicie a montagem e acompanhe o progresso",
        "text": "Confira os trechos e toque em “Iniciar processamento” (Start Processing). A janela mostra “Processando vídeo” (Processing video) e a porcentagem concluída. Aguarde a tela de resultado antes de conferir a montagem.",
        "sections": [
          {
            "title": "Notificação e processamento em segundo plano",
            "text": "Durante processos mais longos, aparece “Notificar-me quando concluído” (Notify me when complete). Ative se quiser um aviso e responda à solicitação de permissão do sistema. A janela informa que você pode mudar para segundo plano e que o app tentará continuar; isso não garante que o sistema permitirá a execução durante todo o processo."
          },
          {
            "title": "Cancele o processamento atual",
            "text": "“Cancelar” (Cancel), no final da janela, cancela a tarefa atual; não serve apenas para recolher a janela. Se você ainda quer o resultado, mantenha a tarefa em execução e aguarde."
          }
        ]
      },
      {
        "title": "Confira a montagem e salve em Fotos",
        "text": "Reproduza o resultado e confira a ordem dos trechos. A lista de entrada mostra durações em segundos inteiros. Para conferir o tempo total, use as informações do arquivo de saída.",
        "sections": [
          {
            "title": "O que conferir antes de salvar",
            "text": "Reproduza e confira principalmente o início, o fim e as junções entre trechos. Observe a ordem, a proporção da imagem e as transições do som. No exemplo, verifique perto de 02:26 e 07:37. Assista ou ouça o resultado completo antes de decidir guardá-lo."
          },
          {
            "title": "Salve em Fotos",
            "text": "Toque em “Salvar em Fotos” (Save to Photos) e permita o acesso solicitado. Aguarde “Salvo em fotos” (Saved to Photos) e confira o vídeo no app Fotos."
          },
          {
            "title": "Continue processando, compartilhe ou conclua",
            "text": "“Continue processando” (Keep Processing) abre outras ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Para manter o vídeo na fototeca, toque primeiro em “Salvar em Fotos”. “Concluído” não é o botão de salvar."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo juntou três vídeos, alterou a ordem dos trechos adicionados, reproduziu o resultado marcado como 11:46 e recebeu a confirmação de salvamento. Nessa versão, voltar à montagem por “Edição rápida” redefiniu a lista de trechos adicionados."
  },
  "interleave-videos-iphone": {
    "title": "Como intercalar trechos de vídeos?",
    "description": "No iPhone ou iPad, use “Intercalação” para alternar entre trechos de vídeos diferentes. Adicione os arquivos e escolha a divisão, a ordem inicial e as transições de áudio.",
    "intro": "Use “Intercalação” para alternar entre trechos de vídeos diferentes. Adicione os arquivos e escolha a divisão, a ordem inicial e as transições de áudio.",
    "tips": [
      {
        "title": "O ritmo alterna entre rápido e lento",
        "text": "O modo de total de segmentos não garante trechos de mesma duração para cada origem. No exemplo, A e B têm durações diferentes, e a tela já mostra tempos diferentes para cada segmento."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença em relação a Montar vídeos?",
        "answer": "“Montar vídeos” junta os clipes inteiros em sequência. “Intercalação” alterna entre origens conforme as regras de divisão."
      },
      {
        "question": "Por que posso usar o total de segmentos se há um asterisco?",
        "answer": "Até 5 segmentos no total são gratuitos. Confira o valor selecionado junto com as condições de acesso: o asterisco no controle não significa que todos os valores exigem VIP."
      }
    ],
    "steps": [
      {
        "title": "Abra Intercalação",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Intercalação” (Interleave)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Adicione os vídeos A e B",
        "text": "O vídeo principal aparece como A, o vídeo atual (A Current Video). Toque em “Adicionar vídeo” (Add Video) para incluir B a partir dos downloads, de Fotos ou de Arquivos. Em Fotos, selecione e confirme com a marca no canto superior direito.",
        "sections": [
          {
            "title": "Quantidade adicionada e total de vídeos",
            "text": "A indicação de 1 adicionado e 2 vídeos no total (1 added, 2 videos total) significa que há duas origens. A é o vídeo principal e seu cadeado não permite interação. Os vídeos adicionados têm controles de ordem ou remoção, disponíveis conforme a posição e a quantidade."
          },
          {
            "title": "Arquivos deste exemplo",
            "text": "A tem cerca de 6 segundos; B, cerca de 2 minutos e 26 segundos. Com durações tão diferentes, os segmentos de cada origem também podem variar bastante. Para um ritmo de alternância mais uniforme, corte os vídeos para durações próximas antes de intercalar."
          }
        ]
      },
      {
        "title": "Defina a divisão e as regras de intercalação",
        "text": "O exemplo usa “Total de segmentos” (Total Segments), 5 segmentos (5 segments), “Começar com A” (Start with A) e fade de áudio padrão de 50 ms. O final da tela explica como os trechos serão distribuídos.",
        "sections": [
          {
            "title": "Total de segmentos ou duração fixa*",
            "text": "“Total de segmentos” distribui a saída conforme a quantidade total. Com 5 segmentos no exemplo, A é dividido em 3 trechos de cerca de 2 segundos e B em 2 trechos de cerca de 1 minuto e 13 segundos, alternados na saída. “Duração fixa” (Fixed Duration) divide por tempo fixo e exige VIP."
          },
          {
            "title": "Ordem inicial: escolha por qual vídeo começar",
            "text": "“Começar com A” começa pelo vídeo principal; “Começar com B” (Start with B), pelo vídeo B. Ao mudar a origem inicial, releia a distribuição abaixo e confira se a abertura está como você quer."
          },
          {
            "title": "Fade de áudio: suavize os cortes de som",
            "text": "O fade padrão de cerca de 50 ms suaviza cada corte de áudio. A tela informa que dois vídeos, até 5 segmentos e o fade padrão são gratuitos. Mais origens, duração fixa e fade personalizado exigem VIP."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Toque em “Iniciar processamento” (Start Processing) e confira cada ponto de troca na reprodução. Verifique o vídeo inicial, a ordem dos trechos e as transições de áudio.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo A/B usa 5 segmentos no total, “Começar com A” e fade padrão de 50 ms. O resultado mostra 02:31."
  },
  "segment-grid-video-iphone": {
    "title": "Como criar um vídeo com trechos em grade?",
    "description": "No iPhone ou iPad, divida um vídeo por tempo e reproduza os trechos simultaneamente em uma grade. Escolha as linhas e colunas e ajuste o áudio e as dimensões de saída.",
    "intro": "Divida um vídeo por tempo e reproduza os trechos simultaneamente em uma grade. Escolha as linhas e colunas e ajuste o áudio e as dimensões de saída.",
    "tips": [
      {
        "title": "Os quadros da grade ficaram pouco nítidos",
        "text": "Com dimensões de saída fixas, mais quadros significam menos pixels para cada um. Reduza as linhas ou colunas, ou escolha dimensões finais adequadas, e compare o resultado."
      }
    ],
    "faq": [
      {
        "question": "A ferramenta junta vídeos independentes em uma grade?",
        "answer": "A ferramenta deste tutorial usa trechos de tempos diferentes de um único vídeo. Ela não tem uma lista para adicionar arquivos como “Montar vídeos”."
      },
      {
        "question": "Por que não há som por padrão?",
        "answer": "“Silenciar” é a opção padrão para evitar áudios sobrepostos. Se quiser som, escolha “Áudio do primeiro segmento”."
      }
    ],
    "steps": [
      {
        "title": "Abra Grade de segmento",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Grade de segmento” (Segment Grid)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Defina as linhas, colunas e o som",
        "text": "Após importar um vídeo, confira “Colunas” (Columns), “Linhas” (Rows) e “Som” (Sound). O exemplo usa 2 colunas, 2 linhas e o áudio silenciado por padrão.",
        "sections": [
          {
            "title": "Linhas × colunas define a quantidade de quadros",
            "text": "Uma grade 2×2 tem quatro quadros e divide o vídeo original em quatro trechos iguais. Como os trechos são reproduzidos ao mesmo tempo, o resultado é mais curto que o original. A duração na tela é uma estimativa; confira o arquivo final."
          },
          {
            "title": "Silenciar ou usar o áudio do primeiro segmento",
            "text": "“Silenciar” (Mute) é o padrão para evitar sons sobrepostos. “Áudio do primeiro segmento” (First Segment Audio) usa o som do primeiro trecho. Antes de escolher essa opção, confira se essa faixa combina com toda a grade."
          },
          {
            "title": "Limites gratuitos das opções com asterisco",
            "text": "Você pode usar gratuitamente a grade 2×2 e “Tamanho original do vídeo” (Original Video Size). Três ou mais linhas ou colunas, saída quadrada e a opção de manter o tamanho original de cada bloco exigem VIP."
          }
        ]
      },
      {
        "title": "Escolha as dimensões finais",
        "text": "Toque em “Tamanho de exportação” (Export Size) para abrir a lista. Esse ajuste define as dimensões em pixels do vídeo inteiro, não de cada quadro da grade.",
        "sections": [
          {
            "title": "Tamanho do vídeo ou de cada bloco",
            "text": "No exemplo, “Tamanho original do vídeo” é 640×338, compartilhado pelos quatro quadros. “Manter o tamanho original de cada bloco” (Keep Each Tile Original Size) mostra 1280×676* e procura preservar os pixels originais de cada quadro. Isso pode aumentar bastante o tamanho e o tempo de processamento, além de estar sujeito a limites do sistema."
          },
          {
            "title": "Horizontal, vertical ou quadrado",
            "text": "A lista também oferece 1280×720, 1920×1080, 1080×1920 e 1080×1080*. Escolha conforme o uso e confira se cada quadro está nítido e completo após exportar."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Toque em “Iniciar processamento” (Start Processing) e reproduza a grade. Confira os trechos de cada quadro, as dimensões de saída e o som.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo usa áudio silenciado, grade 2×2 e “Tamanho original do vídeo”. Para a origem de cerca de 6 segundos, a estimativa é de aproximadamente 2 segundos, enquanto o resultado mostra cerca de 1 segundo em um rótulo de segundos inteiros. Nenhum desses valores é uma medição exata por quadro."
  },
  "resize-video-iphone": {
    "title": "Como ajustar a proporção e o layout do vídeo?",
    "description": "No iPhone ou iPad, use “Redimensionar / Canvas” para mudar a proporção da tela. Escolha “Ajuste” para manter a imagem inteira ou “Preenchimento Cortar” para preencher toda a área.",
    "intro": "Use “Redimensionar / Canvas” para mudar a proporção da tela. Escolha “Ajuste” para manter a imagem inteira ou “Preenchimento Cortar” para preencher toda a área.",
    "tips": [
      {
        "title": "Decida se as bordas podem ser cortadas",
        "text": "Se legendas ou elementos importantes estiverem perto das bordas, comece com “Ajuste”. Para preencher a tela, experimente “Preenchimento Cortar” e confira os quadros importantes."
      }
    ],
    "faq": [
      {
        "question": "Mudar a proporção estica a imagem?",
        "answer": "“Ajuste” preserva a proporção da imagem e adiciona fundo quando necessário. Em outros layouts, confira se há recorte ou distorção antes de exportar."
      },
      {
        "question": "Como mudar a resolução de saída?",
        "answer": "Esta ferramenta se concentra na proporção e no layout. Para converter dimensões e formato, confira as opções de resolução em “Transcodificar vídeo”."
      }
    ],
    "steps": [
      {
        "title": "Abra Redimensionar / Canvas",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Redimensionar / Canvas” (Resize / Canvas)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha a proporção da tela",
        "text": "Escolha a proporção em “Proporção de tela” (Canvas Ratio) e confira “Layout” (Layout) e a cor de fundo. O exemplo usa 1:1, “Ajuste” (Fit) e fundo preto.",
        "sections": [
          {
            "title": "Original, 16:9, 9:16, 1:1, 4:3 ou 3:4",
            "text": "“Original” (Original) mantém a proporção de origem. 16:9 costuma ser usado na horizontal; 9:16, na vertical; 1:1 é quadrado. A proporção descreve a relação entre largura e altura, não uma resolução em pixels como 1080p."
          },
          {
            "title": "Cor de fundo*",
            "text": "#000000 representa preto. Com “Ajuste”, se as proporções da imagem e da tela forem diferentes, haverá áreas de fundo. Mudar a cor de fundo exige VIP."
          }
        ]
      },
      {
        "title": "Escolha ajuste, preenchimento com corte ou outro layout",
        "text": "Toque em “Layout” para abrir a lista. Escolha uma opção, volte à configuração, confira o resumo e toque em “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "Ajuste: mantenha a imagem inteira",
            "text": "A imagem inteira é encaixada proporcionalmente na tela, podendo deixar áreas de fundo. Use quando não puder cortar pessoas, legendas ou conteúdo nas bordas. O exemplo foi exportado com “Ajuste”."
          },
          {
            "title": "Preenchimento Cortar: ocupe toda a tela",
            "text": "A imagem preenche a tela proporcionalmente, podendo perder partes das bordas quando as proporções diferem. Confira a prévia, principalmente legendas, o topo da cabeça das pessoas e as laterais."
          },
          {
            "title": "Layouts com desfoque e vários quadros*",
            "text": "As opções “Desfoque 1:1*” (Blur 1:1*), “Duplo 1:1*” (Double 1:1*), “Duplo simétrico 1:1*” (Symmetric Double 1:1*), “Triplo 1:1*” (Triple 1:1*) e “Desfoque triplo 1:1*” (Triple Blur 1:1*) oferecem fundo desfocado ou vários quadros e exigem VIP."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Reproduza o resultado e confira a proporção, as bordas e o fundo. Com “Ajuste”, confirme que a imagem inteira foi preservada antes de salvar.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo foi exportado em 1:1 com “Ajuste” e fundo preto. As saídas dos layouts pagos com desfoque ou vários quadros não foram verificadas."
  },
  "rotate-video-iphone": {
    "title": "Como girar um vídeo?",
    "description": "No iPhone ou iPad, use “Girar vídeo” para corrigir uma imagem de lado ou de cabeça para baixo. Escolha o ângulo, confira a prévia e salve o resultado.",
    "intro": "Use “Girar vídeo” para corrigir uma imagem de lado ou de cabeça para baixo. Escolha o ângulo, confira a prévia e salve o resultado.",
    "tips": [
      {
        "title": "Girar e espelhar são ações diferentes",
        "text": "Girar muda a orientação da imagem. Espelhar troca a esquerda pela direita ou o topo pela base. Se o texto de uma selfie estiver invertido, confira “Espelhar vídeo”."
      }
    ],
    "faq": [
      {
        "question": "Qual opção corrige um vídeo de cabeça para baixo?",
        "answer": "Escolha 180 e confira na prévia se a orientação está correta."
      },
      {
        "question": "Girar muda a duração?",
        "answer": "A operação ajusta a orientação. Confira a duração do arquivo após exportar."
      }
    ],
    "steps": [
      {
        "title": "Abra Girar vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Girar vídeo” (Rotate Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha a rotação",
        "text": "Em “Rotação” (Rotation), escolha o ângulo e confira a orientação na prévia acima. O exemplo usa “Girar para a direita 90” (Rotate Right 90).",
        "sections": [
          {
            "title": "90° à direita, 180° ou 90° à esquerda",
            "text": "“Girar para a direita 90” gira um quarto de volta no sentido horário; 180 gira meia volta; “Girar para a esquerda 90” (Rotate Left 90) gira um quarto de volta no sentido anti-horário. Uma rotação de 90° troca a orientação horizontal pela vertical, ou vice-versa."
          },
          {
            "title": "Bordas pretas na prévia",
            "text": "Uma imagem vertical pode aparecer com bordas pretas em uma área de prévia horizontal. Isso não significa necessariamente que o arquivo exportado contém essas bordas. Confira as dimensões reais e a reprodução após salvar."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Toque em “Iniciar processamento” (Start Processing) e confira a orientação do vídeo exportado. Verifique o texto e o assunto principal antes de salvar.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo gira um trecho de cerca de 6 segundos em 90 graus à direita. A mudança aparece na prévia e na exportação."
  },
  "mirror-video-iphone": {
    "title": "Como espelhar um vídeo?",
    "description": "No iPhone ou iPad, use “Espelhar vídeo” para inverter a imagem na horizontal ou vertical. Confira o efeito antes de exportar, principalmente textos e logotipos.",
    "intro": "Use “Espelhar vídeo” para inverter a imagem na horizontal ou vertical. Confira o efeito antes de exportar, principalmente textos e logotipos.",
    "tips": [
      {
        "title": "As legendas também podem ficar invertidas",
        "text": "O espelhamento afeta toda a imagem. Em vídeos com texto, confira se a inversão das letras é aceitável."
      }
    ],
    "faq": [
      {
        "question": "Qual opção corrige a inversão de esquerda e direita?",
        "answer": "Experimente “H Flip” e confira o texto ou a posição dos elementos na imagem."
      },
      {
        "question": "Espelhar faz o movimento rodar ao contrário?",
        "answer": "Não. Para inverter a ordem temporal do movimento, use “Vídeo reverso”."
      }
    ],
    "steps": [
      {
        "title": "Abra Espelhar vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Espelhar vídeo” (Mirror Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Confira a prévia do espelhamento",
        "text": "Após importar, “Modo de espelho” (Mirror Mode) mostra o modo atual. O exemplo usa “H Flip” (H Flip), a inversão horizontal. Observe os detalhes de esquerda e direita antes de abrir a lista de modos.",
        "sections": []
      },
      {
        "title": "Distinga inversão de simetria",
        "text": "Toque em “Modo de espelho” para ver as opções. Escolha, volte e toque em “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "H Flip, V Flip ou 180",
            "text": "“H Flip” inverte horizontalmente, trocando esquerda e direita. “V Flip” (V Flip) inverte verticalmente, trocando topo e base. “180” (180) gira a imagem meia volta. Use textos ou sinais bem visíveis para conferir o efeito escolhido."
          },
          {
            "title": "Simetria lateral*, vertical* ou central*",
            "text": "“Side Sym” cria simetria lateral; “Top Sym”, vertical; “Center Sym”, central. Esses modos VIP criam efeitos simétricos, diferentes de inverter a imagem inteira. Confira a prévia ao escolher."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Reproduza o resultado e confira a posição dos elementos. Textos, logotipos e legendas embutidas também são invertidos junto com a imagem.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo exportou com “H Flip”. Apenas os acessos aos efeitos pagos de simetria foram conferidos; suas saídas não foram verificadas."
  },
  "reverse-video-iphone": {
    "title": "Como reproduzir um vídeo ao contrário?",
    "description": "No iPhone ou iPad, use “Vídeo reverso” para reproduzir do fim ao início. Escolha silenciar, manter o áudio original ou inverter o áudio e confira o resultado.",
    "intro": "Use “Vídeo reverso” para reproduzir do fim ao início. Escolha silenciar, manter o áudio original ou inverter o áudio e confira o resultado.",
    "tips": [
      {
        "title": "Corte um trecho curto antes de inverter",
        "text": "Use “Cortar vídeo” para manter só o movimento desejado antes de inverter. Assim fica mais fácil avaliar o ritmo e há menos conteúdo para processar."
      }
    ],
    "faq": [
      {
        "question": "Reproduzir ao contrário é o mesmo que girar 180 graus?",
        "answer": "Não. A reprodução reversa altera a ordem temporal. “Girar vídeo” muda a orientação da imagem."
      },
      {
        "question": "Por que o resultado reverso está sem som?",
        "answer": "O exemplo usa a opção padrão “Silenciar”. Para manter som, escolha o modo adequado e confira o arquivo exportado."
      }
    ],
    "steps": [
      {
        "title": "Abra Vídeo reverso",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Vídeo reverso” (Reverse Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha o áudio da reprodução reversa",
        "text": "“Som” (Sound) oferece “Silenciar” (Mute), “Manter o áudio” (Keep Audio) e “Áudio reverso” (Reverse Audio). O exemplo usa “Silenciar” e depois “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "Silenciar: remova o som",
            "text": "Use quando quiser apenas o movimento reverso. A opção também evita falas ou sons ambientes estranhos ao serem invertidos."
          },
          {
            "title": "Manter o áudio ou inverter o áudio",
            "text": "“Manter o áudio” preserva a ordem original do som; “Áudio reverso” inverte o som. Escolha conforme a intenção e ouça a fala ou a música exportada."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Reproduza o resultado e confira se o movimento vai do fim ao início. Verifique a abertura, o final e o modo de áudio antes de salvar.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. Apenas “Silenciar” foi testado, com o resultado começando pelo final do original. “Manter o áudio” e “Áudio reverso” não foram verificados."
  },
  "change-video-speed-iphone": {
    "title": "Como acelerar ou desacelerar um vídeo?",
    "description": "No iPhone ou iPad, use “Alterar velocidade” para acelerar ou desacelerar um vídeo. Escolha o fator de velocidade e confira a duração e o som antes de salvar.",
    "intro": "Use “Alterar velocidade” para acelerar ou desacelerar um vídeo. Escolha o fator de velocidade e confira a duração e o som antes de salvar.",
    "tips": [
      {
        "title": "Mais lento nem sempre significa mais fluido",
        "text": "Desacelerar pode evidenciar baixa taxa de quadros ou borrões de movimento no original. Compare um trecho curto: o fator de velocidade sozinho não garante o efeito desejado."
      }
    ],
    "faq": [
      {
        "question": "Quanto a duração muda em 2x?",
        "answer": "Normalmente fica em cerca de metade da duração original. Confira o tempo do arquivo de saída."
      },
      {
        "question": "Por que velocidades altas ficam sem som?",
        "answer": "A tela informa que o áudio é removido automaticamente acima de 4x."
      }
    ],
    "steps": [
      {
        "title": "Abra Alterar velocidade",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Alterar velocidade” (Change Speed)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Ajuste a velocidade e o tom",
        "text": "Arraste o controle “Velocidade” (Speed). Confira o fator à direita e “Duração estimada do processamento” (Estimated processed duration) abaixo. Esse valor estima a duração do vídeo resultante. Depois, toque em “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "Fator de velocidade e duração",
            "text": "1x mantém a velocidade original; acima de 1 acelera; abaixo de 1 desacelera. A duração de saída é aproximadamente a duração original dividida pelo fator: por exemplo, 6 segundos ÷ 1,5 ≈ 4 segundos. Confira o resultado real."
          },
          {
            "title": "Preservar o tom ao mudar a velocidade",
            "text": "“Preservar pitch” é a opção VIP para manter o tom original ao alterar a velocidade. Sem ela, o tom do áudio pode mudar. Ouça com atenção vídeos com fala ou canto."
          },
          {
            "title": "Faixa de velocidade e áudio em velocidades altas",
            "text": "A tela informa que 0,5x–2x é gratuito. A faixa ampliada de 0,1x–32x e a preservação do tom exigem VIP. Acima de 4x, o áudio é removido automaticamente."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Reproduza o resultado e confira o ritmo, a duração e o som. Se estiver rápido ou lento demais, ajuste o fator e exporte novamente.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo usa 1,50x, sem “Preservar pitch”, e transforma cerca de 6 segundos em aproximadamente 4 segundos."
  },
  "edit-video-audio-iphone": {
    "title": "Como silenciar um vídeo ou ajustar o volume?",
    "description": "No iPhone ou iPad, use “Edição de áudio” para silenciar, ajustar o volume ou substituir o áudio de um vídeo. Escolha o modo e os parâmetros e ouça o resultado exportado.",
    "intro": "Use “Edição de áudio” para silenciar, ajustar o volume ou substituir o áudio de um vídeo. Escolha o modo e os parâmetros e ouça o resultado exportado.",
    "tips": [
      {
        "title": "O áudio ficou distorcido ou alto demais",
        "text": "Confira primeiro a qualidade do áudio original e ajuste com moderação. Aumentar o volume também pode amplificar ruídos. Guarde o original para comparar."
      }
    ],
    "faq": [
      {
        "question": "Esta ferramenta gera um arquivo de áudio?",
        "answer": "Ela edita o som do vídeo e mantém a saída como vídeo. Para um arquivo de áudio separado, use “Extrair áudio”."
      },
      {
        "question": "Como conferir a porcentagem do volume?",
        "answer": "Confira a porcentagem ao lado do controle e o resumo no histórico de exportação. Depois, reproduza e ouça o resultado."
      }
    ],
    "steps": [
      {
        "title": "Abra Edição de áudio",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Edição de áudio” (Audio Editing)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha o modo de áudio",
        "text": "Em “Modo de processamento” (Processing Mode), escolha “Silenciar” (Mute), “Volume” (Volume) ou “Substituir*” (Replace*). Ao selecionar “Volume”, aparecem o controle de volume e a opção de fade.",
        "sections": [
          {
            "title": "Silenciar: retire o som",
            "text": "Escolha “Silenciar” quando quiser apenas a imagem. Reproduza o arquivo exportado para confirmar que o áudio foi removido, em vez de apenas silenciar temporariamente o player."
          },
          {
            "title": "Volume: ajuste a intensidade do som",
            "text": "Arraste o controle e confira a porcentagem indicada. 100% corresponde ao volume original. Aumentar também pode amplificar ruídos; ouça o resultado antes de salvar."
          },
          {
            "title": "Substituir* e Fade In/Out*",
            "text": "“Substituir” troca a origem do áudio; “Fade In/Out” (Fade In/Out) adiciona entrada e saída graduais ao som. As duas opções exigem VIP. Para escolher um vídeo e um áudio separadamente, use “Mesclar áudio e vídeo” (Merge Audio and Video)."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Ouça o vídeo exportado e compare com o original. Para mudar o volume, confirme que a porcentagem ao lado do controle mudou antes de exportar. 100% mantém a proporção de volume original.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo exportou com “Volume” em 100%, sem demonstrar o efeito de uma mudança de volume. “Substituir” e “Fade In/Out” não foram executados."
  },
  "add-watermark-video-iphone": {
    "title": "Como adicionar uma marca d’água de texto ao vídeo?",
    "description": "Adicione uma marca d’água de texto com o ClipDock no iPhone ou iPad. Defina o texto, o tamanho e a posição, confira e salve o vídeo.",
    "intro": "Use “Adicionar marca d'água” para inserir texto e definir seu tamanho e posição. As imagens de configuração e resultado usam textos e vídeos diferentes; veja as notas do exemplo.",
    "tips": [
      {
        "title": "Confira antes de salvar",
        "text": "A marca d’água deve ser legível sem cobrir conteúdo importante. Guarde o vídeo original para poder alterar o texto, a posição ou o estilo e exportar novamente."
      }
    ],
    "faq": [
      {
        "question": "Posso usar uma marca d’água de imagem gratuitamente?",
        "answer": "A opção “Imagem*” tem marcação VIP nesta tela. O exemplo demonstra uma marca d’água de texto."
      },
      {
        "question": "Por que o texto no resultado difere da configuração?",
        "answer": "A configuração usa ClipDock Demo. O resultado em um iPhone físico usa Made by ClipDock e outro vídeo. As duas imagens ilustram o mesmo fluxo de marca d’água de texto."
      }
    ],
    "steps": [
      {
        "title": "Abra Adicionar marca d'água",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Adicionar marca d'água” (Add Watermark)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Defina o texto e o tamanho da marca",
        "text": "Em “Tipo de marca d'água” (Watermark Type), escolha “Texto” (Text). Toque em “Conteúdo de texto” (Text Content), digite e confirme. O exemplo usa ClipDock Demo. A prévia acima mostra a posição e uma aproximação do efeito.",
        "sections": [
          {
            "title": "Texto ou imagem*",
            "text": "“Texto” cria uma marca de texto; “Imagem” (Image) é a opção VIP para usar uma imagem como marca d’água. O exemplo configura apenas texto."
          },
          {
            "title": "Tamanho do texto",
            "text": "A proporção de tamanho aparece à direita do controle; no exemplo, é 100%. Confira a prévia para evitar cobrir o assunto principal, as legendas ou outras partes importantes."
          }
        ]
      },
      {
        "title": "Ajuste a posição e o estilo",
        "text": "Role até “Posição da marca d'água” (Watermark Position), cor, fundo, contorno e “Opacidade” (Opacity). Opções com asterisco exigem VIP. Exibir um valor padrão não significa que alterá-lo seja gratuito.",
        "sections": [
          {
            "title": "Posição da marca d’água",
            "text": "As opções incluem os quatro cantos e o centro; o exemplo usa o canto inferior direito. Prefira um local que não cubra o assunto principal ou as legendas. Confira separadamente vídeos horizontais e verticais."
          },
          {
            "title": "Cor, fundo e contorno",
            "text": "“Cor do texto” (Text Color) define a cor das letras; “Mostrar fundo” (Show Background) controla o fundo do texto; “Traço do texto” (Text Stroke) e “Cor do traço” (Stroke Color) controlam o contorno. Essas opções têm marcação VIP. Confira o contraste entre texto e fundo, principalmente em vídeos que alternam entre cenas claras e escuras."
          },
          {
            "title": "Ajuste a intensidade da marca",
            "text": "O exemplo mostra 75%. Reduzir o valor de “Opacidade” deixa a marca mais transparente, mas também pode dificultar a leitura. Esse parâmetro exige VIP."
          }
        ]
      },
      {
        "title": "Confira o vídeo com a marca e salve",
        "text": "Toque em “Iniciar processamento” (Start Processing) e confira a marca no vídeo exportado. Verifique o texto, a posição e a legibilidade em cenas diferentes.",
        "sections": [
          {
            "title": "Confira o efeito da marca d’água",
            "text": "Reproduza o vídeo e confira se a marca está legível, bem posicionada e sem cobrir o assunto ou as legendas. A imagem de resultado usa outro vídeo e outro texto, mas segue o mesmo fluxo da configuração anterior."
          },
          {
            "title": "Salve em Fotos ou compartilhe",
            "text": "Toque em “Salvar em Fotos” (Save to Photos) e confira no app Fotos após o aviso de sucesso. “Compartilhar arquivo” (Share File) abre o compartilhamento."
          },
          {
            "title": "Continue processando ou conclua",
            "text": "“Continue processando” (Keep Processing) leva o resultado a outra ferramenta. “Concluído” (Done) fecha a tela; não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As imagens de entrada e configuração vêm do simulador do iPhone 17 Pro Max; a de resultado, de um iPhone físico. A configuração usa ClipDock Demo; o resultado usa outro vídeo e Made by ClipDock. Apenas a marca d’água de texto foi configurada. Alterações de estilos pagos não foram verificadas."
  },
  "capture-video-frames-iphone": {
    "title": "Como capturar um quadro de vídeo?",
    "description": "No iPhone ou iPad, use “Captura de vídeo” para salvar um quadro como imagem. Escolha um momento nítido, confira a prévia e salve ou compartilhe.",
    "intro": "Use “Captura de vídeo” para salvar um quadro como imagem. Escolha um momento nítido, confira a prévia e salve ou compartilhe.",
    "tips": [
      {
        "title": "A imagem ficou borrada",
        "text": "Escolha um momento com menos movimento e confira a nitidez do original. Capturar um quadro não corrige uma imagem que já era borrada."
      }
    ],
    "faq": [
      {
        "question": "Posso capturar vários quadros de uma vez?",
        "answer": "“Lote*” captura vários quadros e exige VIP. Para salvar apenas um, use “Único”."
      },
      {
        "question": "Qual é a diferença em relação a uma captura da tela do celular?",
        "answer": "“Captura de vídeo” exporta um quadro do vídeo, com dimensões que dependem da origem. Uma captura da tela do celular também pode incluir controles do player e a interface do sistema."
      }
    ],
    "steps": [
      {
        "title": "Abra Captura de vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Captura de vídeo” (Video Capture)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha o modo e o instante da captura",
        "text": "Após importar, escolha “Modo de captura” (Capture Mode) e defina o instante em “Tempo de captura” (Capture Time). O exemplo usa “Único” (Single), 00:00, sem marcação de tempo.",
        "sections": [
          {
            "title": "Único: exporte um quadro",
            "text": "Arraste o controle de tempo e observe a prévia para escolher um quadro nítido. Toque em “Exportar imagem” (Export Image). A saída contém apenas a imagem do vídeo, sem botões do app ou a moldura do celular."
          },
          {
            "title": "Lote*, Inteligente* ou Folha de contato*",
            "text": "“Lote” (Batch) captura vários quadros; “Inteligente” (Smart) seleciona quadros automaticamente; “Folha de contato” (Sheet) abre o modo de prévia em uma imagem maior. Os três exigem VIP. Abra o modo desejado para conferir suas configurações."
          },
          {
            "title": "Adicione uma marcação de tempo",
            "text": "A opção adiciona uma indicação do tempo. Deixe desativada se quiser apenas exibir a imagem ou ative para identificar o instante de origem. Confira a posição e a legibilidade na imagem exportada."
          }
        ]
      },
      {
        "title": "Confira a imagem e salve",
        "text": "Toque em “Exportar imagem” para abrir “Visualização da captura de tela” (Screenshot Preview). Confira a imagem, as dimensões e o tamanho do arquivo. Use “Salvar em Fotos” (Save to Photos) ou “Compartilhar arquivo” (Share File). “Concluído” (Done) fecha a prévia.",
        "sections": [
          {
            "title": "As dimensões vêm do vídeo",
            "text": "O vídeo do exemplo tem 640×338, e a imagem exportada mostra as mesmas dimensões. Uma tela de celular maior não acrescenta detalhes à captura."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O modo “Único” exportou um JPEG de 640×338. As configurações e saídas de “Lote”, “Inteligente” e “Folha de contato” não foram verificadas."
  },
  "extract-audio-iphone": {
    "title": "Como extrair o áudio de um vídeo?",
    "description": "No iPhone ou iPad, use “Extrair áudio” para guardar o som separadamente. Escolha um vídeo em Fotos ou Arquivos e salve ou compartilhe o áudio extraído.",
    "intro": "Use “Extrair áudio” para guardar o som separadamente. Escolha um vídeo em Fotos ou Arquivos e salve ou compartilhe o áudio extraído.",
    "tips": [
      {
        "title": "O que fazer se o áudio extraído estiver sem som?",
        "text": "Reproduza o vídeo original e confira se o player não está silenciado. Se o arquivo não tiver uma faixa de áudio, a ferramenta não pode recuperar um som inexistente. A extração também não melhora automaticamente a qualidade do áudio."
      },
      {
        "title": "Você pode continuar com a lista de downloads vazia",
        "text": "“Nenhum vídeo baixado disponível para processamento” apenas indica que não há vídeos baixados no app para usar. Este tutorial usa “Escolher entre fotos”, acima, para importar diretamente da fototeca."
      }
    ],
    "faq": [
      {
        "question": "Posso escolher MP3 ou outros formatos?",
        "answer": "Este fluxo gera M4A diretamente e não tem menu de formatos. O tutorial não inclui conversão para MP3."
      },
      {
        "question": "Por que o resultado não aparece em Fotos?",
        "answer": "O resultado é um arquivo de áudio, não um vídeo ou uma foto. Abra “Compartilhar arquivo” e use a opção de salvar em Arquivos ou outra ação para gerenciar o áudio."
      },
      {
        "question": "Posso extrair o som diretamente de um link de vídeo?",
        "answer": "Este tutorial processa um vídeo já salvo em Fotos. Se você tem apenas o link, siga primeiro o tutorial da plataforma para salvar o vídeo e depois extraia o áudio."
      }
    ],
    "steps": [
      {
        "title": "Abra Extrair áudio",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Extrair áudio” (Extract Audio)."
      },
      {
        "title": "Escolha um vídeo em Fotos",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) e selecione o vídeo no seletor do sistema. Você pode importar mesmo que a tela informe não haver vídeos baixados. Se o arquivo estiver no app Arquivos, use “Escolher entre os arquivos” (Choose from Files)."
      },
      {
        "title": "Aguarde a extração do áudio",
        "text": "A extração começa assim que você escolhe o vídeo, sem outro botão para iniciar. Quando aparecerem “Processamento concluído” (Processing Complete) e o arquivo .m4a, toque em “Compartilhar arquivo” (Share File) para salvar ou compartilhar. “Concluído” (Done) fecha o aviso."
      },
      {
        "title": "Abra as opções de salvar e compartilhar",
        "text": "No menu de “Compartilhar arquivo”, escolha salvar em Arquivos para guardar uma cópia ou selecione outro app para compartilhar. Depois de salvar, abra o áudio e confira o som e a duração."
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. Selecionar o vídeo gerou M4A diretamente, sem menu de formatos. As imagens chegam até o compartilhamento, sem confirmar o salvamento em Arquivos. Os botões do sistema podem seguir o idioma do dispositivo."
  },
  "change-video-md5-iphone": {
    "title": "Como usar a ferramenta de alteração de MD5?",
    "description": "No iPhone ou iPad, use “Alterar MD5” para gerar uma cópia processada do vídeo. Para confirmar a mudança do MD5, compare o original e a saída com uma ferramenta de cálculo de hash.",
    "intro": "Use “Alterar MD5” para gerar uma cópia processada do vídeo. Para confirmar a mudança do MD5, compare o original e a saída com uma ferramenta de cálculo de hash.",
    "tips": [
      {
        "title": "Confirme nos arquivos reais",
        "text": "Uma mudança no nome do arquivo não comprova que o MD5 mudou. Se o uso depende desse valor, calcule e compare os hashes da entrada e da saída. O aviso de conclusão não substitui essa verificação."
      }
    ],
    "faq": [
      {
        "question": "A ferramenta melhora a qualidade ou reduz o tamanho?",
        "answer": "Este tutorial não apresenta a alteração de MD5 como melhoria de imagem ou compressão. Para reduzir o tamanho, use “Transcodificar vídeo”."
      },
      {
        "question": "Mudar o hash altera os direitos de uso do vídeo?",
        "answer": "Não. Mudar o hash do arquivo não altera os direitos de uso do conteúdo."
      }
    ],
    "steps": [
      {
        "title": "Abra Alterar MD5",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Alterar MD5” (Change MD5)."
      },
      {
        "title": "Escolha o vídeo e aguarde",
        "text": "Escolha um vídeo em Fotos ou outra origem disponível. O processamento começa em seguida, sem uma tela separada de parâmetros.",
        "sections": [
          {
            "title": "Não há campo para um hash de destino",
            "text": "A ferramenta não oferece um campo para inserir o MD5 desejado. Você não pode definir um hash arbitrário."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Confira o novo arquivo e salve ou compartilhe. Se precisar confirmar que o MD5 mudou, calcule e compare os hashes do original e da saída. A mudança do nome não substitui a verificação.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo gerou _md5.mp4 e abriu a tela de resultado. Os valores MD5 da entrada e da saída não foram comparados."
  },
  "merge-audio-video-iphone": {
    "title": "Como mesclar áudio e vídeo?",
    "description": "No iPhone ou iPad, use “Mesclar áudio e vídeo” para combinar a imagem de um vídeo com o som de outro arquivo. Escolha o vídeo e a origem do áudio e confira o som e a sincronização após exportar.",
    "intro": "Use “Mesclar áudio e vídeo” para combinar a imagem de um vídeo com o som de outro arquivo. Escolha o vídeo e a origem do áudio e confira o som e a sincronização após exportar.",
    "tips": [
      {
        "title": "O som está fora de sincronia ou o final ficou inadequado",
        "text": "Confira as durações e os pontos de início dos arquivos de entrada. Esta tela não oferece ajuste de atraso nem repetição. Se necessário, prepare os arquivos antes e faça a mesclagem novamente."
      }
    ],
    "faq": [
      {
        "question": "Preciso extrair o áudio antes?",
        "answer": "Não. Escolha “Extrair áudio do vídeo Fotos” para obter o som diretamente de outro vídeo da fototeca."
      },
      {
        "question": "Posso ajustar a proporção de duas faixas de áudio?",
        "answer": "Esta tela não tem controles de mixagem ou várias faixas. Se precisar mixar, prepare o áudio separadamente antes."
      }
    ],
    "steps": [
      {
        "title": "Abra Mesclar áudio e vídeo",
        "text": "Toque em “Processamento” (Process) na barra inferior e abra “Mesclar áudio e vídeo” (Merge Audio and Video)."
      },
      {
        "title": "Escolha o vídeo para processar",
        "text": "Em “Selecionar vídeo” (Select Video), toque em “Escolher entre fotos” (Choose from Photos) ou “Escolher entre os arquivos” (Choose from Files) para importar. Você pode importar mesmo que a lista de downloads esteja vazia."
      },
      {
        "title": "Escolha primeiro o vídeo que fornecerá a imagem",
        "text": "Importe o vídeo cuja imagem você quer manter. O cartão acima mostra a prévia, as dimensões e a duração. “Fonte de áudio” (Audio Source) começa como “Não selecionado” (Not Selected), indicando que falta escolher o som.",
        "sections": [
          {
            "title": "Confira separadamente a origem da imagem e do som",
            "text": "Defina qual vídeo fornecerá a imagem e depois escolha o áudio. A prévia do vídeo acima não significa que a fonte de áudio já foi configurada."
          }
        ]
      },
      {
        "title": "Escolha a fonte de áudio",
        "text": "Toque em “Fonte de áudio”. A janela oferece “Escolher entre os arquivos” e “Extrair áudio do vídeo Fotos” (Extract audio from Photos video).",
        "sections": [
          {
            "title": "Escolha em Arquivos",
            "text": "Essa opção permite selecionar um arquivo de áudio. Prepare o áudio desejado e encontre-o pelo seletor de arquivos do sistema."
          },
          {
            "title": "Extraia o áudio de um vídeo em Fotos",
            "text": "Essa opção obtém o som de um vídeo da fototeca. O exemplo abre essa opção e escolhe outro vídeo, sem exportar antes um arquivo de áudio separado."
          }
        ]
      },
      {
        "title": "Confira a origem escolhida e mescle",
        "text": "Ao voltar, “Fonte de áudio” mostra o nome do arquivo selecionado, confirmando a escolha. Confira e toque em “Iniciar processamento” (Start Processing).",
        "sections": [
          {
            "title": "Esta tela não tem outros parâmetros de mixagem",
            "text": "“Fonte de áudio” escolhe a entrada de som. Não há controles separados de proporção de mixagem, atraso, repetição ou corte de áudio. Faça esses ajustes antes, se necessário, e depois mescle e ouça o resultado."
          }
        ]
      },
      {
        "title": "Confira o resultado e salve ou continue editando",
        "text": "Antes de salvar, reproduza o resultado e confira a origem do áudio, a sincronização inicial, o volume e o final. Preste atenção especial quando os arquivos tiverem durações diferentes.",
        "sections": [
          {
            "title": "Confira e salve",
            "text": "Na tela de resultado, reproduza o vídeo e confira imagem, duração e som. Depois, toque em “Salvar em Fotos” (Save to Photos). Na primeira vez, pode ser necessário permitir que o app adicione fotos e vídeos. Após o aviso de sucesso, confira no app Fotos."
          },
          {
            "title": "Para que servem os outros botões",
            "text": "“Continue processando” (Keep Processing) leva o resultado à seleção de ferramentas; “Compartilhar arquivo” (Share File) abre o compartilhamento; “Concluído” (Done) fecha o resultado. Tocar em “Concluído” não salva em Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas usam a interface em inglês no simulador do iPhone 17 Pro Max com iOS 26.0; o texto identifica os botões em português. Os parâmetros e limites correspondem a essa versão. O exemplo usa o áudio de outro vídeo de Fotos e gera um vídeo de cerca de 6 segundos. A faixa mesclada ainda não foi ouvida trecho por trecho."
  }
};
