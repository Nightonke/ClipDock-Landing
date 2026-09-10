import type { Section, TutorialCopy } from '../../types';
const open = (name: string, english: string) => ({ title: `Ouvrir l’outil « ${name} »`, text: `Touchez « Traitement » (Process) en bas, puis « ${name} » (${english}).` });
const choose = { title: 'Choisir la vidéo', text: 'Dans « Sélectionner la vidéo » (Select Video), utilisez « Choisir parmi les photos » (Choose from Photos) ou « Choisissez parmi les fichiers » (Choose from Files). Vous pouvez importer une vidéo même si la liste des téléchargements est vide.' };
const preview: Section = { title: 'Prévisualiser et enregistrer', text: 'Lisez le résultat et vérifiez l’image, la durée et le son, puis touchez « Enregistrer dans Photos » (Save to Photos). Au premier enregistrement, autorisez l’ajout de photos et de vidéos si le système le demande. Après le message de réussite, vérifiez le fichier dans Photos.' };
const other: Section = { title: 'Poursuivre, partager ou fermer', text: '« Poursuivre le traitement » (Keep Processing) ouvre le choix des outils ; « Partager le fichier » (Share File) ouvre le partage ; « Terminé » (Done) ferme le résultat. « Terminé » n’enregistre pas le fichier dans Photos.' };
const result = (text: string) => ({ title: 'Vérifier et enregistrer le résultat', text, sections: [preview, other] });
const note = (text: string) => `Les captures proviennent de l’interface anglaise du simulateur iPhone 17 Pro Max sous iOS 26.0. Le tutoriel indique les noms français des commandes. Les paramètres et limites correspondent à cette version. ${text}`;
export const copy: Record<string, TutorialCopy> = {
  'video-to-gif-iphone': {
    title: 'Transformer une vidéo en GIF', description: 'Sur iPhone et iPad, choisissez un extrait vidéo, puis réglez la fréquence d’images et la largeur pour créer un GIF en équilibrant fluidité, netteté et taille.',
    intro: 'Transformez un mouvement en GIF. Choisissez d’abord l’extrait, puis réglez la fréquence d’images et la largeur pour trouver le bon équilibre entre fluidité, netteté et taille du fichier.',
    tips: [{ title: 'Le GIF est trop volumineux', text: 'Raccourcissez l’extrait, puis réduisez la largeur ou la fréquence d’images. Modifiez un réglage à la fois pour comparer la qualité et la taille.' }],
    faq: [{ question: 'Pourquoi le GIF n’a-t-il pas de son ?', answer: 'Le format GIF ne contient pas d’audio. Utilisez un format vidéo si vous souhaitez conserver le son.' }, { question: 'Que signifient les astérisques ?', answer: 'La page indique que les extraits de plus de 10 secondes, les fréquences élevées, la largeur de 720 pixels et les préréglages nécessitent VIP. L’exemple utilise des réglages gratuits.' }],
    steps: [open('Vidéo en GIF', 'Video to GIF'), choose,
      { title: 'Choisir l’extrait et le préréglage', text: 'Après importation, prévisualisez la vidéo et consultez « Préréglages » (Presets) et « Plage du clip » (Clip Range). L’exemple utilise « Personnalisée » (Custom) et conserve environ 6 secondes.', sections: [
        { title: 'Réglage personnalisé et préréglages VIP', text: '« Personnalisée » permet de choisir les réglages. Les préréglages « Effacer* » (Clear*), « Lisse* » (Smooth*) et « Long* » privilégient respectivement la netteté, la fluidité et la longueur de l’extrait. Le libellé « Effacer » désigne ici un préréglage de netteté. L’astérisque indique une fonction VIP.' },
        { title: 'Garder uniquement le mouvement utile', text: 'Déplacez les poignées rondes aux deux extrémités de la plage pour régler le début et la fin. Les temps et la durée choisie s’affichent au-dessus. Un extrait plus long demande généralement plus d’images et d’espace. Au-delà de 10 secondes, VIP est nécessaire.' }
      ] },
      { title: 'Régler la fréquence d’images et la largeur', text: 'Consultez « Frame rate » (Frame Rate), « Largeur » (Width) et la taille estimée, puis touchez « Démarrer le traitement » (Start Processing). L’exemple utilise 8 fps et 360 pixels de largeur, avec une estimation de 1,2 Mo et 48 images.', sections: [
        { title: 'Choisir le nombre d’images par seconde', text: 'Les choix proposés sont 6, 8, 12, 15* et 24* fps. Une fréquence supérieure rend généralement le mouvement plus fluide, mais augmente le nombre d’images et la taille. Essayez 8 fps pour un mouvement simple et comparez une fréquence supérieure pour une action rapide. 15 et 24 fps nécessitent VIP.' },
        { title: 'Choisir la largeur en pixels', text: 'Les choix sont 240, 360, 540 et 720*. Une largeur supérieure conserve généralement plus de détails, mais peut alourdir le fichier. 720 nécessite VIP. Agrandir la sortie ne recrée pas les détails absents de la source.' },
        { title: 'Comprendre la taille estimée', text: '6 secondes × 8 fps donnent environ 48 images. La compression dépend aussi de la complexité de la scène : vérifiez le fichier exporté. Un GIF ne contient pas de son ; gardez un format vidéo si vous en avez besoin.' }
      ] },
      { title: 'Enregistrer le GIF', text: 'Après « Traitement terminé » (Processing Complete), touchez « Enregistrer dans Photos » (Save to Photos) ou « Partager le fichier » (Share File). « Terminé » (Done) ferme le message. Vérifiez l’animation dans une application compatible avec les GIF.', sections: [] }
    ], exampleNote: note('L’exemple exporte un GIF d’environ 6 secondes avec « Personnalisée », 8 fps et 360 pixels. Les combinaisons exactes des préréglages payants n’ont pas été vérifiées.')
  },
  'video-to-live-photo-iphone': {
    title: 'Transformer une vidéo en Live Photo', description: 'Sur iPhone et iPad, choisissez un extrait vidéo, une image de couverture et le son pour créer une Live Photo et l’enregistrer dans Photos.',
    intro: 'Transformez un court extrait vidéo en Live Photo. Choisissez le mouvement et l’image de couverture, conservez le son si nécessaire, puis enregistrez le résultat dans Photos.',
    tips: [{ title: 'Vérifier séparément l’image et le mouvement', text: 'Une bonne couverture ne garantit pas que tout le mouvement convient. Après l’enregistrement, vérifiez le début, la fin, le son et la couverture. Utilisez un mode de partage qui préserve les Live Photos.' }],
    faq: [{ question: 'Puis-je l’utiliser directement comme fond d’écran animé ?', answer: 'La conversion et l’enregistrement d’une Live Photo ne garantissent pas sa compatibilité avec l’écran verrouillé. Cela dépend aussi de l’appareil et du système. Ce tutoriel ne valide pas l’usage en fond d’écran.' }, { question: 'Quelle différence avec un GIF ?', answer: 'Les formats et les modes de partage diffèrent. Une Live Photo peut conserver le son ; un GIF sert d’animation et ne contient pas d’audio.' }],
    steps: [open('Vidéo en Live Photo', 'Video to Live Photo'), choose,
      { title: 'Choisir le mouvement et la couverture', text: 'Dans « Plage du clip » (Clip Range), choisissez le mouvement à conserver, puis réglez « Cadre de couverture » (Cover Frame), qui désigne l’image fixe. L’exemple sélectionne 00:00–00:03.', sections: [
        { title: 'Définir la plage du mouvement', text: 'Les deux poignées rondes règlent le début et la fin ; la durée choisie s’affiche au-dessus. Commencez par un court passage autour du mouvement principal. La page indique que plus de 3 secondes nécessitent VIP.' },
        { title: 'Choisir l’image fixe', text: 'Déplacez le curseur de couverture en comparant la miniature et le temps affichés. Choisissez une image nette et une expression naturelle, sans yeux fermés ni flou marqué. La couverture et la plage du mouvement sont deux réglages distincts.' }
      ] },
      { title: 'Régler le son et la qualité', text: 'Consultez « Son » (Sound) et « Qualité de la Live Photo » (Live Photo Quality), puis touchez « Démarrer le traitement » (Start Processing). L’exemple conserve le son et utilise « Équilibré » (Balanced).', sections: [
        { title: 'Conserver ou retirer le son', text: '« Supprimer le son » (Remove Sound) produit un résultat silencieux ; « Conserver le son » (Keep Sound) garde l’audio de l’extrait. Choisissez selon que vous voulez seulement le mouvement ou aussi l’ambiance sonore.' },
        { title: 'Équilibré, HD* ou Original*', text: 'Commencez par « Équilibré ». « HD » et « Original » nécessitent VIP. Augmenter la qualité de sortie ne recrée pas les détails absents de la vidéo source.' }
      ] },
      { title: 'Vérifier la Live Photo dans Photos', text: 'Attendez « Live Photo enregistrée dans Photos » (Live Photo saved to Photos), puis touchez « OK ». Dans Photos, maintenez le doigt sur la Live Photo pour vérifier le mouvement, la couverture et le son.', sections: [] }
    ], exampleNote: note('L’exemple utilise 3 secondes et la qualité « Équilibré ». L’application a confirmé l’enregistrement, mais la lecture par appui long dans Photos n’a pas été vérifiée.')
  },
  'transcode-video-iphone': {
    title: 'Convertir ou compresser une vidéo', description: 'Sur iPhone et iPad, changez le format ou réduisez la taille d’une vidéo avec ClipDock. Choisissez la résolution et la qualité, puis vérifiez le résultat.',
    intro: 'Utilisez « Transcoder la vidéo » pour changer le format ou réduire la taille du fichier. Choisissez le format, la résolution et la qualité, puis prévisualisez le résultat.',
    tips: [{ title: 'La compression ne vous convient pas', text: 'Gardez l’original et comparez différentes qualités ou résolutions sur un court extrait. Évitez de recompresser plusieurs fois un résultat déjà compressé.' }],
    faq: [{ question: 'Pourquoi le fichier n’est-il pas beaucoup plus petit ?', answer: 'La source peut déjà être compacte, ou vos réglages peuvent conserver une qualité élevée. La taille finale dépend notamment de la durée, des dimensions, du codec et du débit.' }, { question: 'Le 1080p rend-il une vidéo plus nette ?', answer: 'Agrandir une source de faible résolution ne crée pas les détails manquants. Jugez le résultat à la lecture.' }],
    steps: [open('Transcoder la vidéo', 'Transcode Video'), choose,
      { title: 'Choisir le format, la qualité et la résolution', text: 'Vérifiez « Format de sortie » (Output Format), « Qualité de sortie » (Output Quality) et « Résolution » (Resolution), puis choisissez de conserver ou non le son.', sections: [
        { title: 'MP4, MOV ou M4V', text: 'Ces choix désignent le conteneur du fichier de sortie. Commencez par MP4 pour un partage courant ; choisissez MOV ou M4V si le logiciel destinataire l’exige. L’extension du fichier et le codec interne sont deux choses distinctes.' },
        { title: 'Équilibrer qualité et taille', text: '« Haute qualité » (High Quality) privilégie l’image, « Standard » offre un compromis et « Taille plus petite » (Smaller Size) privilégie un fichier plus léger. La taille dépend aussi des scènes et des autres réglages ; le nom du préréglage ne suffit pas à la prévoir.' },
        { title: 'Résolution et son', text: 'Les choix sont « Original », 720p, 480p et 1080p*. « Original » conserve les dimensions de la source, ici 640×338. Sous « Son » (Sound), choisissez « Conserver le son » (Keep Sound) ou « Muet » (Mute). Réduire la résolution peut alléger le fichier ; l’augmenter ne restaure pas les détails absents.' }
      ] },
      { title: 'Comprendre le codec et le débit', text: 'Consultez « Codec » et « Débit binaire » (Bitrate), puis le résumé en bas. Vérifiez qu’il correspond à vos choix et touchez « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'H.264 ou HEVC*', text: 'Commencez par H.264. HEVC nécessite VIP et peut améliorer l’efficacité de compression, mais le lecteur ou l’appareil doit être compatible. Un conteneur MP4 peut utiliser différents codecs.' },
        { title: 'Débit automatique, taille cible ou débit personnalisé', text: '« Auto » laisse l’outil choisir le débit. « Taille cible » (Target Size) permet de viser une taille et « Débit personnalisé » (Custom Bitrate) de régler le débit ; ces deux options nécessitent VIP. À conditions égales, un débit inférieur réduit généralement la taille, mais peut accentuer les défauts de compression.' },
        { title: 'Options VIP de cette version', text: 'HEVC, 1080p, la HD d’origine, la taille cible et le débit personnalisé nécessitent VIP. L’exemple utilise une source de faible résolution avec « Original », « Standard », « Conserver le son » et « Auto », et a produit un fichier.' }
      ] },
      result('Prévisualisez l’exportation et comparez sa taille et sa qualité à l’original. Vérifiez surtout les contours du texte, les zones sombres et les mouvements rapides avant de l’enregistrer.')
    ], exampleNote: note('L’exemple utilise la résolution « Original », la qualité « Standard », « Conserver le son » et le débit « Auto ». Il produit une vidéo MP4/H.264 d’environ 6 secondes.')
  },
  'trim-video-iphone': {
    title: 'Couper une vidéo à la durée voulue', description: 'Sur iPhone et iPad, réglez le début et la fin d’une vidéo dans ClipDock pour en conserver un extrait, l’enregistrer ou poursuivre le montage.',
    intro: 'Gardez uniquement le passage utile. Dans « Découper la vidéo », réglez le début et la fin, puis enregistrez l’extrait ou utilisez un autre outil pour poursuivre le traitement.',
    tips: [{ title: 'Cet outil coupe la durée', text: '« Découper la vidéo » choisit la plage de temps à garder. Pour modifier les proportions de l’image ou du cadre, utilisez « Redimensionner/Canevas ».' }],
    faq: [{ question: 'Comment garder un passage au milieu ?', answer: 'Déplacez le début et la fin. Vérifiez les temps affichés dans la plage, puis prévisualisez et exportez.' }, { question: 'Pourquoi le partage égal ouvre-t-il une page VIP ?', answer: '« Partage égal » nécessite VIP. Pour conserver un seul extrait, utilisez « Sélectionner un segment ».' }],
    steps: [open('Découper la vidéo', 'Trim Video'), choose,
      { title: 'Choisir le mode et la plage de temps', text: 'Sous « Mode Découpage » (Trim Mode), choisissez « Sélectionner un segment » (Select Segment), puis déplacez les poignées de « Plage de découpage » (Trim Range).', sections: [
        { title: 'Exporter un seul extrait', text: 'La poignée gauche règle le début et la droite la fin. Les temps et la durée choisie apparaissent au-dessus ; un texte rappelle la plage à exporter en dessous. L’exemple utilise 00:00–00:06.' },
        { title: 'Distinguer aperçu et plage exportée', text: 'La durée sous l’aperçu correspond à toute la vidéo source. « Plage de découpage » désigne l’extrait à garder. Après réglage, vérifiez que vous ne coupez pas le début d’une action ou la dernière phrase.' },
        { title: 'Diviser en parts égales avec VIP', text: '« Partage égal » (Even Split) divise toute la vidéo en plusieurs segments égaux et les exporte ensemble. Cette option nécessite VIP. Pour un seul extrait, utilisez « Sélectionner un segment ».' }
      ] },
      result('Touchez « Démarrer le traitement » (Start Processing), puis vérifiez le début et la fin de l’extrait. Enregistrez-le ou utilisez « Poursuivre le traitement » (Keep Processing) pour ouvrir un autre outil.')
    ], exampleNote: note('L’exemple conserve les 6 premières secondes d’une vidéo d’environ 2 min 26 s avec « Sélectionner un segment ». « Partage égal » a ouvert la page VIP ; aucune exportation en parts égales n’a été effectuée.')
  },
  'join-videos-iphone': {
    title: 'Assembler plusieurs vidéos dans l’ordre', description: 'Sur iPhone et iPad, réunissez vos clips avec ClipDock. Choisissez la vidéo principale, ajoutez les suivantes et réglez leur ordre avant l’exportation.',
    intro: 'Utilisez « Assembler des vidéos » pour réunir des souvenirs de voyage, des événements ou une présentation en plusieurs parties. Choisissez d’abord la vidéo d’ouverture, puis ajoutez et ordonnez les autres clips.',
    tips: [{ title: 'Les proportions des clips diffèrent', text: 'Cette page ne propose pas de réglage séparé du cadre, du recadrage ou des marges. Si les proportions comptent, préparez vos vidéos avec « Redimensionner/Canevas » ou un autre outil adapté, puis assemblez-les et vérifiez le résultat.' }, { title: 'Conserver votre liste de clips', text: 'La baguette magique en haut à droite ouvre « Modification rapide » avec la vidéo principale. Revenir à l’assemblage par ce chemin peut réinitialiser les clips ajoutés. Si l’ordre est prêt, lancez le traitement ; après un changement d’outil, vérifiez à nouveau la liste.' }],
    faq: [{ question: 'Pourquoi 2 clips ajoutés donnent-ils 3 clips au total ?', answer: 'Le compteur ne comprend pas la vidéo principale. Une vidéo principale et deux clips ajoutés donnent trois clips.' }, { question: 'Puis-je déplacer un clip avant la vidéo principale ?', answer: 'Les flèches ne réordonnent que les clips ajoutés. La flèche vers le haut du premier clip ajouté est grisée. Pour changer l’ouverture, choisissez une autre vidéo principale.' }, { question: 'Puis-je régler les transitions, la musique ou la qualité ?', answer: 'La page d’assemblage ne propose pas ces options. Elle sert à prévisualiser la vidéo principale, ajouter les clips et les ordonner. Utilisez les outils correspondants pour les autres effets.' }, { question: 'Pourquoi « Terminé » n’ajoute-t-il pas le film dans Photos ?', answer: 'Ce bouton ferme le résultat. Touchez « Enregistrer dans Photos » et vérifiez l’autorisation et le message de réussite.' }],
    steps: [open('Assembler des vidéos', 'Stitch Videos'),
      { title: 'Choisir la vidéo principale', text: 'Dans « Sélectionner la vidéo » (Select Video), touchez « Choisir parmi les photos » (Choose from Photos) et choisissez la première vidéo. Elle ouvrira le film assemblé. Vérifiez la source dans les réglages.', sections: [
        { title: 'Aperçu, nom et chronologie', text: 'Touchez le bouton de lecture central pour prévisualiser la vidéo principale. Le nom, la position de lecture et sa durée figurent dessous. Dans l’exemple, elle dure 02:26 ; ce n’est pas encore la durée totale du film assemblé.' },
        { title: 'Que signifie 640×338 ?', text: 'Ce sont les dimensions en pixels de la vidéo principale, pas un sélecteur de taille de sortie. La page n’a pas de réglage indépendant de résolution, de fréquence d’images ou de qualité.' },
        { title: 'Comprendre le nombre de clips ajoutés', text: 'Ce compteur ne comprend que les clips importés avec « Ajouter une vidéo » (Add Video), pas la vidéo principale. Zéro signifie qu’aucun clip n’a encore été ajouté. Ajoutez au moins une vidéo pour réaliser l’assemblage.' }
      ] },
      { title: 'Ajouter les clips suivants', text: 'Sous « Options de traitement » (Processing Options), touchez « Ajouter une vidéo ». Dans « Sélectionner des vidéos à assembler » (Select Videos to Stitch), choisissez la source. L’exemple utilise à nouveau « Choisir parmi les photos ».', sections: [
        { title: 'Choisir parmi trois sources', text: '« Choisir parmi les téléchargements » (Choose from Downloads) utilise les vidéos de ClipDock ; « Choisir parmi les photos » ouvre Photos ; « Choisissez parmi les fichiers » (Choose from Files) ouvre le sélecteur de fichiers. Il n’est pas nécessaire de télécharger à nouveau une vidéo déjà présente dans Photos.' },
        { title: 'Sélectionner plusieurs vidéos dans Photos', text: 'Touchez les vidéos à ajouter : leurs miniatures affichent un numéro de sélection. Confirmez avec la coche bleue en haut à droite. Vous pouvez utiliser « Ajouter une vidéo » à nouveau. Vérifiez le nombre à votre retour pour éviter d’ajouter deux fois la vidéo principale.' }
      ] },
      { title: 'Vérifier le nombre et l’ordre', text: '« 2 clips ajoutés » (2 clips added) signifie trois clips au total, avec la vidéo principale. La liste commence par « Clip 2 » et suit l’ordre de haut en bas après la vidéo principale.', sections: [
        { title: 'Déplacer les clips ajoutés', text: 'Utilisez les flèches pour déplacer les clips. Le premier ne peut pas monter davantage et le dernier ne peut pas descendre davantage. Avec un seul clip ajouté, les deux flèches sont indisponibles.' },
        { title: 'Changer le début du film', text: 'La vidéo principale reste en tête et ne figure pas dans la liste de tri des clips ajoutés. Pour une autre ouverture, revenez choisir une nouvelle vidéo principale, puis ajoutez les clips suivants.' },
        { title: 'Vérifier les clips et retirer les doublons', text: 'Les miniatures, noms et durées permettent de distinguer les clips. La corbeille rouge retire le clip ajouté correspondant. Vérifiez l’ordre et les doublons. L’exemple suit 02:26 pour la vidéo principale, puis 05:11 pour le clip 2 et 04:10 pour le clip 3.' }
      ] },
      { title: 'Lancer l’assemblage', text: 'Touchez « Démarrer le traitement » (Start Processing). La fenêtre affiche « Traitement vidéo » (Processing video) et le pourcentage. Attendez le résultat avant de vérifier le film.', sections: [
        { title: 'Notifications et arrière-plan', text: 'Pour un traitement long, l’option « Me prévenir une fois terminé » (Notify me when complete) apparaît. Activez-la si nécessaire et répondez à la demande d’autorisation. L’application indique qu’elle peut essayer de poursuivre en arrière-plan ; cela ne garantit pas qu’iOS l’autorisera à fonctionner sans interruption.' },
        { title: 'Annuler le traitement', text: '« Annuler » (Cancel) en bas interrompt la tâche ; ce bouton ne masque pas simplement la fenêtre. Si vous voulez le résultat, laissez la tâche se terminer.' }
      ] },
      { title: 'Prévisualiser et enregistrer le film', text: 'Vérifiez l’ordre dans l’aperçu final. Les durées de la liste d’entrée sont affichées en secondes entières ; utilisez le fichier exporté pour connaître la durée totale.', sections: [
        { title: 'Vérifier les raccords', text: 'Lisez le début, la fin et les passages entre les clips pour vérifier l’ordre, les proportions et le son. Dans cet exemple, contrôlez notamment les environs de 02:26 et 07:37. Regardez ou écoutez le résultat complet avant de le conserver.' },
        { title: 'Enregistrer dans Photos', text: 'Touchez « Enregistrer dans Photos » (Save to Photos), accordez l’accès demandé et attendez « Enregistré dans les photos » (Saved to Photos). Ouvrez ensuite Photos pour vérifier le film.' }, other
      ] }
    ], exampleNote: note('Trois vidéos ont été assemblées après réorganisation des clips ajoutés. Le résultat affichant 11:46 a été lu et un message de réussite de l’enregistrement a été reçu. Dans cette version, revenir à l’assemblage via « Modification rapide » a réinitialisé la liste des clips ajoutés.')
  },
  'interleave-videos-iphone': {
    title: 'Alterner les segments de plusieurs vidéos', description: 'Sur iPhone et iPad, alternez des passages de différentes vidéos avec ClipDock. Ajoutez vos sources, puis choisissez le découpage, l’ordre de départ et les fondus audio.',
    intro: 'Utilisez « Entrelacement » pour alterner des segments de plusieurs vidéos. Ajoutez les sources, choisissez la règle de découpage, le premier clip et les transitions sonores.',
    tips: [{ title: 'Le rythme des changements est irrégulier', text: 'Le mode par nombre total de segments ne garantit pas la même durée pour chaque source. Dans l’exemple, A et B ont des durées différentes ; l’interface indique donc des segments de longueurs différentes.' }],
    faq: [{ question: 'Quelle différence avec l’assemblage classique ?', answer: '« Assembler des vidéos » enchaîne des clips entiers. « Entrelacement » alterne des segments de différentes sources selon une règle de découpage.' }, { question: 'Pourquoi le nombre de segments marqué d’un astérisque fonctionne-t-il gratuitement ?', answer: 'Jusqu’à 5 segments au total sont gratuits. Consultez la valeur choisie et les limites indiquées : l’astérisque sur le réglage ne signifie pas que toutes les valeurs nécessitent VIP.' }],
    steps: [open('Entrelacement', 'Interleave'), choose,
      { title: 'Ajouter les vidéos A et B', text: 'La vidéo principale apparaît sous « A Vidéo actuelle » (A Current Video). Touchez « Ajouter une vidéo » (Add Video) pour importer B depuis les téléchargements, Photos ou Fichiers. Dans Photos, confirmez la sélection avec la coche en haut à droite.', sections: [
        { title: 'Compter les sources', text: '« 1 ajouté, 2 total de vidéos » (1 added, 2 videos total) signifie une vidéo ajoutée en plus de A. A est la vidéo principale et son cadenas est inactif. Les autres vidéos disposent de commandes de tri ou de retrait, disponibles selon leur position et leur nombre.' },
        { title: 'Comprendre les durées de l’exemple', text: 'A dure environ 6 secondes et B environ 2 min 26 s. Un écart important peut donner des segments très différents. Pour un rythme régulier plus facile à vérifier, commencez par couper les sources à des durées proches.' }
      ] },
      { title: 'Régler l’alternance', text: 'L’exemple utilise « Total des segments » (Total Segments), « 5 segments », « Commencer par A » (Start with A) et le fondu audio par défaut de 50 ms. Le résumé en bas décrit la répartition.', sections: [
        { title: 'Nombre total ou durée fixe*', text: 'Le mode « Total des segments » répartit le nombre total choisi. Ici, A donne 3 segments d’environ 2 secondes et B donne 2 segments d’environ 1 min 13 s, lus en alternance. « Durée fixe » (Fixed Duration) découpe par durée et nécessite VIP.' },
        { title: 'Choisir la première source', text: '« Commencer par A » ouvre avec la vidéo principale ; « Commencer par B » (Start with B) ouvre avec B. Après modification, relisez le résumé pour vérifier la source utilisée en premier.' },
        { title: 'Adoucir les coupures audio', text: 'Le fondu par défaut d’environ 50 ms adoucit chaque coupure sonore. La version gratuite permet 2 vidéos, jusqu’à 5 segments et le fondu par défaut. Plus de sources, la durée fixe et les fondus personnalisés nécessitent VIP.' }
      ] },
      result('Touchez « Démarrer le traitement » (Start Processing) et vérifiez chaque changement de source, la première vidéo, l’ordre des segments et les transitions sonores.')
    ], exampleNote: note('L’exemple A/B utilise 5 segments au total, « Commencer par A » et les fondus audio de 50 ms par défaut. Le résultat affiche 02:31.')
  },
  'segment-grid-video-iphone': {
    title: 'Créer une grille avec les passages d’une vidéo', description: 'Sur iPhone et iPad, divisez une vidéo en segments qui se lisent simultanément dans une grille. Choisissez les lignes, les colonnes, le son et la taille finale.',
    intro: 'Découpez une seule vidéo dans le temps et lisez ses segments simultanément dans une grille. Choisissez le nombre de lignes et de colonnes, puis le son et les dimensions de sortie.',
    tips: [{ title: 'Les vignettes manquent de détails', text: 'À dimensions de sortie constantes, davantage de cases donnent moins de pixels à chacune. Réduisez les lignes ou colonnes, ou choisissez une taille finale adaptée, puis comparez.' }],
    faq: [{ question: 'Puis-je mettre plusieurs vidéos indépendantes dans la grille ?', answer: 'Cet outil utilise les passages d’une seule vidéo. Il n’affiche pas de liste d’ajout de sources comme l’outil d’assemblage.' }, { question: 'Pourquoi le résultat est-il silencieux par défaut ?', answer: '« Muet » évite le chevauchement des sons. Choisissez « Premier segment audio » si vous souhaitez conserver le son du premier passage.' }],
    steps: [open('Grille de segments', 'Segment Grid'), choose,
      { title: 'Choisir les lignes, les colonnes et le son', text: 'Après importation d’une vidéo, consultez « Colonnes » (Columns), « Lignes » (Rows) et « Son » (Sound). L’exemple utilise 2 colonnes, 2 lignes et le silence par défaut.', sections: [
        { title: 'Lignes × colonnes = nombre de cases', text: 'Une grille 2×2 contient quatre cases et divise la source en quatre segments égaux. Ces segments se lisent ensemble, ce qui raccourcit la durée finale. Le temps affiché est une estimation ; vérifiez l’exportation.' },
        { title: 'Silence ou son du premier passage', text: '« Muet » (Mute) évite que les sons des cases se superposent. « Premier segment audio » (First Segment Audio) conserve le son du premier segment. Vérifiez qu’il convient à toute la grille.' },
        { title: 'Réglages gratuits et VIP', text: 'Commencez avec une grille 2×2 et « Taille originale de la vidéo » (Original Video Size), gratuits. À partir de 3 lignes ou de 3 colonnes, ainsi que pour la sortie carrée ou la conservation des dimensions de chaque vignette, VIP est nécessaire.' }
      ] },
      { title: 'Choisir les dimensions finales', text: 'Ouvrez « Taille d’exportation » (Export Size). Cette valeur règle les dimensions en pixels du film entier, pas celles d’une seule case.', sections: [
        { title: 'Dimensions du film ou de chaque vignette', text: 'Dans l’exemple, « Taille originale de la vidéo » vaut 640×338, partagés entre les quatre cases. « Conserver la taille originale de chaque vignette » (Keep Each Tile Original Size) affiche 1280×676*. Cette option peut augmenter fortement la taille et le temps de traitement, et reste soumise aux limites du système.' },
        { title: 'Paysage, portrait ou carré', text: 'La liste propose aussi 1280×720, 1920×1080, 1080×1920 et 1080×1080*. Choisissez selon l’usage prévu, puis vérifiez que chaque case est nette et complète.' }
      ] },
      result('Touchez « Démarrer le traitement » (Start Processing), puis prévisualisez la grille. Vérifiez les passages de chaque case, les dimensions de sortie et le son.')
    ], exampleNote: note('L’exemple utilise une grille 2×2 silencieuse à la taille originale. Pour une source d’environ 6 secondes, l’estimation indique environ 2 secondes et le résultat affiche environ 1 seconde en valeur entière. Aucun de ces affichages n’est une mesure précise à l’image près.')
  },
  'resize-video-iphone': {
    title: 'Adapter le cadre et les proportions d’une vidéo', description: 'Sur iPhone et iPad, choisissez les proportions du cadre dans ClipDock. Conservez l’image entière avec des marges ou recadrez-la pour remplir le cadre.',
    intro: 'Avec « Redimensionner/Canevas », choisissez les proportions du cadre. « Ajuster » conserve toute l’image avec des marges si nécessaire ; « Recadrer le remplissage » remplit le cadre en coupant éventuellement les bords.',
    tips: [{ title: 'Décider si les bords peuvent être coupés', text: 'Si les sous-titres ou le sujet sont près des bords, essayez d’abord « Ajuster ». Pour remplir le cadre, essayez « Recadrer le remplissage » et vérifiez les passages importants image par image.' }],
    faq: [{ question: 'Le changement de proportions étire-t-il l’image ?', answer: '« Ajuster » conserve les proportions et ajoute un arrière-plan si nécessaire. Avec une autre disposition, vérifiez le recadrage ou l’étirement avant d’exporter.' }, { question: 'Comment modifier la résolution de sortie ?', answer: 'Cet outil règle surtout les proportions et la disposition. Pour la résolution et le format, consultez « Transcoder la vidéo ».' }],
    steps: [{ ...open('Redimensionner/Canevas', 'Resize / Canvas'), title: 'Ouvrir l’outil de cadrage' }, choose,
      { title: 'Choisir les proportions du cadre', text: 'Choisissez « Taux de canevas » (Canvas Ratio), puis consultez « Mise en page » (Layout) et la couleur d’arrière-plan. L’exemple utilise 1:1, « Ajuster » (Fit) et un fond noir.', sections: [
        { title: 'Original, 16:9, 9:16, 1:1, 4:3 ou 3:4', text: '« Original » garde les proportions initiales. 16:9 convient souvent au paysage, 9:16 au portrait et 1:1 au carré. Ces rapports décrivent la relation largeur/hauteur, pas une résolution telle que 1080p.' },
        { title: 'Couleur d’arrière-plan*', text: '#000000 désigne le noir. Avec « Ajuster », les proportions différentes de la source et du cadre laissent des zones d’arrière-plan. Changer cette couleur nécessite VIP.' }
      ] },
      { title: 'Choisir la disposition', text: 'Ouvrez « Mise en page », choisissez une disposition, puis revenez vérifier le résumé. Touchez ensuite « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'Ajuster : conserver toute l’image', text: 'L’image entre dans le cadre en conservant ses proportions, avec d’éventuelles marges. Ce mode convient aux sujets, sous-titres et détails à préserver sur les bords. L’exemple a été exporté avec « Ajuster ».' },
        { title: 'Remplir le cadre par recadrage', text: '« Recadrer le remplissage » remplit le cadre en conservant les proportions, ce qui peut couper les bords. Vérifiez surtout les sous-titres, le haut des têtes et les côtés dans l’aperçu.' },
        { title: 'Dispositions floues et multiples avec VIP', text: '« Flou 1:1* » (Blur 1:1*), « Double 1:1* », « Double symétrique 1:1* » (Symmetric Double 1:1*), « Triple 1:1* » et « Triple flou 1:1* » (Triple Blur 1:1*) proposent un fond flou ou plusieurs panneaux. Ces dispositions nécessitent VIP.' }
      ] },
      result('Prévisualisez le cadre, les bords et l’arrière-plan. Avec « Ajuster », assurez-vous que toute l’image est conservée avant de l’enregistrer.')
    ], exampleNote: note('L’exemple a été exporté en 1:1 avec « Ajuster » et un fond noir. Les sorties avec fond flou ou plusieurs panneaux payants n’ont pas été vérifiées.')
  },
  'rotate-video-iphone': {
    title: 'Faire pivoter une vidéo', description: 'Sur iPhone et iPad, remettez une vidéo dans le bon sens avec ClipDock. Choisissez l’angle, vérifiez l’aperçu et enregistrez le résultat.',
    intro: 'Si une vidéo s’affiche de côté ou à l’envers, utilisez « Faire pivoter la vidéo ». Choisissez l’angle, vérifiez l’aperçu, puis enregistrez.',
    tips: [{ title: 'Distinguer rotation et miroir', text: 'La rotation change l’orientation ; le miroir échange la gauche et la droite ou le haut et le bas. Pour un texte inversé dans un selfie, consultez « Vidéo miroir ».' }],
    faq: [{ question: 'Quel angle corrige une vidéo à l’envers ?', answer: 'Choisissez 180, puis vérifiez que le sujet est dans le bon sens dans l’aperçu.' }, { question: 'La rotation change-t-elle la durée ?', answer: 'Cet outil change l’orientation. Vérifiez la durée du fichier après l’exportation.' }],
    steps: [open('Faire pivoter la vidéo', 'Rotate Video'), choose,
      { title: 'Choisir le sens de rotation', text: 'Dans « Rotation », choisissez un angle et vérifiez l’aperçu. L’exemple utilise « Tourner à droite de 90 » (Rotate Right 90).', sections: [
        { title: '90° à droite, 180° ou 90° à gauche', text: '« Tourner à droite de 90 » fait un quart de tour horaire ; 180 retourne l’image ; « Tourner à gauche 90 » (Rotate Left 90) fait un quart de tour antihoraire. Les rotations de 90° échangent les orientations paysage et portrait.' },
        { title: 'Comprendre les bandes noires de l’aperçu', text: 'Une vidéo verticale peut afficher des bandes noires dans une carte d’aperçu horizontale. Cela ne prouve pas que le fichier exporté contient les mêmes bandes. Vérifiez ses dimensions et son affichage réels.' }
      ] },
      result('Touchez « Démarrer le traitement » (Start Processing) et vérifiez l’orientation du résultat. Enregistrez après avoir confirmé le sens du texte et du sujet.')
    ], exampleNote: note('L’extrait d’environ 6 secondes a été tourné de 90° à droite. L’aperçu et l’exportation montrent ce changement d’orientation.')
  },
  'mirror-video-iphone': {
    title: 'Retourner une vidéo en miroir', description: 'Sur iPhone et iPad, retournez l’image horizontalement ou verticalement avec ClipDock. Vérifiez surtout les textes et les logos avant l’exportation.',
    intro: 'Utilisez « Vidéo miroir » pour retourner l’image de gauche à droite ou de haut en bas. Vérifiez le résultat avant l’exportation, notamment les textes et les logos.',
    tips: [{ title: 'Les sous-titres peuvent aussi être inversés', text: 'Le miroir agit sur toute l’image. Vérifiez si l’inversion des textes intégrés convient à votre usage.' }],
    faq: [{ question: 'Quelle option échange la gauche et la droite ?', answer: 'Essayez « H Flip » et vérifiez un texte ou un repère dans l’image.' }, { question: 'Le miroir inverse-t-il l’ordre des mouvements ?', answer: 'Non. Pour inverser la chronologie, utilisez « Vidéo inversée ».' }],
    steps: [open('Vidéo miroir', 'Mirror Video'), choose,
      { title: 'Prévisualiser l’effet miroir', text: '« Mode miroir » (Mirror Mode) affiche le mode actuel. L’exemple utilise « H Flip ». Observez les détails à gauche et à droite avant d’ouvrir la liste des modes.', sections: [] },
      { title: 'Choisir retournement ou symétrie', text: 'Ouvrez « Mode miroir », choisissez une option, puis revenez et touchez « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'H Flip, V Flip et 180', text: '« H Flip » échange la gauche et la droite ; « V Flip » échange le haut et le bas ; « 180 » fait un demi-tour. Utilisez un texte ou un repère visible pour vérifier ces options proches.' },
        { title: 'Side Sym*, Top Sym* et Center Sym*', text: 'Ces modes VIP créent des effets symétriques, distincts du retournement de toute l’image. Vérifiez la prévisualisation après sélection.' }
      ] },
      result('Vérifiez les positions gauche/droite ou haut/bas. Les textes, logos et sous-titres intégrés sont retournés avec l’image.')
    ], exampleNote: note('L’exportation « H Flip » a été effectuée. Seules les entrées des symétries payantes ont été examinées ; leurs résultats n’ont pas été vérifiés.')
  },
  'reverse-video-iphone': {
    title: 'Lire une vidéo à l’envers', description: 'Sur iPhone et iPad, inversez l’ordre des images avec ClipDock. Choisissez le silence, le son original ou l’audio inversé, puis vérifiez le résultat.',
    intro: 'Utilisez « Vidéo inversée » pour lire la vidéo de la fin vers le début. Choisissez le silence, l’audio dans son ordre original ou le son inversé, puis prévisualisez.',
    tips: [{ title: 'Couper l’extrait avant de l’inverser', text: 'Gardez le mouvement utile avec « Découper la vidéo », puis inversez-le. Vous pourrez mieux juger le rythme et réduire le contenu à traiter.' }],
    faq: [{ question: 'Est-ce une rotation de 180° ?', answer: 'Non. L’inversion change l’ordre dans le temps ; « Faire pivoter la vidéo » change l’orientation de l’image.' }, { question: 'Pourquoi le résultat est-il silencieux ?', answer: 'L’exemple utilise « Muet », le choix par défaut. Pour conserver du son, choisissez le mode correspondant et vérifiez l’exportation.' }],
    steps: [open('Vidéo inversée', 'Reverse Video'), choose,
      { title: 'Choisir le traitement du son', text: 'Sous « Son » (Sound), choisissez « Muet » (Mute), « Conserver l’audio » (Keep Audio) ou « Audio inversé » (Reverse Audio). L’exemple utilise « Muet », puis « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'Supprimer le son', text: 'Le silence convient si seul le mouvement inversé vous intéresse. Il évite aussi des dialogues ou ambiances sonores inversés peu naturels.' },
        { title: 'Conserver ou inverser l’audio', text: '« Conserver l’audio » garde l’ordre sonore original ; « Audio inversé » lit le son à l’envers. Choisissez selon vos besoins, puis écoutez les dialogues ou la musique exportés.' }
      ] },
      result('Lisez le résultat et vérifiez que le mouvement va de la fin vers le début. Contrôlez le début, la fin et le mode sonore avant l’enregistrement.')
    ], exampleNote: note('Seul le mode « Muet » a été testé. Le résultat commence par la fin de la source. « Conserver l’audio » et « Audio inversé » n’ont pas été vérifiés.')
  },
  'change-video-speed-iphone': {
    title: 'Accélérer ou ralentir une vidéo', description: 'Sur iPhone et iPad, réglez la vitesse d’une vidéo avec ClipDock, puis vérifiez les changements de durée et de son avant l’enregistrement.',
    intro: 'Avec « Modifier la vitesse », accélérez ou ralentissez une vidéo. Choisissez un multiplicateur, puis vérifiez la durée et le son avant d’enregistrer.',
    tips: [{ title: 'Ralentir ne rend pas toujours le mouvement plus fluide', text: 'Le ralenti accentue parfois le manque d’images par seconde ou le flou de la source. Comparez sur un extrait court au lieu de juger seulement le multiplicateur.' }],
    faq: [{ question: 'Quelle durée obtient-on à 2x ?', answer: 'En général, environ la moitié de la durée initiale. Vérifiez la durée réelle de sortie.' }, { question: 'Pourquoi le son disparaît-il à grande vitesse ?', answer: 'La page indique que l’audio est automatiquement supprimé au-dessus de 4x.' }],
    steps: [open('Modifier la vitesse', 'Change Speed'), choose,
      { title: 'Régler la vitesse et la hauteur du son', text: 'Déplacez le curseur « Vitesse » (Speed). Vérifiez le multiplicateur à droite et « Durée de traitement estimée » (Estimated processed duration) en dessous : ce libellé désigne ici la durée attendue de la vidéo. Touchez ensuite « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'Relier vitesse et durée', text: '1x conserve la vitesse ; au-dessus de 1, la vidéo accélère ; en dessous, elle ralentit. La durée vaut environ la durée initiale divisée par le multiplicateur : 6 secondes ÷ 1,5 ≈ 4 secondes. Vérifiez le fichier final.' },
        { title: 'Conserver la hauteur du son', text: 'L’option VIP « Préserver le pas » (Preserve Pitch) sert à conserver la hauteur du son lors du changement de vitesse. Sans elle, les voix et la musique peuvent devenir plus aiguës ou plus graves. Écoutez particulièrement les dialogues et les chants.' },
        { title: 'Plages gratuites et VIP', text: 'La version gratuite permet 0,5x–2x. La plage 0,1x–32x et la conservation de la hauteur nécessitent VIP. Au-dessus de 4x, le son est automatiquement supprimé.' }
      ] },
      result('Lisez le résultat pour vérifier le rythme, la durée et le son. Si la vidéo est trop rapide ou trop lente, réglez le multiplicateur et exportez à nouveau.')
    ], exampleNote: note('L’exemple utilise 1,50x sans « Préserver le pas » et transforme environ 6 secondes en environ 4 secondes.')
  },
  'edit-video-audio-iphone': {
    title: 'Couper le son d’une vidéo ou régler son volume', description: 'Sur iPhone et iPad, utilisez ClipDock pour rendre une vidéo muette, régler son volume ou remplacer l’audio. Choisissez le mode, puis écoutez le résultat.',
    intro: 'Avec « Édition audio », rendez une vidéo muette, réglez son volume ou remplacez sa piste sonore. Choisissez le mode et ses paramètres, puis écoutez l’exportation.',
    tips: [{ title: 'Le son est saturé ou trop bruyant', text: 'Vérifiez la source avant d’augmenter le volume. L’amplification peut aussi accentuer le bruit. Gardez l’original pour comparer.' }],
    faq: [{ question: 'Cet outil produit-il un fichier audio ?', answer: 'Il modifie le son de la vidéo et produit toujours une vidéo. Pour un fichier audio indépendant, utilisez « Extraire l’audio ».' }, { question: 'Comment vérifier le pourcentage de volume ?', answer: 'Regardez la valeur à côté du curseur et le résumé dans l’historique des exportations, puis écoutez le fichier.' }],
    steps: [open('Édition audio', 'Audio Editing'), choose,
      { title: 'Choisir le mode audio', text: 'Dans « Mode de traitement » (Processing Mode), choisissez « Muet » (Mute), « Volume » ou « Remplacer* » (Replace*). Le mode « Volume » affiche un curseur et l’option de fondu.', sections: [
        { title: 'Retirer le son', text: 'Choisissez « Muet » pour ne garder que l’image. Lisez l’exportation pour confirmer que la piste sonore est bien retirée et que ce n’est pas seulement le lecteur qui est en sourdine.' },
        { title: 'Régler le volume', text: 'Déplacez le curseur et vérifiez le pourcentage. 100 % conserve le niveau relatif original. Augmenter le volume peut amplifier le bruit ; écoutez le résultat avant de l’enregistrer.' },
        { title: 'Remplacement et fondus VIP', text: '« Remplacer » change la source audio ; « Fade entrant/sortant » (Fade In/Out) ajoute des fondus. Ces deux options nécessitent VIP. Pour choisir séparément une vidéo et une source sonore, utilisez « Fusionner l’audio et la vidéo » (Merge Audio and Video).' }
      ] },
      result('Écoutez l’exportation et comparez-la à l’original. Pour modifier le volume, vérifiez que le pourcentage du curseur a changé avant d’exporter ; 100 % conserve la proportion initiale.')
    ], exampleNote: note('L’exemple a été exporté en mode « Volume » à 100 %. Il ne montre pas l’effet d’un changement de volume. Le remplacement et les fondus n’ont pas été exécutés.')
  },
  'add-watermark-video-iphone': {
    title: 'Ajouter un filigrane texte à une vidéo', description: 'Sur iPhone et iPad, ajoutez un filigrane avec ClipDock. Réglez le texte, la taille et la position, puis prévisualisez et enregistrez la vidéo.',
    intro: 'Avec « Ajouter un filigrane », saisissez votre texte et réglez sa taille et sa position. Les captures des paramètres et du résultat utilisent des textes et des vidéos différents ; consultez la note sur l’exemple.',
    tips: [{ title: 'Prévisualiser avant d’enregistrer', text: 'Le filigrane doit être lisible sans masquer les éléments importants. Gardez la vidéo originale pour pouvoir changer le texte, la position ou le style et exporter à nouveau.' }],
    faq: [{ question: 'Le filigrane image est-il gratuit ?', answer: 'L’option « Image* » porte la marque VIP. Cet exemple montre uniquement un filigrane texte.' }, { question: 'Pourquoi les textes des paramètres et du résultat diffèrent-ils ?', answer: 'Les paramètres utilisent « ClipDock Demo ». Le résultat sur appareil réel utilise « Made by ClipDock » sur une autre vidéo. Les deux illustrent le même parcours de filigrane texte.' }],
    steps: [open('Ajouter un filigrane', 'Add Watermark'), choose,
      { title: 'Saisir le texte et régler sa taille', text: 'Dans « Type de filigrane » (Watermark Type), choisissez « Texte » (Text). Ouvrez « Contenu du texte » (Text Content), saisissez le texte et confirmez. L’exemple utilise « ClipDock Demo ». L’aperçu montre la position et l’effet général.', sections: [
        { title: 'Texte ou Image*', text: '« Texte » crée un filigrane textuel ; « Image » ouvre le filigrane image, qui nécessite VIP. L’exemple configure uniquement du texte.' },
        { title: 'Choisir la taille du texte', text: 'Le curseur affiche une proportion, ici 100 %. Vérifiez l’aperçu pour éviter de masquer le sujet, les sous-titres ou une partie importante de l’image.' }
      ] },
      { title: 'Régler la position et le style', text: 'Consultez « Position du filigrane » (Watermark Position), la couleur, l’arrière-plan, le contour et « Opacité » (Opacity). Les options marquées d’un astérisque nécessitent VIP. Une valeur par défaut affichée ne signifie pas qu’elle est modifiable gratuitement.', sections: [
        { title: 'Placer le filigrane', text: 'Les positions sont en haut à gauche, en haut à droite, en bas à gauche, en bas à droite et au centre. L’exemple le place en bas à droite. Évitez le sujet et les sous-titres, et vérifiez séparément les vidéos en portrait et en paysage.' },
        { title: 'Couleur, arrière-plan et contour', text: '« Couleur du texte » (Text Color) règle la couleur ; « Afficher l’arrière-plan » (Show Background) ajoute ou retire le fond ; « Trait du texte » (Text Stroke) et « Couleur du trait » (Stroke Color) règlent le contour. Ces options sont VIP. Vérifiez le contraste, surtout dans une vidéo alternant scènes claires et sombres.' },
        { title: 'Rendre le filigrane plus discret', text: 'L’exemple affiche 75 %. Réduire la valeur du curseur « Opacité » rend le filigrane plus pâle, mais aussi moins lisible. Ce réglage nécessite VIP.' }
      ] },
      { title: 'Vérifier et enregistrer le filigrane', text: 'Touchez « Démarrer le traitement » (Start Processing). Dans la vidéo exportée, vérifiez le texte, sa position et sa lisibilité sur différentes scènes.', sections: [
        { title: 'Contrôler le résultat', text: 'Lisez la vidéo et vérifiez que le filigrane est lisible, bien placé et ne masque ni le sujet ni les sous-titres. La capture du résultat utilise une autre vidéo et un autre texte, mais le même parcours.' },
        { title: 'Enregistrer ou partager', text: 'Touchez « Enregistrer dans Photos » (Save to Photos), attendez la confirmation et vérifiez dans Photos. « Partager le fichier » (Share File) ouvre le partage.' },
        { title: 'Poursuivre le traitement ou fermer', text: '« Poursuivre le traitement » (Keep Processing) permet de continuer à retoucher le résultat. « Terminé » (Done) ferme la page et n’enregistre pas le fichier dans Photos.' }
      ] }
    ], exampleNote: 'Les captures d’entrée et de paramètres proviennent du simulateur iPhone 17 Pro Max ; le résultat provient d’un iPhone réel. Les paramètres utilisent « ClipDock Demo » et le résultat « Made by ClipDock » sur une autre source. Seul le filigrane texte est configuré ; les modifications de styles payants n’ont pas été vérifiées.'
  },
  'capture-video-frames-iphone': {
    title: 'Extraire une image d’une vidéo', description: 'Sur iPhone et iPad, enregistrez une image vidéo avec ClipDock. Choisissez un instant net, vérifiez l’aperçu, puis enregistrez ou partagez la capture.',
    intro: 'Utilisez « Capture vidéo » pour enregistrer une image de votre vidéo. Choisissez un instant net, prévisualisez l’image, puis enregistrez-la ou partagez-la.',
    tips: [{ title: 'L’image est floue', text: 'Choisissez un moment avec moins de mouvement et vérifiez la netteté de la source. Extraire une image ne répare pas le flou déjà présent.' }],
    faq: [{ question: 'Puis-je extraire plusieurs images à la fois ?', answer: '« Par lots* » permet des captures multiples et nécessite VIP. Pour une seule image, utilisez « Single ».' }, { question: 'Quelle différence avec une capture d’écran du téléphone ?', answer: '« Capture vidéo » exporte une image du fichier vidéo, à des dimensions dépendant de la source. Une capture d’écran peut aussi inclure les commandes du lecteur et l’interface du système.' }],
    steps: [open('Capture vidéo', 'Video Capture'), choose,
      { title: 'Choisir le mode et l’instant', text: 'Choisissez « Mode de capture » (Capture Mode), puis « Durée de capture » (Capture Time), qui désigne ici l’instant à extraire. L’exemple utilise « Single », 00:00 et aucun horodatage.', sections: [
        { title: 'Single : exporter une seule image', text: 'Déplacez le curseur temporel en regardant l’aperçu, choisissez une image nette et touchez « Exporter l’image » (Export Image). Le résultat contient la vidéo, sans commandes de l’application ni cadre du téléphone.' },
        { title: 'Modes Par lots*, Intelligent* et Planche-contact*', text: '« Par lots » (Batch) extrait une série d’images, « Intelligent » (Smart) sélectionne des images et « Planche-contact » (Sheet) crée une planche d’aperçu. Ces modes nécessitent VIP. Ouvrez chaque mode pour consulter ses réglages.' },
        { title: 'Ajouter un horodatage', text: 'Cette option ajoute un repère temporel à l’image. Laissez-la désactivée pour une image seule ; activez-la pour indiquer l’instant dans la source. Vérifiez la position et la lisibilité sur l’exportation.' }
      ] },
      { title: 'Prévisualiser et enregistrer l’image', text: 'Touchez « Exporter l’image » pour ouvrir « Aperçu de la capture d’écran » (Screenshot Preview). Vérifiez l’image, les dimensions et la taille du fichier. Utilisez « Enregistrer dans Photos » (Save to Photos) ou « Partager le fichier » (Share File). « Terminé » (Done) ferme l’aperçu.', sections: [
        { title: 'Les dimensions viennent de la vidéo', text: 'Dans l’exemple, la source et l’image exportée mesurent 640×338. Un écran de téléphone plus grand ne crée pas de détails supplémentaires dans la vidéo.' }
      ] }
    ], exampleNote: note('Le mode « Single » a produit un JPEG de 640×338. Les réglages et les sorties de « Par lots », « Intelligent » et « Planche-contact » n’ont pas été vérifiés.')
  },
  'extract-audio-iphone': {
    title: 'Extraire le son d’une vidéo', description: 'Sur iPhone et iPad, sélectionnez une vidéo dans Photos ou Fichiers et extrayez son audio avec ClipDock, puis enregistrez-le ou partagez-le.',
    intro: 'Avec « Extraire l’audio », enregistrez séparément le son d’une vidéo. Choisissez la vidéo dans Photos ou Fichiers, puis enregistrez ou partagez l’audio obtenu.',
    tips: [{ title: 'Le résultat est silencieux', text: 'Lisez d’abord l’original et vérifiez que le lecteur n’est pas en sourdine. Sans piste audio dans la source, l’outil ne peut pas recréer un son inexistant. L’extraction n’améliore pas automatiquement la qualité sonore.' }, { title: 'La liste des téléchargements est vide', text: 'Le message d’absence de vidéos téléchargées signifie seulement qu’aucune vidéo de ClipDock n’est disponible. Utilisez « Choisir parmi les photos » au-dessus pour importer directement votre vidéo.' }],
    faq: [{ question: 'Puis-je choisir MP3 ou un autre format ?', answer: 'Ce parcours produit directement du M4A, sans menu de format. Il ne comprend pas de conversion MP3.' }, { question: 'Pourquoi le résultat n’apparaît-il pas dans Photos ?', answer: 'Il s’agit d’un fichier audio. Ouvrez « Partager le fichier » et utilisez l’enregistrement dans Fichiers ou une autre destination audio.' }, { question: 'Puis-je extraire le son directement depuis un lien de partage ?', answer: 'L’exemple traite une vidéo déjà présente dans Photos. Si vous n’avez qu’un lien, téléchargez d’abord la vidéo avec le tutoriel de la plateforme, puis extrayez l’audio.' }],
    steps: [open('Extraire l’audio', 'Extract Audio'),
      { title: 'Choisir une vidéo dans Photos', text: 'Dans « Sélectionner la vidéo » (Select Video), touchez « Choisir parmi les photos » (Choose from Photos), puis une vidéo dans le sélecteur système. Une liste de téléchargements vide n’empêche pas l’importation. Si la source est dans Fichiers, utilisez « Choisissez parmi les fichiers » (Choose from Files).' },
      { title: 'Attendre l’extraction audio', text: 'L’extraction démarre dès la sélection, sans bouton de démarrage supplémentaire. Après « Traitement terminé » (Processing Complete) et l’apparition du fichier .m4a, touchez « Partager le fichier » (Share File) pour enregistrer ou partager. « Terminé » (Done) ferme le message.' },
      { title: 'Ouvrir les destinations de partage', text: 'Dans la feuille de partage, choisissez l’enregistrement dans Fichiers pour conserver une copie, ou une autre application. Ouvrez ensuite le fichier audio et vérifiez son contenu et sa durée.' }
    ], exampleNote: note('La sélection produit directement du M4A sans menu de format. Les captures s’arrêtent à la feuille de partage ; l’enregistrement dans Fichiers n’est pas montré. Les boutons du système peuvent suivre la langue de l’appareil.')
  },
  'change-video-md5-iphone': {
    title: 'Utiliser l’outil de modification MD5', description: 'Sur iPhone et iPad, créez une copie vidéo avec l’outil MD5 de ClipDock. Pour confirmer le changement, comparez les empreintes de l’original et du résultat.',
    intro: '« Modifier MD5 » crée une copie traitée de la vidéo. Si vous devez confirmer le changement du MD5, calculez et comparez les empreintes de la source et du résultat avec un outil de hachage.',
    tips: [{ title: 'Vérifier les fichiers eux-mêmes', text: 'Un nouveau nom de fichier ne prouve pas que le MD5 a changé. Si votre usage dépend de cette empreinte, calculez celle de chaque fichier et comparez-les, sans vous fier seulement au message de réussite.' }],
    faq: [{ question: 'Cet outil améliore-t-il la qualité ou réduit-il la taille ?', answer: 'Ce tutoriel ne présente pas le MD5 comme un outil d’amélioration d’image ou de compression. Pour compresser, utilisez « Transcoder la vidéo ».' }, { question: 'Modifier l’empreinte change-t-il les droits d’utilisation ?', answer: 'Non. Le changement d’empreinte ne modifie pas les droits portant sur le contenu.' }],
    steps: [open('Modifier MD5', 'Change MD5'),
      { title: 'Choisir la vidéo et attendre', text: 'Choisissez une vidéo dans Photos ou une autre source disponible. Le traitement commence directement, sans page de paramètres.', sections: [
        { title: 'Aucune empreinte cible à saisir', text: 'L’outil ne propose pas de champ pour une valeur MD5 cible. Vous ne pouvez pas choisir une empreinte arbitraire.' }
      ] },
      result('Vérifiez le nouveau fichier, puis enregistrez-le ou partagez-le. Pour confirmer une empreinte différente, calculez et comparez les hachages de la source et du résultat. Un nom différent ne remplace pas cette vérification.')
    ], exampleNote: note('L’exemple a produit un fichier _md5.mp4 et ouvert la page de résultat. Les MD5 de la source et de la sortie n’ont pas été comparés.')
  },
  'merge-audio-video-iphone': {
    title: 'Fusionner une vidéo et une source audio', description: 'Sur iPhone et iPad, choisissez une vidéo et le son d’un autre fichier dans ClipDock. Fusionnez-les, puis vérifiez la piste sonore et la synchronisation.',
    intro: 'Avec « Fusionner l’audio et la vidéo », associez une vidéo au son d’un autre fichier. Choisissez d’abord l’image, puis la source sonore, et vérifiez le son et la synchronisation après exportation.',
    tips: [{ title: 'Le son est décalé ou la fin ne convient pas', text: 'Vérifiez les durées et les points de départ des sources. Cette page ne propose ni décalage temporel ni boucle. Préparez les fichiers séparément si nécessaire avant de les fusionner.' }],
    faq: [{ question: 'Faut-il extraire l’audio au préalable ?', answer: 'Non. « Extraire l’audio de la vidéo Photos » permet d’utiliser directement le son d’une autre vidéo de Photos.' }, { question: 'Puis-je régler le mélange de deux pistes ?', answer: 'Cette page n’a pas de contrôle de mixage ou de pistes multiples. Préparez séparément l’audio si vous avez besoin d’un mixage.' }],
    steps: [open('Fusionner l’audio et la vidéo', 'Merge Audio and Video'), choose,
      { title: 'Vérifier la source de l’image', text: 'Importez d’abord la vidéo dont vous souhaitez garder l’image. La carte supérieure affiche son aperçu, ses dimensions et sa durée. « Source audio » (Audio Source) indique au départ « Non sélectionné » (Not Selected).', sections: [
        { title: 'Distinguer image et son', text: 'Déterminez quelle vidéo fournit l’image, puis choisissez le son. L’aperçu de la vidéo en haut ne signifie pas que la source audio est déjà définie.' }
      ] },
      { title: 'Choisir la source sonore', text: 'Touchez « Source audio ». Le menu propose « Choisissez parmi les fichiers » (Choose from Files) et « Extraire l’audio de la vidéo Photos » (Extract audio from Photos video).', sections: [
        { title: 'Utiliser un fichier audio', text: 'L’option de fichiers permet de choisir votre audio dans le sélecteur système. Préparez le fichier souhaité, puis retrouvez-le à son emplacement.' },
        { title: 'Utiliser le son d’une vidéo de Photos', text: 'Cette option récupère le son d’une vidéo de Photos. L’exemple choisit une autre vidéo par ce chemin, sans exporter d’abord un fichier audio séparé.' }
      ] },
      { title: 'Confirmer la source et fusionner', text: 'À votre retour, « Source audio » affiche le nom du fichier choisi. Vérifiez-le et touchez « Démarrer le traitement » (Start Processing).', sections: [
        { title: 'Pas de réglages de mixage supplémentaires', text: '« Source audio » choisit seulement l’entrée sonore. Cette page ne propose pas de mixage, de décalage temporel, de boucle ni de découpage audio indépendant. Préparez les sources avant la fusion si nécessaire, puis écoutez le résultat.' }
      ] },
      result('Avant d’enregistrer, écoutez le résultat et vérifiez la source audio, la synchronisation au début, le volume et la fin, surtout lorsque les deux sources ont des durées différentes.')
    ], exampleNote: note('L’exemple utilise le son d’une autre vidéo de Photos et produit une vidéo d’environ 6 secondes. La piste fusionnée n’a pas été écoutée passage par passage.')
  }
};
