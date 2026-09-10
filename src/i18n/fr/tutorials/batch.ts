import type { Section, TutorialCopy } from '../../types';
const entry = 'Dans ClipDock, ouvrez « Extraction » (Extract), puis l’onglet « Lot » (Batch). Touchez « Coller » (Paste)';
const pageLimit = 'La version gratuite permet de charger les 2 premières pages ; un abonnement VIP payant est nécessaire pour en charger davantage. Vérifiez les limites affichées dans l’application.';
const load = { title: 'Charger la liste', text: `Touchez « Charger la liste » (Load list) et attendez la fin de « Chargement de la liste » (Loading list). Cette étape récupère les publications sélectionnables sans lancer de téléchargement. Il faut ensuite choisir les éléments et les ajouter à la file. ${pageLimit}` };
const select = { title: 'Choisir les médias et les ajouter à la file', text: 'Vérifiez la source et cochez les vidéos ou images souhaitées. Filtrez par type ou utilisez « Sélectionner les éléments chargés » (Select loaded). Réglez « Qualité du lot » (Batch quality), vérifiez le nombre d’éléments choisis, puis touchez « Ajouter à la file de téléchargement » (Add to queue).' };
const status = { title: 'Suivre la file de téléchargement', text: 'Ouvrez « Gestion » (Manager). « Téléchargement » (Active) comprend les tâches en attente et en cours de traitement ; « Terminé » (Done) contient les fichiers téléchargés ; « Échec » (Failed) regroupe les tâches à examiner. Ouvrez chaque élément pour vérifier son état.' };
const saveFAQ = { question: 'Les fichiers sont-ils ajoutés automatiquement dans Photos ?', answer: 'Dans « Paramètres de téléchargement », activez « Enregistrement automatique des téléchargements terminés dans Photos » pour les fichiers compatibles. Sinon, utilisez « Enregistrer dans Photos » après le téléchargement. Une autorisation d’accès à Photos et un format compatible sont nécessaires.' };
const exampleNote = 'Les captures montrent la file en cours, sans confirmer la fin de tous les téléchargements ni leur enregistrement dans Photos. Les totaux de « Gestion » comprennent d’autres tâches et ne représentent pas les résultats de ce lot. Les quotas et les nombres de médias affichés sont ceux de l’exemple.';
const queued = { title: 'Distinguer attente et téléchargement terminé', text: '« En attente » (Queued) indique une tâche qui attend son tour. Ouvrez « Terminé » pour prévisualiser les fichiers et « Échec » pour consulter les erreurs. Si un fichier n’a pas été enregistré automatiquement, utilisez « Enregistrer dans Photos » (Save to Photos) pour créer une copie dans Photos.' };
const failed = { title: 'Examiner une tâche en échec', text: 'Ouvrez la tâche et lisez l’erreur. Vérifiez le lien source et le réseau avant de réessayer. Le nombre total d’échecs ne permet pas, à lui seul, d’en connaître la cause.' };
const quality: Section = { title: 'Choisir la qualité du lot', text: '« Suivre les réglages de téléchargement » (Follow download settings) reprend votre préférence de qualité. Touchez « Qualité du lot » pour consulter les choix disponibles, puis confirmez avant l’ajout à la file.' };
const counts: Section = { title: 'Vérifier la sélection et le quota', text: 'Avant l’envoi, vérifiez le nombre d’éléments sélectionnés et le quota de votre compte. « posts » compte les publications et « items » les fichiers médias ; les deux nombres peuvent différer. Pour une autre source, touchez « Changer le lien » (Change link).' };
const filter: Section = { title: 'Filtrer par type de média', text: '« Tous » (All) affiche tous les types ; « Vidéo » (Video) filtre les vidéos et « Image » (Image) les images. La coche bleue à droite indique une sélection. Pour ne garder que certaines vidéos, modifiez les coches puis vérifiez le nombre total sur le bouton d’ajout à la file. « Sélectionner les éléments chargés » sélectionne uniquement les éléments déjà chargés.' };
const next: Section = { title: 'Charger la page suivante', text: 'Touchez « Charger la page suivante » (Load next page), puis vérifiez les nouveaux éléments et la sélection. La liste ne comprend pas nécessairement toutes les publications anciennes ou à accès restreint.' };
const loaded: Section = { title: 'Comprendre les éléments chargés', text: '« Sélectionner les éléments chargés » agit sur les éléments déjà chargés. « posts » compte les publications et « items » les médias, car une publication peut en contenir plusieurs. Cette liste ne représente pas tout l’historique du créateur. Utilisez « Changer le lien » (Change link) pour sélectionner un autre profil.' };
const profileIntro = (name: string) => `Enregistrez plusieurs publications d’un même créateur ${name} sur iPhone ou iPad. Copiez le lien de son profil, chargez sa liste dans « Lot », puis choisissez les médias à télécharger.`;
const profilePaste = (name: string) => ({ title: 'Coller le lien du profil', text: `${entry} et vérifiez que le lien correspond au profil ${name} souhaité.` });
const profileTip = { title: 'Choisir les publications utiles', text: 'Le téléchargement de profil convient pour plusieurs publications du même créateur. Pour une seule vidéo, son lien direct permet de mieux confirmer la cible. Vérifiez les fichiers déjà téléchargés avant de soumettre à nouveau le profil pour éviter les doublons.' };
const profileFAQ = [
  { question: 'Charger un profil lance-t-il les téléchargements ?', answer: 'Non. Sélectionnez les médias, vérifiez la qualité et le nombre, puis touchez « Ajouter à la file de téléchargement ».' },
  { question: 'Toutes les publications du profil seront-elles proposées ?', answer: 'Ce n’est pas garanti. Fiez-vous aux éléments effectivement chargés. La liste ne constitue pas une sauvegarde complète de l’historique ou des contenus à accès restreint.' },
  { question: 'Pourquoi certains éléments ont-ils un titre générique ?', answer: 'Certains résultats utilisent un titre générique. Aidez-vous de la miniature, du type de média et de la date, puis prévisualisez le fichier téléchargé.' }
];
export const copy: Record<string, TutorialCopy> = {
  'batch-download-bilibili-collection-iphone': {
    title: 'Télécharger une collection Bilibili par lot', description: 'Copiez un lien de collection Bilibili sur iPhone ou iPad, chargez la liste dans ClipDock, choisissez la qualité et créez les téléchargements. Avec un exemple de lien b23.tv.',
    intro: 'Utilisez le lien de partage de la collection Bilibili pour sauvegarder vos propres séries ou des vidéos autorisées, sans copier le lien de chaque épisode.',
    tips: [{ title: 'Le nombre de résultats diffère du nombre d’épisodes', text: 'Vérifiez que vous avez le lien de la collection, puis examinez les pages chargées, les restrictions du compte et l’accessibilité des médias. « Sélectionner les éléments chargés » ne choisit que les ressources déjà chargées. La liste peut ne pas contenir tous les épisodes ; évitez de soumettre toute la collection à répétition.' }],
    faq: [{ question: 'Quelle différence entre une collection et un profil Bilibili ?', answer: 'Une collection regroupe des vidéos ; un profil correspond à un créateur. Copiez le lien depuis le partage de la collection. Un lien court b23.tv ne révèle pas à lui seul le type de page : vérifiez le nom de la collection et les résultats après chargement.' }, saveFAQ],
    steps: [
      { title: 'Copier le lien de la collection', text: 'Ouvrez la collection dans Bilibili, touchez son bouton de partage et copiez le lien. L’exemple utilise la collection « 米娜舞蹈-大摆锤 », dont la page affiche 62 épisodes. Vérifiez que vous partagez la collection et non la vidéo en cours de lecture.' },
      { title: 'Coller le lien de la collection', text: `${entry} pour insérer le lien copié. L’exemple utilise le lien court b23.tv ci-dessous. Utilisez l’adresse copiée depuis le partage de votre propre collection.`, exampleUrl: 'https://b23.tv/drSfmMh' }, load,
      { title: 'Sélectionner les vidéos et les ajouter à la file', text: 'Vérifiez que la source correspond à la collection. Cochez les vidéos ou utilisez « Sélectionner les éléments chargés » (Select loaded). Réglez « Qualité du lot » (Batch quality), vérifiez la sélection, puis touchez « Ajouter à la file de téléchargement » (Add to queue). L’exemple contient 62 éléments chargés et sélectionnés ; le bouton affiche « Ajouter à la file (62) ».' }, status
    ], exampleNote
  },
  'batch-download-tiktok-hashtag-iphone': {
    title: 'Télécharger des vidéos d’un hashtag TikTok', description: 'Sur iPhone et iPad, chargez un hashtag TikTok dans ClipDock, choisissez les vidéos et leur qualité, puis ajoutez-les à la file. Exemple avec le hashtag beauty.',
    intro: 'Un lien de hashtag permet de regrouper des vidéos d’un même thème que vous possédez ou que vous êtes autorisé à enregistrer. L’exemple beauty évite de copier chaque lien vidéo séparément.',
    tips: [{ title: 'Les résultats diffèrent de la page du hashtag', text: 'Vérifiez la présence de /tag/ dans l’URL, le nom du hashtag, les pages chargées et les restrictions du compte. La liste peut ne pas contenir toutes les vidéos. « Sélectionner les éléments chargés » ne choisit que les médias déjà chargés ; évitez de soumettre toute la liste à répétition.' }],
    faq: [{ question: 'Quelle différence entre un hashtag et un profil TikTok ?', answer: 'Un hashtag rassemble des vidéos de plusieurs créateurs ; un profil concerne une personne. Utilisez une adresse complète comme https://www.tiktok.com/tag/beauty, et non simplement #beauty.' }, saveFAQ],
    steps: [
      { title: 'Coller le lien du hashtag TikTok', text: `L’adresse suit le format https://www.tiktok.com/tag/nom-du-hashtag, ici beauty. ${entry} pour saisir le lien complet. N’ajoutez pas de # au nom du hashtag dans l’URL.`, exampleUrl: 'https://www.tiktok.com/tag/beauty' }, load,
      { title: 'Sélectionner les vidéos et la qualité', text: 'Vérifiez que la source est beauty. Cochez les vidéos ou utilisez « Sélectionner les éléments chargés » (Select loaded). Réglez « Qualité du lot » (Batch quality) et confirmez la sélection avant « Ajouter à la file de téléchargement » (Add to queue). L’exemple contient 19 éléments chargés et sélectionnés ; le bouton affiche « Ajouter à la file (19) ».' }, status
    ], exampleNote
  },
  'batch-download-instagram-hashtag-iphone': {
    title: 'Télécharger des images d’un hashtag Instagram', description: 'Sur iPhone et iPad, chargez un hashtag Instagram dans ClipDock, filtrez les images et créez les téléchargements. Exemple avec le hashtag model.',
    intro: 'Utilisez un lien de hashtag Instagram pour regrouper les images d’un même thème que vous possédez ou êtes autorisé à enregistrer. L’exemple model évite de copier chaque lien de publication séparément.',
    tips: [{ title: 'Les résultats diffèrent de la page du hashtag', text: 'Vérifiez la présence de /explore/tags/ dans l’URL, le nom du hashtag, les pages chargées et les restrictions du compte. La liste peut ne pas contenir toutes les publications. « Sélectionner les éléments chargés » ne choisit que les médias déjà chargés ; évitez de soumettre toute la liste à répétition.' }],
    faq: [{ question: 'Quelle différence entre un hashtag et un profil Instagram ?', answer: 'Un hashtag rassemble les publications de plusieurs créateurs ; un profil concerne une personne. Utilisez une adresse complète comme https://www.instagram.com/explore/tags/model, et non simplement #model.' }, saveFAQ],
    steps: [
      { title: 'Coller le lien du hashtag Instagram', text: `L’adresse suit le format https://www.instagram.com/explore/tags/nom-du-hashtag, ici model. ${entry} pour insérer le lien complet. Le nom du hashtag ne prend pas de # dans l’URL.`, exampleUrl: 'https://www.instagram.com/explore/tags/model' }, load,
      { title: 'Sélectionner les images et les ajouter à la file', text: 'Vérifiez que la source est model. Cochez les images en vous aidant du filtre « Image » (Image) ou de « Sélectionner les éléments chargés » (Select loaded). Après filtrage, vérifiez encore les éléments sélectionnés et leur nombre, puis touchez « Ajouter à la file de téléchargement » (Add to queue). L’exemple montre 21 éléments marqués comme images, chargés et sélectionnés, et « Ajouter à la file (21) ».' }, status
    ], exampleNote: `Les captures montrent la sélection d’images. ${exampleNote}`
  },
  'batch-download-youtube-shorts-iphone': {
    title: 'Télécharger les Shorts d’une chaîne YouTube', description: 'Sur iPhone et iPad, chargez la page Shorts d’une chaîne YouTube dans ClipDock, choisissez la qualité et ajoutez les vidéos à la file. Avec un exemple d’URL complète.',
    intro: 'Utilisez la page Shorts d’une chaîne pour regrouper les vidéos courtes d’un même créateur. Sauvegardez vos propres vidéos ou des contenus autorisés sans copier chaque lien séparément.',
    tips: [{ title: 'Les résultats diffèrent de la page Shorts', text: 'Vérifiez l’identifiant de la chaîne et le suffixe /shorts, puis les pages chargées et les restrictions du compte. La liste peut ne pas contenir tous les Shorts. « Sélectionner les éléments chargés » se limite aux ressources chargées ; évitez de soumettre toute la liste à répétition.' }],
    faq: [{ question: 'Quelle différence avec le lien d’un seul Short ?', answer: 'https://youtube.com/@dailymoodvideo/shorts désigne la liste de Shorts d’une chaîne. Une adresse /shorts/identifiant-vidéo désigne un seul Short. Pour le mode par lot, utilisez l’identifiant de chaîne suivi de /shorts.' }, saveFAQ],
    steps: [
      { title: 'Coller le lien de la liste Shorts', text: `Utilisez l’URL complète https://youtube.com/@identifiant-de-chaîne/shorts, ici @dailymoodvideo. ${entry} pour l’insérer. Conservez bien le suffixe /shorts.`, exampleUrl: 'https://youtube.com/@dailymoodvideo/shorts' }, load,
      { title: 'Sélectionner les Shorts et la qualité', text: 'Vérifiez que la source est @dailymoodvideo. Cochez les Shorts ou utilisez « Sélectionner les éléments chargés » (Select loaded). Réglez « Qualité du lot » (Batch quality), vérifiez le nombre, puis touchez « Ajouter à la file de téléchargement » (Add to queue). L’exemple compte 48 éléments chargés et sélectionnés ; le bouton affiche « Ajouter à la file (48) ».' }, status
    ], exampleNote
  },
  'batch-download-youtube-hashtag-iphone': {
    title: 'Télécharger des vidéos d’un hashtag YouTube', description: 'Sur iPhone et iPad, chargez un hashtag YouTube dans ClipDock, choisissez les vidéos et leur qualité, puis créez la file. Exemple avec carmusic.',
    intro: 'Utilisez un lien de hashtag YouTube pour regrouper les vidéos d’un même thème que vous possédez ou êtes autorisé à enregistrer, sans copier chaque lien séparément.',
    tips: [{ title: 'Les résultats diffèrent de la page du hashtag', text: 'Vérifiez la présence de /hashtag/ dans le lien, le nom du hashtag, les pages chargées et les restrictions du compte. La liste peut ne pas contenir toutes les vidéos. « Sélectionner les éléments chargés » se limite aux médias chargés ; évitez de soumettre toute la liste à répétition.' }],
    faq: [{ question: 'Quelle différence avec une chaîne ou une playlist ?', answer: 'Un hashtag regroupe des vidéos de plusieurs créateurs. Une chaîne correspond à un créateur et une playlist à une sélection précise. Utilisez une adresse complète comme https://youtube.com/hashtag/carmusic, et non simplement #carmusic.' }, saveFAQ],
    steps: [
      { title: 'Coller le lien du hashtag', text: `L’adresse suit le format https://youtube.com/hashtag/nom-du-hashtag, ici carmusic. ${entry} pour saisir le lien complet. N’ajoutez pas de # au nom dans l’URL.`, exampleUrl: 'https://youtube.com/hashtag/carmusic' }, load,
      { title: 'Sélectionner les vidéos et la qualité', text: 'Vérifiez que la source est carmusic. Cochez les vidéos ou utilisez « Sélectionner les éléments chargés » (Select loaded). Réglez « Qualité du lot » (Batch quality), vérifiez le nombre, puis touchez « Ajouter à la file de téléchargement » (Add to queue). L’exemple compte 36 éléments chargés et sélectionnés ; le bouton affiche « Ajouter à la file (36) ».' }, status
    ], exampleNote
  },
  'batch-download-youtube-channel-iphone': {
    title: 'Télécharger des vidéos d’une chaîne YouTube', description: 'Sur iPhone et iPad, copiez un lien de chaîne YouTube, chargez les vidéos dans ClipDock, vérifiez les résultats et créez les téléchargements. Contrôlez les éléments manquants et les échecs.',
    intro: 'Utilisez la page de la chaîne du créateur, et non le lien d’une vidéo. Ce parcours permet de sauvegarder vos propres publications ou des vidéos autorisées sans copier chaque lien séparément.',
    tips: [{ title: 'Le nombre de résultats diffère de celui de la chaîne', text: 'Vérifiez les pages chargées, les restrictions du compte et les publications inaccessibles. Le total de la chaîne n’est pas le nombre téléchargeable dans cette session. « Sélectionner les éléments chargés » ne choisit que les ressources chargées ; évitez de soumettre la chaîne à répétition.' }],
    faq: [{ question: 'Quelle différence entre une chaîne et une playlist ?', answer: 'Les deux utilisent le mode par lot, mais leurs pages et leurs contenus diffèrent. Une chaîne correspond au profil d’un créateur ; une playlist à une sélection précise. Vérifiez les résultats effectivement renvoyés.' }, saveFAQ],
    steps: [
      { title: 'Copier le lien de la chaîne YouTube', text: 'Ouvrez la chaîne souhaitée et son partage, puis « Copier le lien » (Copy link). L’exemple utilise @fashion-house-mafia. Vérifiez qu’il s’agit de la chaîne, et non d’une vidéo ou d’une playlist.' },
      { title: 'Coller le lien de la chaîne', text: `${entry} pour insérer le lien de la chaîne. ${pageLimit}` }, load, select, status
    ], exampleNote
  },
  'download-youtube-playlist-iphone': {
    title: 'Télécharger une playlist YouTube par lot', description: 'Sur iPhone et iPad, chargez un lien de playlist YouTube dans ClipDock, vérifiez les vidéos et créez les téléchargements. Contrôlez les éléments manquants et les échecs.',
    intro: 'Utilisez le lien de la playlist, et non d’une seule vidéo. Sauvegardez vos propres séries ou des extraits de cours autorisés sans copier chaque lien séparément.',
    tips: [{ title: 'Le nombre de résultats diffère de celui de la playlist', text: 'Vérifiez les publications inaccessibles et le lien de playlist utilisé. Le nombre affiché sur la page ne correspond pas forcément au nombre téléchargeable. Évitez de soumettre toute la playlist à répétition.' }],
    faq: [{ question: 'Ce tutoriel s’applique-t-il exactement à une chaîne ?', answer: 'Les deux utilisent le mode par lot, mais les pages d’entrée et les publications couvertes diffèrent. Vérifiez les résultats effectivement renvoyés.' }, saveFAQ],
    steps: [{ title: 'Coller le lien de la playlist', text: `Copiez le lien de partage de la playlist YouTube. ${entry} pour l’insérer. Vérifiez qu’il désigne la playlist, et non une seule vidéo.` }, load, select, status], exampleNote
  },
  'batch-download-instagram-profile-iphone': {
    title: 'Télécharger les publications d’un profil Instagram', description: profileIntro('Instagram'), intro: profileIntro('Instagram'),
    tips: [{ title: 'Vérifier le contenu effectivement chargé', text: 'Fiez-vous aux résultats renvoyés. La liste n’inclut pas nécessairement les Stories, les contenus privés, supprimés ou toutes les anciennes publications. Avant l’envoi, vérifiez le créateur, le type de média et le nombre sélectionné.' }],
    faq: [{ question: 'Puis-je télécharger seulement les vidéos ?', answer: 'Utilisez le filtre « Vidéo », puis vérifiez les éléments sélectionnés et le nombre sur le bouton d’ajout à la file avant de confirmer.' }, { question: 'Le chargement de la liste lance-t-il le téléchargement ?', answer: 'Non. Choisissez les éléments après le chargement, puis touchez « Ajouter à la file de téléchargement ».' }, { question: 'Pourquoi 12 posts mais 16 items ?', answer: 'Les publications et les médias utilisent des compteurs différents. Une publication avec plusieurs images contient plusieurs médias. Vérifiez la sélection et le bouton d’ajout à la file pour connaître le nombre à télécharger.' }, { question: 'La mention illimitée de la capture vaut-elle pour tous ?', answer: 'Non. Consultez le quota et les limites affichés pour votre propre compte.' }],
    steps: [
      { title: 'Copier le lien du profil Instagram', text: 'Ouvrez le profil du créateur dans Instagram, touchez les points de suspension en haut à droite, puis choisissez la copie de l’URL du profil (Copy profile URL). Pour un seul Reel, utilisez le tutoriel de téléchargement individuel.' }, profilePaste('Instagram'), load,
      { ...select, sections: [filter, { title: 'Pourquoi les compteurs diffèrent-ils ?', text: 'Une publication peut contenir plusieurs fichiers. Les publications avec plusieurs images augmentent le nombre de médias par rapport au nombre de publications. Vérifiez la sélection avant le téléchargement.' }, { title: 'Sélectionner les éléments souhaités', text: 'Une coche bleue à droite marque chaque élément sélectionné. Modifiez les coches ou utilisez « Sélectionner les éléments chargés », puis vérifiez le nombre affiché. « Changer le lien » (Change link) permet de saisir un autre profil.' }, quality] },
      { ...status, sections: [queued] }
    ], exampleNote
  },
  'batch-download-tiktok-profile-iphone': {
    title: 'Télécharger les vidéos d’un profil TikTok', description: profileIntro('TikTok'), intro: profileIntro('TikTok'), tips: [profileTip], faq: profileFAQ,
    steps: [
      { title: 'Copier le lien du profil TikTok', text: 'Ouvrez le profil dans TikTok, touchez la flèche de partage en haut à droite, puis « Copier le lien » (Copy link) dans « Envoyer à » (Send to). Copiez bien le profil, et non une vidéo.' }, profilePaste('TikTok'), load,
      { ...select, sections: [filter, loaded, quality, counts] }, { ...status, sections: [queued, failed] }
    ], exampleNote
  },
  'batch-download-douyin-profile-iphone': {
    title: 'Télécharger les vidéos d’un profil Douyin', description: profileIntro('Douyin'), intro: `${profileIntro('Douyin')} Ce tutoriel réutilise les captures TikTok pour illustrer les étapes ; il ne constitue pas un essai sur Douyin. Utilisez votre propre lien de profil Douyin.`, tips: [profileTip], faq: profileFAQ,
    steps: [
      { title: 'Copier le lien du profil Douyin', text: 'Ouvrez le profil du créateur dans Douyin et copiez son lien depuis le menu de partage du profil.' }, profilePaste('Douyin'), load,
      { ...select, sections: [filter, loaded, quality, counts] }, { ...status, sections: [queued, failed] }
    ], exampleNote: `Les captures TikTok réutilisées ne constituent pas des résultats Douyin : les comptes, liens et nombres affichés proviennent de TikTok. ${exampleNote}`
  },
  'batch-download-weibo-profile-iphone': {
    title: 'Télécharger les vidéos d’un profil Weibo', description: profileIntro('Weibo'), intro: profileIntro('Weibo'),
    tips: [{ title: 'Vérifier les publications page par page', text: 'Choisissez les publications utiles, puis chargez la page suivante si nécessaire. Vérifiez les téléchargements existants avant de soumettre à nouveau le profil. La liste des résultats ne constitue pas une sauvegarde complète de l’historique.' }],
    faq: [{ question: 'Pourquoi la liste ne contient-elle que 16 éléments ?', answer: 'Au départ, elle affiche uniquement les pages chargées. Si d’autres publications sont disponibles, utilisez « Charger la page suivante ».' }, { question: 'Charger la page suivante déclenche-t-il les téléchargements ?', answer: 'Le chargement et le téléchargement sont deux étapes distinctes. Vérifiez les éléments sélectionnés, puis touchez « Ajouter à la file de téléchargement ».' }, { question: 'Puis-je choisir seulement certaines vidéos ?', answer: 'Modifiez les coches selon vos besoins. Même après avoir appliqué le filtre « Vidéo », vérifiez la sélection totale et le nombre sur le bouton d’ajout à la file.' }],
    steps: [
      { title: 'Copier le lien du profil Weibo', text: 'Ouvrez le profil du créateur dans Weibo, puis le partage, et copiez le lien. Utilisez l’adresse du profil, pas celle d’une publication.' }, profilePaste('Weibo'), load,
      { ...select, sections: [next, filter, quality, counts] }, { ...status, sections: [queued, failed] }
    ], exampleNote
  },
  'batch-download-bilibili-profile-iphone': {
    title: 'Télécharger les vidéos d’un créateur Bilibili', description: profileIntro('Bilibili'), intro: profileIntro('Bilibili'),
    tips: [{ title: 'Choisir dans la liste réellement renvoyée', text: 'La liste du profil dépend des résultats disponibles. Elle ne constitue pas une sauvegarde complète des anciennes publications ou des contenus à accès restreint. Vérifiez les fichiers déjà téléchargés avant de soumettre à nouveau le profil.' }],
    faq: [{ question: 'Puis-je coller un lien court b23.tv ?', answer: 'L’exemple utilise un lien b23.tv copié depuis le profil du créateur et charge sa liste de publications. Vérifiez l’origine du lien et le nom du créateur renvoyé.' }, { question: 'Pourquoi seulement 20 éléments ?', answer: 'L’exemple ne montre qu’une page chargée. « Charger la page suivante » en bas permet d’obtenir les résultats supplémentaires disponibles.' }, { question: 'L’exemple couvre-t-il les collections, favoris et vidéos en plusieurs parties ?', answer: 'Ce tutoriel concerne les publications d’un profil. Les collections, favoris et vidéos en plusieurs parties utilisent d’autres liens et ne sont pas démontrés ici.' }, { question: 'La meilleure qualité est-elle garantie ?', answer: 'Non. La qualité dépend des médias renvoyés par le lien. Vérifiez « Qualité du lot » avant l’ajout à la file.' }],
    steps: [
      { title: 'Copier le lien du profil Bilibili', text: 'Ouvrez le profil du créateur dans Bilibili et copiez son lien depuis le partage. Vérifiez que vous partagez le profil, pas une seule vidéo.' },
      { ...profilePaste('Bilibili'), sections: [{ title: 'Vérifier l’origine du lien court', text: 'L’exemple utilise directement le lien court copié, sans réécrire l’adresse. Le domaine b23.tv ne permet pas de distinguer un profil d’une vidéo. Copiez depuis le profil, puis vérifiez le nom du créateur après chargement.' }] }, load,
      { ...select, sections: [next, filter, quality, counts] },
      { ...status, sections: [{ title: 'Vérifier les vidéos longues avant de les ajouter', text: 'Regardez la durée et la taille estimée avant de sélectionner une longue vidéo. Commencez par les publications utiles, puis ajoutez-en d’autres selon vos besoins.' }, queued] }
    ], exampleNote
  }
};
