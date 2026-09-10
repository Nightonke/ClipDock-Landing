import type { TutorialCopy } from "../../types";
export const copy: Record<string, TutorialCopy> = {
  "batch-download-bilibili-collection-iphone": {
    "title": "Como baixar uma coleção do Bilibili em lote?",
    "description": "No iPhone ou iPad, copie o link de uma coleção do Bilibili e use o ClipDock para carregar a lista, escolher a qualidade e criar downloads em lote. Inclui um exemplo de link b23.tv.",
    "intro": "Para baixar uma coleção do Bilibili em lote, use o link de compartilhamento da coleção. O fluxo ajuda a guardar suas próprias séries de vídeos ou conteúdo autorizado sem copiar o link de cada episódio.",
    "tips": [
      {
        "title": "A quantidade retornada difere do total de episódios da coleção",
        "text": "Confira se o link é da coleção, quantas páginas foram carregadas, os limites da conta e a disponibilidade dos recursos. “Selecionar carregados” seleciona apenas os itens já carregados; a lista retornada pode não conter todos os episódios. Evite reenviar a coleção inteira sem conferir o resultado."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre o link de uma coleção e o de um perfil do Bilibili?",
        "answer": "O link de coleção aponta para um conjunto de vídeos; o de perfil, para a página de um criador. Copie o link no compartilhamento da coleção desejada. Um link curto b23.tv não revela sozinho o tipo de origem: após carregar, confira o nome da coleção e a lista retornada."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Copie o link da coleção do Bilibili",
        "text": "Abra a coleção desejada no Bilibili, toque no botão de compartilhamento da coleção e escolha copiar link. A coleção do exemplo se chama “米娜舞蹈-大摆锤” e a página mostra 62 episódios. Confira se está compartilhando a coleção, não apenas o vídeo em reprodução."
      },
      {
        "title": "Cole o link da coleção",
        "text": "Abra “Extração” (Extract) no ClipDock, mude para “Lote” (Batch) e toque em “Colar” (Paste). O exemplo usa o link curto b23.tv abaixo. Use o endereço real copiado no compartilhamento da coleção desejada.",
        "exampleUrl": "https://b23.tv/drSfmMh"
      },
      {
        "title": "Carregue os vídeos da coleção",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira se o nome da origem corresponde à coleção desejada e marque os vídeos. Você pode usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade selecionada e toque em “Adicionar à fila de downloads” (Add to queue). No exemplo, 62 itens foram carregados e selecionados, e o botão mostra “Adicionar à fila de downloads (62)”."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-tiktok-hashtag-iphone": {
    "title": "Como baixar vídeos de uma hashtag do TikTok em lote?",
    "description": "No iPhone ou iPad, use um link de hashtag do TikTok no ClipDock para carregar vídeos, escolher a qualidade e criar downloads em lote. Inclui o formato de link da hashtag beauty.",
    "intro": "Use o link da página de uma hashtag do TikTok para baixar em lote vídeos seus ou que você tem autorização para salvar. O exemplo usa beauty e evita copiar o link de cada vídeo.",
    "tips": [
      {
        "title": "O resultado difere do conteúdo da página da hashtag",
        "text": "Confira se o link contém /tag/, o nome da hashtag, as páginas carregadas e os limites da conta. A lista pode não incluir todos os vídeos da hashtag. “Selecionar carregados” abrange apenas os recursos já carregados; evite reenviar toda a lista sem verificar os resultados."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre o link de uma hashtag e o de um perfil do TikTok?",
        "answer": "Uma hashtag reúne conteúdo com a mesma marcação e pode incluir vídeos de vários criadores; um perfil pertence a um criador. Para baixar uma hashtag em lote, use o endereço completo, como https://www.tiktok.com/tag/beauty, e não apenas #beauty."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Cole o link da hashtag do TikTok",
        "text": "O formato é https://www.tiktok.com/tag/nome-da-hashtag; abaixo, usamos beauty. Abra “Extração” (Extract) → “Lote” (Batch) no ClipDock e toque em “Colar” (Paste) para inserir o link completo. Não inclua # no nome da hashtag dentro da URL.",
        "exampleUrl": "https://www.tiktok.com/tag/beauty"
      },
      {
        "title": "Carregue os vídeos da hashtag",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira se a origem é beauty e marque os vídeos desejados, ou use “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue). No exemplo, 19 itens foram carregados e selecionados, e o botão mostra “Adicionar à fila de downloads (19)”."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-instagram-hashtag-iphone": {
    "title": "Como baixar imagens de uma hashtag do Instagram em lote?",
    "description": "No iPhone ou iPad, use um link de hashtag do Instagram no ClipDock para carregar imagens, filtrar recursos e criar downloads em lote. Inclui o formato de link da hashtag model.",
    "intro": "Use o link da página de uma hashtag do Instagram para guardar em lote imagens suas ou autorizadas com a mesma marcação. O exemplo usa model e evita copiar o link de cada publicação.",
    "tips": [
      {
        "title": "O resultado difere do conteúdo da página da hashtag",
        "text": "Confira se o link contém /explore/tags/, o nome da hashtag, as páginas carregadas e os limites da conta. A lista pode não incluir todas as publicações da hashtag. “Selecionar carregados” abrange apenas os recursos já carregados; evite reenviar toda a lista sem verificar os resultados."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre o link de uma hashtag e o de um perfil do Instagram?",
        "answer": "Uma hashtag reúne publicações de vários criadores com a mesma marcação; um perfil pertence a um criador. Para baixar uma hashtag em lote, use o endereço completo, como https://www.instagram.com/explore/tags/model, e não apenas #model."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Cole o link da hashtag do Instagram",
        "text": "O formato é https://www.instagram.com/explore/tags/nome-da-hashtag; abaixo, usamos model. Abra “Extração” (Extract) → “Lote” (Batch) no ClipDock e toque em “Colar” (Paste) para inserir o link completo. Não inclua # no nome da hashtag dentro da URL.",
        "exampleUrl": "https://www.instagram.com/explore/tags/model"
      },
      {
        "title": "Carregue os recursos da hashtag",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione as imagens e adicione à fila",
        "text": "Confira se a origem é model e marque as imagens desejadas. Você pode filtrar por “Imagem” (Image) ou usar “Selecionar carregados” (Select loaded). Após filtrar, confira novamente os itens selecionados e a quantidade antes de tocar em “Adicionar à fila de downloads” (Add to queue). No exemplo, 21 itens marcados como “Imagem” foram carregados e selecionados, e o botão mostra “Adicionar à fila de downloads (21)”."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a seleção de itens do tipo “Imagem” e a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-youtube-shorts-iphone": {
    "title": "Como baixar YouTube Shorts em lote?",
    "description": "No iPhone ou iPad, use o link da página de Shorts de um canal no ClipDock para carregar vídeos curtos, escolher a qualidade e criar downloads em lote. Inclui um exemplo de URL completa.",
    "intro": "Use a página de Shorts de um canal para baixar em lote vídeos curtos do mesmo criador. Guarde seus próprios vídeos ou conteúdo autorizado sem copiar cada link individualmente.",
    "tips": [
      {
        "title": "O resultado difere da página de Shorts do canal",
        "text": "Confira o identificador do canal, o final /shorts na URL, as páginas carregadas e os limites da conta. A lista pode não incluir todos os Shorts do canal. “Selecionar carregados” abrange apenas os recursos já carregados; evite reenviar toda a lista sem verificar os resultados."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre o link da lista de Shorts e o de um Short?",
        "answer": "Um endereço como https://youtube.com/@dailymoodvideo/shorts aponta para a lista de Shorts de um canal. Um endereço com /shorts/ID-do-vídeo aponta para um único Short. Para baixar em lote, use o link da lista, com o identificador do canal e /shorts no final."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Cole o link da lista de Shorts",
        "text": "Use a URL completa da página de Shorts do canal, no formato https://youtube.com/@identificador-do-canal/shorts. O exemplo usa @dailymoodvideo. Abra “Extração” (Extract) → “Lote” (Batch) no ClipDock e toque em “Colar” (Paste). Mantenha /shorts no final do endereço.",
        "exampleUrl": "https://youtube.com/@dailymoodvideo/shorts"
      },
      {
        "title": "Carregue a lista de Shorts",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira se a origem é @dailymoodvideo e marque os vídeos curtos desejados, ou use “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue). No exemplo, 48 itens foram carregados e selecionados, e o botão mostra “Adicionar à fila de downloads (48)”."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-youtube-hashtag-iphone": {
    "title": "Como baixar vídeos de uma hashtag do YouTube em lote?",
    "description": "No iPhone ou iPad, use um link de hashtag do YouTube no ClipDock para carregar vídeos, escolher a qualidade e criar downloads em lote. Inclui o formato de link de carmusic.",
    "intro": "Use o link da página de uma hashtag do YouTube para guardar vídeos seus ou autorizados com a mesma marcação, sem copiar cada link individualmente.",
    "tips": [
      {
        "title": "O resultado difere do conteúdo da página da hashtag",
        "text": "Confira se o link contém /hashtag/, o nome da hashtag, as páginas carregadas e os limites da conta. A lista pode não incluir todos os vídeos da hashtag. “Selecionar carregados” abrange apenas os recursos já carregados; evite reenviar toda a lista sem verificar os resultados."
      }
    ],
    "faq": [
      {
        "question": "Como o link de hashtag difere de links de canal e playlist?",
        "answer": "O link de hashtag aponta para uma página que pode reunir vídeos de vários criadores. O de canal aponta para a página de um criador; o de playlist, para uma lista específica. Use a URL completa da hashtag, como https://youtube.com/hashtag/carmusic, e não apenas #carmusic."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Cole o link da hashtag",
        "text": "O formato é https://youtube.com/hashtag/nome-da-hashtag; abaixo, usamos carmusic. Abra “Extração” (Extract) → “Lote” (Batch) no ClipDock e toque em “Colar” (Paste) para inserir o link completo. Não inclua # no nome da hashtag dentro da URL.",
        "exampleUrl": "https://youtube.com/hashtag/carmusic"
      },
      {
        "title": "Carregue os vídeos da hashtag",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira se a origem é carmusic e marque os vídeos desejados, ou use “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue). No exemplo, 36 itens foram carregados e selecionados, e o botão mostra “Adicionar à fila de downloads (36)”."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-youtube-channel-iphone": {
    "title": "Como baixar vídeos de um canal do YouTube em lote?",
    "description": "No iPhone ou iPad, use o link de um canal do YouTube no ClipDock para extrair vários vídeos, conferir os resultados e criar downloads em lote. Saiba como lidar com itens ausentes e falhas.",
    "intro": "Para baixar um canal em lote, use a página do criador, não o link de um vídeo. O fluxo ajuda a guardar seus próprios vídeos ou conteúdo autorizado sem copiar cada link individualmente.",
    "tips": [
      {
        "title": "A quantidade retornada difere do total do canal",
        "text": "Confira as páginas carregadas, os limites da conta e se há publicações inacessíveis. O total exibido no canal não equivale à quantidade disponível para este download. “Selecionar carregados” abrange apenas os recursos já carregados; evite reenviar o canal inteiro sem conferir o resultado."
      }
    ],
    "faq": [
      {
        "question": "Qual é a diferença entre baixar um canal e uma playlist?",
        "answer": "Ambos usam tarefas em lote, mas a página de entrada e o conjunto de vídeos são diferentes. O link de canal aponta para o perfil do criador; o de playlist, para uma lista específica. Confira o resultado real da extração."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Copie o link do canal do YouTube",
        "text": "Abra a página do canal desejado no YouTube e use o compartilhamento para tocar em “Copiar link” (Copy link). O exemplo usa @fashion-house-mafia. Confira se o link é do canal, não de um vídeo ou playlist."
      },
      {
        "title": "Cole o link do canal",
        "text": "Abra “Extração” (Extract) no ClipDock, mude para “Lote” (Batch) e toque em “Colar” (Paste) para inserir o link do canal. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Carregue os vídeos do canal",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue)."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "download-youtube-playlist-iphone": {
    "title": "Como baixar uma playlist do YouTube em lote?",
    "description": "No iPhone ou iPad, use o link de uma playlist do YouTube no ClipDock para extrair vários vídeos, conferir os resultados e criar downloads em lote. Saiba como lidar com itens ausentes e falhas.",
    "intro": "Para baixar uma playlist em lote, use o link da lista, não o de um dos vídeos. Guarde suas próprias séries ou trechos de cursos autorizados sem copiar cada link individualmente.",
    "tips": [
      {
        "title": "A quantidade retornada difere do total da playlist",
        "text": "Confira se há publicações inacessíveis e se você copiou o link da playlist certa. O total exibido na lista não equivale à quantidade disponível para este download. Evite reenviar a lista inteira sem conferir o resultado."
      }
    ],
    "faq": [
      {
        "question": "Este tutorial também serve para baixar canais?",
        "answer": "Os fluxos não são idênticos. Ambos usam tarefas em lote, mas a página de entrada e o conjunto de vídeos são diferentes. Confira o resultado real da extração."
      },
      {
        "question": "Os arquivos vão automaticamente para Fotos após o download em lote?",
        "answer": "Em “Configurações de download”, ative “Salvar automaticamente downloads concluídos em fotos” para salvar automaticamente os arquivos compatíveis. Caso contrário, toque em “Salvar em Fotos” após baixar. É necessário permitir o acesso a Fotos e usar um formato compatível."
      }
    ],
    "steps": [
      {
        "title": "Cole o link da playlist",
        "text": "Copie o link de compartilhamento da playlist do YouTube. No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se o link é da playlist, não de um único vídeo."
      },
      {
        "title": "Carregue a playlist",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim do aviso de carregamento (Loading list). Carregar a lista apenas obtém as publicações disponíveis para seleção; o download só começa depois de selecionar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Selecione os vídeos e adicione à fila",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue)."
      },
      {
        "title": "Confira a fila e o progresso dos downloads",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado."
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-instagram-profile-iphone": {
    "title": "Como baixar publicações de um perfil do Instagram em lote?",
    "description": "No iPhone ou iPad, salve em lote publicações do mesmo criador do Instagram: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "intro": "Salve em lote publicações do mesmo criador do Instagram: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "tips": [
      {
        "title": "Confira o que foi carregado",
        "text": "A lista do perfil depende do resultado real da extração. Ela não garante a inclusão de Stories, conteúdo privado, removido ou de todo o histórico. Antes de enviar o lote, confira o criador, os tipos de mídia e a quantidade selecionada."
      }
    ],
    "faq": [
      {
        "question": "Posso baixar só os vídeos e deixar as imagens de fora?",
        "answer": "Use o filtro “Vídeo” e confira os itens selecionados e a quantidade em “Adicionar à fila de downloads” antes de enviar."
      },
      {
        "question": "Tocar em carregar lista já inicia o download?",
        "answer": "Não. Depois de carregar, você precisa selecionar os itens e tocar em “Adicionar à fila de downloads”."
      },
      {
        "question": "Por que aparecem 12 posts e 16 items?",
        "answer": "Publicações e recursos de mídia usam unidades diferentes: uma publicação com várias imagens pode conter vários recursos. Confira a quantidade selecionada e o botão de adicionar à fila para saber quantos arquivos serão enviados."
      },
      {
        "question": "O aviso de uso ilimitado na captura vale para todos?",
        "answer": "Não. Confira as cotas e os limites exibidos na sua própria conta."
      }
    ],
    "steps": [
      {
        "title": "Copie o link do perfil do Instagram",
        "text": "Abra o perfil do criador no Instagram, toque nas reticências no canto superior direito e escolha “Copiar URL do perfil” (Copy profile URL). Use o endereço do perfil. Para baixar apenas um Reel, consulte o tutorial de vídeo individual."
      },
      {
        "title": "Cole o link",
        "text": "No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se é o link do perfil do Instagram desejado."
      },
      {
        "title": "Carregue as publicações do perfil",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim de “Carregando lista” (Loading list). Isso apenas obtém as publicações disponíveis para seleção. Os downloads serão criados depois de confirmar os itens e adicioná-los à fila. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Filtre os recursos e adicione à fila",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue).",
        "sections": [
          {
            "title": "Filtre por tipo: todos, vídeos ou imagens",
            "text": "“Todos” (All) mostra todos os tipos; “Vídeo” (Video) filtra vídeos; “Imagem” (Image) filtra imagens. Para baixar só vídeos, escolha “Vídeo” e confira as marcações e o total selecionado antes de enviar, evitando incluir imagens que você não quer."
          },
          {
            "title": "Por que o total de publicações difere do total de recursos?",
            "text": "Uma publicação pode conter vários arquivos de mídia. Por exemplo, publicações com várias imagens podem fazer o total de recursos superar o de publicações. Confira a quantidade selecionada antes de baixar."
          },
          {
            "title": "Selecione itens individuais ou todos os carregados",
            "text": "A marca azul à direita indica um item selecionado; ajuste a seleção conforme necessário. “Selecionar carregados” seleciona os itens já carregados. Confira o total exibido na página. Para usar outro perfil, toque em “Alterar link” (Change link)."
          },
          {
            "title": "Defina a qualidade do lote",
            "text": "“Usar configurações de download” (Follow download settings) aplica a preferência das configurações de download. Toque em “Qualidade do lote” para ver as opções disponíveis e confirme sua escolha antes de adicionar à fila."
          }
        ]
      },
      {
        "title": "Confira as tarefas em Gerenciamento",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado.",
        "sections": [
          {
            "title": "Estar na fila não significa que o download terminou",
            "text": "“Na fila” (Queued) indica uma tarefa aguardando execução. Confira os arquivos baixados em “Concluídas” e os erros em “Falha”. Se o arquivo não tiver sido salvo automaticamente, use “Salvar em Fotos” (Save to Photos) para guardar uma cópia no app Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-tiktok-profile-iphone": {
    "title": "Como baixar vídeos de um perfil do TikTok em lote?",
    "description": "No iPhone ou iPad, salve em lote publicações do mesmo criador do TikTok: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "intro": "Salve em lote publicações do mesmo criador do TikTok: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "tips": [
      {
        "title": "Selecione as publicações que você quer",
        "text": "O download de perfis em lote ajuda a salvar vários vídeos do mesmo criador. Para apenas um vídeo, o link individual facilita conferir o destino. Antes de enviar o perfil de novo, confira o que já foi baixado para evitar duplicatas."
      }
    ],
    "faq": [
      {
        "question": "Carregar a lista do perfil inicia o download?",
        "answer": "Não. Selecione os recursos, confira a qualidade e a quantidade e toque em “Adicionar à fila de downloads”."
      },
      {
        "question": "Todas as publicações do perfil aparecem na lista?",
        "answer": "Não há essa garantia. Confira os recursos realmente carregados e não considere a lista um backup completo de todo o histórico ou de conteúdo restrito."
      },
      {
        "question": "Por que alguns itens aparecem apenas como recurso?",
        "answer": "Alguns itens usam um título genérico. Use a miniatura, o tipo de mídia e a data para identificá-los e confira o arquivo depois de baixar."
      }
    ],
    "steps": [
      {
        "title": "Copie o link do perfil do criador",
        "text": "Abra o perfil desejado no TikTok, toque na seta de compartilhamento no canto superior direito e escolha “Copiar link” (Copy link) no painel “Enviar para” (Send to). Copie o link do perfil, não o de um vídeo."
      },
      {
        "title": "Cole o endereço do perfil",
        "text": "No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se é o link do perfil do TikTok desejado."
      },
      {
        "title": "Carregue a lista e aguarde o resultado",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim de “Carregando lista” (Loading list). Esta etapa apenas carrega recursos disponíveis para seleção. Para iniciar os downloads, confirme os itens na próxima etapa e toque em “Adicionar à fila de downloads” (Add to queue). A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Escolha os recursos e a qualidade e adicione à fila",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads”.",
        "sections": [
          {
            "title": "Filtre o tipo de mídia",
            "text": "“Todos” (All) mostra todos os recursos; “Vídeo” (Video) mostra vídeos; “Imagem” (Image) mostra imagens. Para baixar só vídeos, escolha “Vídeo” e confira as marcações e o total antes de enviar. A marca azul à direita indica um item selecionado; ajuste conforme necessário."
          },
          {
            "title": "Selecionar carregados abrange a lista já obtida",
            "text": "“Selecionar carregados” seleciona os itens já carregados. Na captura, posts é o total de publicações e items é o total de recursos. Como uma publicação pode conter várias mídias, os números podem diferir. A lista atual não equivale a todo o histórico do criador. Para usar outro perfil, toque em “Alterar link” (Change link)."
          },
          {
            "title": "Defina a qualidade do lote",
            "text": "“Usar configurações de download” (Follow download settings) aplica a preferência das configurações de download. Toque em “Qualidade do lote” para ver as opções disponíveis e confirme sua escolha antes de adicionar à fila."
          },
          {
            "title": "Confira as quantidades e os limites da conta",
            "text": "Antes de enviar, confira a quantidade selecionada e a cota de downloads disponível na sua conta. Na captura, posts é o total de publicações e items é o total de arquivos de mídia; os números podem diferir. Para trocar a origem, toque em “Alterar link”."
          }
        ]
      },
      {
        "title": "Acompanhe os downloads e as falhas",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado.",
        "sections": [
          {
            "title": "Na fila, baixando e concluídas",
            "text": "“Na fila” (Queued) indica uma tarefa aguardando execução. Confira os arquivos baixados em “Concluídas” e os erros em “Falha”. Se o arquivo não tiver sido salvo automaticamente, use “Salvar em Fotos” (Save to Photos) para guardar uma cópia no app Fotos."
          },
          {
            "title": "Como conferir os itens com falha",
            "text": "Abra a tarefa com falha e leia o erro. Confira o link de origem e a rede e tente novamente conforme o caso. O total de falhas, sozinho, não revela a causa."
          }
        ]
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-douyin-profile-iphone": {
    "title": "Como baixar vídeos de um perfil do Douyin em lote?",
    "description": "No iPhone ou iPad, salve em lote publicações do mesmo criador do Douyin: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "intro": "Salve em lote publicações do mesmo criador do Douyin: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar. Este tutorial usa capturas do TikTok para ilustrar as etapas; ele não documenta um teste no Douyin. Use seu próprio link de perfil do Douyin.",
    "tips": [
      {
        "title": "Selecione as publicações que você quer",
        "text": "O download de perfis em lote ajuda a salvar vários vídeos do mesmo criador. Para apenas um vídeo, o link individual facilita conferir o destino. Antes de enviar o perfil de novo, confira o que já foi baixado para evitar duplicatas."
      }
    ],
    "faq": [
      {
        "question": "Carregar a lista do perfil inicia o download?",
        "answer": "Não. Selecione os recursos, confira a qualidade e a quantidade e toque em “Adicionar à fila de downloads”."
      },
      {
        "question": "Todas as publicações do perfil aparecem na lista?",
        "answer": "Não há essa garantia. Confira os recursos realmente carregados e não considere a lista um backup completo de todo o histórico ou de conteúdo restrito."
      },
      {
        "question": "Por que alguns itens aparecem apenas como recurso?",
        "answer": "Alguns itens usam um título genérico. Use a miniatura, o tipo de mídia e a data para identificá-los e confira o arquivo depois de baixar."
      }
    ],
    "steps": [
      {
        "title": "Copie o link do perfil do criador",
        "text": "Abra o perfil do criador no Douyin e copie o link pelo menu de compartilhamento do perfil."
      },
      {
        "title": "Cole o endereço do perfil",
        "text": "No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se é o link do perfil do Douyin desejado."
      },
      {
        "title": "Carregue a lista e aguarde o resultado",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim de “Carregando lista” (Loading list). Esta etapa apenas carrega recursos disponíveis para seleção. Para iniciar os downloads, confirme os itens na próxima etapa e toque em “Adicionar à fila de downloads” (Add to queue). A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Escolha os recursos e a qualidade e adicione à fila",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads”.",
        "sections": [
          {
            "title": "Filtre o tipo de mídia",
            "text": "“Todos” (All) mostra todos os recursos; “Vídeo” (Video) mostra vídeos; “Imagem” (Image) mostra imagens. Para baixar só vídeos, escolha “Vídeo” e confira as marcações e o total antes de enviar. A marca azul à direita indica um item selecionado; ajuste conforme necessário."
          },
          {
            "title": "Selecionar carregados abrange a lista já obtida",
            "text": "“Selecionar carregados” seleciona os itens já carregados. Na captura, posts é o total de publicações e items é o total de recursos. Como uma publicação pode conter várias mídias, os números podem diferir. A lista atual não equivale a todo o histórico do criador. Para usar outro perfil, toque em “Alterar link” (Change link)."
          },
          {
            "title": "Defina a qualidade do lote",
            "text": "“Usar configurações de download” (Follow download settings) aplica a preferência das configurações de download. Toque em “Qualidade do lote” para ver as opções disponíveis e confirme sua escolha antes de adicionar à fila."
          },
          {
            "title": "Confira as quantidades e os limites da conta",
            "text": "Antes de enviar, confira a quantidade selecionada e a cota de downloads disponível na sua conta. Na captura, posts é o total de publicações e items é o total de arquivos de mídia; os números podem diferir. Para trocar a origem, toque em “Alterar link”."
          }
        ]
      },
      {
        "title": "Acompanhe os downloads e as falhas",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado.",
        "sections": [
          {
            "title": "Na fila, baixando e concluídas",
            "text": "“Na fila” (Queued) indica uma tarefa aguardando execução. Confira os arquivos baixados em “Concluídas” e os erros em “Falha”. Se o arquivo não tiver sido salvo automaticamente, use “Salvar em Fotos” (Save to Photos) para guardar uma cópia no app Fotos."
          },
          {
            "title": "Como conferir os itens com falha",
            "text": "Abra a tarefa com falha e leia o erro. Confira o link de origem e a rede e tente novamente conforme o caso. O total de falhas, sozinho, não revela a causa."
          }
        ]
      }
    ],
    "exampleNote": "Este tutorial reutiliza capturas do TikTok. As contas, os links e as quantidades mostrados não são resultados de um teste no Douyin. As imagens mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-weibo-profile-iphone": {
    "title": "Como baixar vídeos de um perfil do Weibo em lote?",
    "description": "No iPhone ou iPad, salve em lote publicações do mesmo criador do Weibo: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "intro": "Salve em lote publicações do mesmo criador do Weibo: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "tips": [
      {
        "title": "Confira o alcance de cada lote",
        "text": "Selecione as publicações desejadas e carregue a próxima página conforme necessário. Antes de enviar o perfil de novo, confira o que já foi baixado para evitar duplicatas. A lista contém os recursos realmente retornados e não é um backup completo de todo o histórico."
      }
    ],
    "faq": [
      {
        "question": "Por que a lista só tem 16 itens?",
        "answer": "No início, a lista mostra apenas o conteúdo das páginas já carregadas. Se houver mais publicações, use “Carregar próxima página”."
      },
      {
        "question": "Carregar a próxima página já inicia o download?",
        "answer": "Carregar a lista e baixar são etapas separadas. Confira os itens selecionados e toque em “Adicionar à fila de downloads” para enviá-los à fila."
      },
      {
        "question": "Posso baixar apenas alguns vídeos?",
        "answer": "Sim. Ajuste as marcações conforme necessário. Mesmo após filtrar por “Vídeo”, confira o total selecionado e a quantidade em “Adicionar à fila de downloads” antes de enviar."
      }
    ],
    "steps": [
      {
        "title": "Copie o link do perfil do Weibo",
        "text": "Abra o perfil do criador no Weibo, expanda o compartilhamento e copie o link. Use o endereço do perfil, não o de uma publicação individual."
      },
      {
        "title": "Cole o endereço do perfil",
        "text": "No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se é o link do perfil do Weibo desejado."
      },
      {
        "title": "Carregue a lista e aguarde",
        "text": "Toque em “Carregar lista” (Load list) e aguarde enquanto “Carregando lista” (Loading list) aparece. Carregar não inicia o download: selecione os recursos e toque em “Adicionar à fila de downloads” (Add to queue) na etapa seguinte. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Escolha vídeos e carregue mais páginas se necessário",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads”.",
        "sections": [
          {
            "title": "Carregue a próxima página para ver mais publicações",
            "text": "Toque em “Carregar próxima página” (Load next page) para obter mais itens. Depois, confira o novo conteúdo e a quantidade selecionada. A lista carregada pode não incluir todo o histórico ou publicações restritas."
          },
          {
            "title": "Filtre e marque os recursos desejados",
            "text": "“Todos” (All) mostra todos os tipos; “Vídeo” (Video) filtra vídeos; “Imagem” (Image) filtra imagens. A marca azul à direita indica seleção. “Selecionar carregados” seleciona os itens já carregados. Para baixar apenas alguns vídeos, ajuste as marcações e confira a quantidade no botão inferior."
          },
          {
            "title": "Escolha a qualidade e envie à fila",
            "text": "“Usar configurações de download” (Follow download settings) aplica a preferência das configurações de download. Toque em “Qualidade do lote” para ver as opções disponíveis e confirme sua escolha antes de adicionar à fila."
          },
          {
            "title": "Publicações, recursos e limites de uso",
            "text": "Antes de enviar, confira a quantidade selecionada e a cota de downloads disponível na sua conta. Na captura, posts é o total de publicações e items é o total de arquivos de mídia; os números podem diferir. Para trocar a origem, toque em “Alterar link” (Change link)."
          }
        ]
      },
      {
        "title": "Confira a fila em Gerenciamento",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado.",
        "sections": [
          {
            "title": "Confira e salve após concluir",
            "text": "“Na fila” (Queued) indica uma tarefa aguardando execução. Confira os arquivos baixados em “Concluídas” e os erros em “Falha”. Se o arquivo não tiver sido salvo automaticamente, use “Salvar em Fotos” (Save to Photos) para guardar uma cópia no app Fotos."
          },
          {
            "title": "Confira os itens com falha",
            "text": "Abra a tarefa com falha e leia o erro. Confira o link de origem e a rede e tente novamente conforme o caso. O total de falhas, sozinho, não revela a causa."
          }
        ]
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  },
  "batch-download-bilibili-profile-iphone": {
    "title": "Como baixar vídeos de um criador do Bilibili em lote?",
    "description": "No iPhone ou iPad, salve em lote publicações do mesmo criador do Bilibili: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "intro": "Salve em lote publicações do mesmo criador do Bilibili: copie o link do perfil, carregue a lista em “Lote” e escolha a mídia para baixar.",
    "tips": [
      {
        "title": "Escolha as publicações na lista retornada",
        "text": "O alcance da lista do perfil depende do resultado real da extração. Ela não é um backup completo de todo o histórico ou de conteúdo restrito. Confira o que já foi baixado antes de enviar de novo."
      }
    ],
    "faq": [
      {
        "question": "Posso colar diretamente um link curto b23.tv?",
        "answer": "Neste exemplo, um link curto b23.tv copiado do perfil do criador carregou a lista de publicações. Confira se o link veio do perfil e se o criador retornado é o correto."
      },
      {
        "question": "Por que só há 20 recursos?",
        "answer": "Neste exemplo, apenas uma página foi carregada. Use “Carregar próxima página”, no final da lista, para carregar mais e conferir os recursos realmente retornados."
      },
      {
        "question": "O tutorial também mostra coleções, favoritos ou vídeos com várias partes?",
        "answer": "Este tutorial aborda as publicações de um perfil. Coleções, favoritos e vídeos com várias partes usam outros links e não são demonstrados aqui."
      },
      {
        "question": "Sempre posso baixar na maior qualidade?",
        "answer": "Não há essa garantia. A qualidade disponível depende da mídia retornada pelo link. Confira “Qualidade do lote” antes de adicionar à fila."
      }
    ],
    "steps": [
      {
        "title": "Copie o link de compartilhamento do perfil",
        "text": "Abra o perfil do criador no Bilibili e copie o link pelo compartilhamento. Confira se está compartilhando o perfil, não um único vídeo."
      },
      {
        "title": "Cole o link curto do perfil",
        "text": "No ClipDock, abra “Extração” (Extract) → “Lote” (Batch) e toque em “Colar” (Paste). Confira se é o link do perfil do Bilibili desejado.",
        "sections": [
          {
            "title": "Confira a origem mesmo ao usar links curtos",
            "text": "O exemplo usa diretamente o link curto copiado, sem editar o endereço. Porém, o domínio b23.tv sozinho não distingue perfis de vídeos individuais. Copie o link do perfil e confira o nome do criador após carregar."
          }
        ]
      },
      {
        "title": "Carregue a lista de publicações",
        "text": "Toque em “Carregar lista” (Load list) e aguarde o fim de “Carregando lista” (Loading list). Isso apenas obtém os recursos disponíveis para seleção. Confirme os itens na lista e adicione-os à fila para iniciar os downloads. A versão gratuita permite carregar as primeiras 2 páginas; carregar mais exige VIP pago. Confira os limites exibidos no app."
      },
      {
        "title": "Escolha os vídeos e carregue mais páginas se necessário",
        "text": "Confira a origem e marque os vídeos ou imagens desejados. Você pode filtrar por tipo ou usar “Selecionar carregados” (Select loaded). Defina “Qualidade do lote” (Batch quality), confira a quantidade e toque em “Adicionar à fila de downloads” (Add to queue).",
        "sections": [
          {
            "title": "Carregue a próxima página para ver mais vídeos",
            "text": "Toque em “Carregar próxima página” (Load next page) para obter mais itens. Depois, confira o novo conteúdo e a quantidade selecionada. A lista carregada pode não incluir todo o histórico ou publicações restritas."
          },
          {
            "title": "Filtre e marque o que quer baixar",
            "text": "“Todos” (All) mostra todos os tipos; “Vídeo” (Video) filtra vídeos; “Imagem” (Image) filtra imagens. A marca azul à direita indica seleção e pode ser ajustada. “Selecionar carregados” seleciona os itens já carregados. Confira o total antes de enviar para evitar baixar recursos indesejados."
          },
          {
            "title": "Defina a qualidade do lote",
            "text": "“Usar configurações de download” (Follow download settings) aplica a preferência das configurações de download. Toque em “Qualidade do lote” para ver as opções disponíveis e confirme sua escolha antes de adicionar à fila."
          },
          {
            "title": "Confira a conta e as quantidades",
            "text": "Antes de enviar, confira a quantidade selecionada e a cota de downloads disponível na sua conta. Na captura, posts é o total de publicações e items é o total de arquivos de mídia; os números podem diferir. Para trocar a origem, toque em “Alterar link” (Change link)."
          }
        ]
      },
      {
        "title": "Confira a fila e os arquivos concluídos",
        "text": "Abra “Gerenciamento” (Manager). “Baixando” (Active na captura) inclui tarefas na fila e em processamento; “Concluídas” (Done na captura) lista os arquivos baixados; “Falha” (Failed) reúne tarefas que precisam de atenção. Abra cada item para conferir seu estado.",
        "sections": [
          {
            "title": "Confira o alcance antes de baixar vídeos longos",
            "text": "Antes de selecionar vídeos longos, confira a duração e o tamanho estimado. Baixe primeiro os vídeos necessários e adicione outros conforme precisar."
          },
          {
            "title": "Confira e salve ao terminar",
            "text": "“Na fila” (Queued) indica uma tarefa aguardando execução. Confira os arquivos baixados em “Concluídas” e os erros em “Falha”. Se o arquivo não tiver sido salvo automaticamente, use “Salvar em Fotos” (Save to Photos) para guardar uma cópia no app Fotos."
          }
        ]
      }
    ],
    "exampleNote": "As capturas mostram a fila em andamento, sem confirmar o término de todos os downloads ou o salvamento em Fotos. Os totais de “Gerenciamento” incluem outras tarefas e não representam o resultado deste lote. Os limites da conta e as quantidades de mídia pertencem ao exemplo."
  }
};
