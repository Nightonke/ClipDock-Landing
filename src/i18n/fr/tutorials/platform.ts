import type { TutorialCopy } from '../../types';
const progress = { title: 'Suivre le téléchargement', text: 'Touchez « Afficher la tâche » (View Task) ou ouvrez « Gestion » (Manager) pour voir la progression, la vitesse et le temps restant. Attendez la fin avant d’ouvrir le fichier.' };
const save = { title: 'Prévisualiser et enregistrer dans Photos', text: 'Dans « Gestion », ouvrez la vidéo depuis « Terminé » (Done) et vérifiez l’image et le son. Si elle n’a pas été enregistrée automatiquement, touchez « Enregistrer dans Photos » (Save to Photos), accordez l’autorisation demandée, puis vérifiez la copie dans l’application Photos.' };
const saveExplanation = '« Terminé » indique que le fichier a été téléchargé dans ClipDock. Dans « Paramètres de téléchargement » (Download Settings), activez « Enregistrement automatique des téléchargements terminés dans Photos » (Auto-Save Completed Downloads to Photos), ou touchez manuellement « Enregistrer dans Photos ». Si le fichier est absent de Photos, vérifiez les autorisations et les erreurs d’enregistrement.';
const saveFAQ = { question: 'Pourquoi la vidéo téléchargée n’apparaît-elle pas dans Photos ?', answer: saveExplanation };
const noResult = { title: 'Le lien s’ouvre, mais aucun média n’est détecté', text: 'Vérifiez que la vidéo est toujours accessible publiquement et copiez à nouveau son lien de partage. Une connexion requise, une restriction régionale ou une modification de page peut empêcher l’extraction. Réessayer plusieurs fois ne résout pas forcément une restriction de la source.' };
const quality = { title: 'Choisir la qualité et lancer le téléchargement', text: 'Dans « Sélectionner la qualité » (Select Quality), vérifiez la miniature et comparez la résolution, le format et la taille estimée. Choisissez une version et touchez « Télécharger » (Download). Activez l’option de qualité par défaut si vous souhaitez conserver votre choix. Les options disponibles dépendent de la vidéo.' };
const defaultQuality = { title: 'Conserver une qualité par défaut', text: '« Définir cette qualité par défaut et ne plus me le demander » (Set this quality as default and don’t ask again) mémorise votre préférence. Laissez cette option désactivée pour comparer les qualités et les formats à chaque téléchargement.' };
const paste = (platform: string) => ({ title: 'Coller le lien et extraire la vidéo', text: `Dans ClipDock, ouvrez « Extraction » (Extract), puis « Vidéo » (Video). Sous « Extraire du lien » (Extract from Link), touchez « Coller » (Paste), ou vérifiez le lien s’il est déjà rempli. Confirmez qu’il correspond à la vidéo ${platform} souhaitée, puis touchez « Extraire » (Extract).` });
const description = (platform: string) => `Téléchargez une vidéo ${platform} avec ClipDock sur iPhone ou iPad : copiez le lien, choisissez un média disponible, puis enregistrez-le dans Photos.`;
const intro = (platform: string) => `Copiez le lien d’une vidéo ${platform} que vous avez le droit d’enregistrer. Collez-le dans ClipDock, choisissez le média à télécharger, puis enregistrez-le ou partagez-le.`;
const example = (platform: string) => `Les captures montrent le parcours ${platform} dans l’application en anglais ; les contenus sources peuvent être dans une autre langue. Elles montrent l’entrée d’enregistrement, sans confirmer l’ajout dans Photos. Les médias, formats et qualités disponibles dépendent de votre lien.`;
export const copy: Record<string, TutorialCopy> = {
  'download-tiktok-video-iphone': {
    title: 'Télécharger une vidéo TikTok dans Photos', description: description('TikTok'), intro: intro('TikTok'),
    tips: [noResult], faq: [saveFAQ, { question: 'Puis-je enregistrer plusieurs vidéos TikTok à la suite ?', answer: 'Pour des liens de vidéos distincts, utilisez le téléchargement automatique par copie de liens. Pour plusieurs publications du même créateur, consultez le tutoriel de téléchargement de profil par lot. Ces parcours utilisent des liens différents.' }],
    steps: [{ title: 'Copier le lien de partage', text: 'Ouvrez la vidéo dans TikTok et choisissez « Partager » (Share), puis « Copier le lien » (Copy link). Copiez le lien de la publication, pas celui du profil.' }, paste('TikTok'), progress, save], exampleNote: example('TikTok')
  },
  'download-douyin-video-iphone': {
    title: 'Télécharger une vidéo Douyin dans Photos', description: description('Douyin'), intro: 'Copiez un lien de vidéo Douyin et collez-le dans ClipDock pour le télécharger. Ce tutoriel réutilise les captures TikTok pour expliquer les étapes ; il ne constitue pas un essai sur Douyin. Utilisez votre propre lien Douyin.',
    tips: [noResult], faq: [saveFAQ, { question: 'Pourquoi les captures ne montrent-elles pas Douyin ?', answer: 'Les images TikTok illustrent la copie, l’extraction, le téléchargement et l’enregistrement. Utilisez votre lien Douyin et vérifiez les médias réellement renvoyés par l’extraction.' }],
    steps: [{ title: 'Copier le lien de partage', text: 'Ouvrez la vidéo dans Douyin et copiez son lien depuis le menu de partage. Utilisez le lien de la publication, pas celui du profil.' }, paste('Douyin'), progress, save],
    exampleNote: 'Les captures TikTok illustrent uniquement les commandes de l’application. La plateforme, les liens, les médias et les nombres affichés ne représentent pas des résultats Douyin. Elles montrent l’entrée d’enregistrement, sans confirmer l’ajout dans Photos.'
  },
  'download-facebook-video-iphone': {
    title: 'Télécharger des vidéos et Reels Facebook', description: description('Facebook'), intro: intro('Facebook'),
    tips: [{ title: 'Aucun résultat téléchargeable', text: 'Vérifiez que vous avez copié le lien de la vidéo et que la publication est toujours accessible. Si elle a été supprimée ou si son accès est restreint, vérifiez d’abord son état avant de réessayer.' }],
    faq: [{ question: 'L’exemple montre-t-il un Reel Facebook ?', answer: 'Oui. Pour une autre vidéo, copiez le lien de la publication précise et vérifiez les médias renvoyés.' }, { question: 'Le 1080p est-il toujours disponible ?', answer: 'Non. Les options 1080p, 720p et 360p sont celles de cet exemple. Les résolutions, formats et tailles peuvent varier selon la vidéo.' }, saveFAQ],
    steps: [
      { title: 'Copier le lien Facebook', text: 'Ouvrez la vidéo ou le Reel dans Facebook, touchez « Partager » (Share), puis « Copier le lien » (Copy link).' }, paste('Facebook'),
      { title: 'Choisir la qualité et le format', text: 'Dans « Sélectionner la qualité » (Select Quality), vérifiez la miniature, la résolution, le format et la taille estimée. Cet exemple propose 1080p (WEBM, environ 9,6 Mo), 720p (MP4, environ 6,8 Mo) et 360p (MP4, environ 909 Ko). Choisissez une option, puis « Télécharger » (Download). Les choix dépendent des résultats de l’extraction.', sections: [
        { title: 'Comparer la qualité et la taille', text: 'La liste affiche la résolution et la taille estimée. Une résolution supérieure peut conserver davantage de détails ; un fichier plus petit peut réduire le temps de transfert et l’espace nécessaire. La taille estimée n’est pas la taille finale.' },
        { title: 'Distinguer MP4 et WEBM', text: 'Dans cet exemple, le 1080p est en .webm et les versions 720p et 360p en .mp4. Résolution et format sont distincts. Vérifiez aussi la compatibilité du format avec Photos ou l’application destinataire.' }, defaultQuality
      ] }, progress,
      { ...save, sections: [{ title: 'Télécharger puis enregistrer dans Photos', text: saveExplanation }] }
    ], exampleNote: example('Facebook')
  },
  'download-xiaohongshu-video-iphone': {
    title: 'Télécharger une vidéo Xiaohongshu dans Photos', description: description('Xiaohongshu'), intro: intro('Xiaohongshu'),
    tips: [{ title: 'Aucun résultat après le collage', text: 'Vérifiez que le texte partagé contient le lien complet et que la publication s’ouvre encore. Si elle a été supprimée ou si son accès est restreint, vérifiez son état à la source.' }],
    faq: [{ question: 'Faut-il retirer le texte de partage ?', answer: 'Vous pouvez coller le texte avec le lien complet. Si la détection échoue, essayez de ne coller que l’URL.' }, { question: 'Chaque publication renvoie-t-elle deux médias ?', answer: 'Non. Le nombre et le type des médias varient. Prévisualisez chaque élément avant de l’enregistrer.' }, { question: 'Ce tutoriel montre-t-il les publications avec images et texte ?', answer: 'Ce tutoriel concerne les publications vidéo. Il ne montre pas le téléchargement des publications avec images et texte.' }],
    steps: [
      { title: 'Copier le lien de la publication vidéo', text: 'Ouvrez la publication vidéo dans Xiaohongshu, puis son partage, et copiez le lien. Vous pouvez conserver le texte de partage avec le lien.' },
      { ...paste('Xiaohongshu'), sections: [{ title: 'Coller le texte avec le lien', text: 'Conservez le lien complet dans le texte partagé. Si ClipDock ne le reconnaît pas, copiez à nouveau le lien ou collez uniquement l’URL.' }] }, progress,
      { ...save, title: 'Vérifier les médias et les enregistrer', sections: [
        { title: 'Parcourir les médias avec les flèches', text: 'Si le résultat contient plusieurs fichiers, utilisez les flèches gauche et droite pour les prévisualiser un par un. Vérifiez leur contenu avant de les enregistrer. Le compteur indique la position dans la liste.' },
        { title: 'Enregistrer après le téléchargement', text: saveExplanation }
      ] }
    ], exampleNote: `${example('Xiaohongshu')} Les avatars et noms des contacts sont floutés dans la capture du partage. L’exemple contient du texte et un lien court ; il porte uniquement sur une publication vidéo.`
  },
  'download-bilibili-video-iphone': {
    title: 'Télécharger une vidéo Bilibili dans Photos', description: description('Bilibili'), intro: intro('Bilibili'),
    tips: [{ title: 'Vérifier la version de la vidéo', text: 'Le titre renvoyé dans cet exemple désigne une version avec musique de fond. Si la page propose plusieurs versions ou parties, vérifiez le titre, la miniature et le contenu téléchargé pour garder la bonne version.' }],
    faq: [{ question: 'Puis-je utiliser un lien court b23.tv ?', answer: 'L’exemple utilise un lien court b23.tv copié depuis le partage de la vidéo, puis collé directement pour la télécharger. Vérifiez qu’il correspond à la vidéo souhaitée.' }, { question: 'Toutes les vidéos proposent-elles du 1080p ?', answer: 'Non. Le 1080p est disponible dans cet exemple. Les résolutions proposées dépendent des résultats de l’extraction.' }, { question: 'L’exemple télécharge-t-il toutes les parties d’une vidéo ?', answer: 'Non. Il télécharge une seule vidéo et ne montre pas le téléchargement de toutes les parties d’une publication en plusieurs épisodes.' }, { question: 'Comment télécharger plusieurs vidéos du même créateur ?', answer: 'Copiez le lien de son profil et chargez la liste dans l’onglet « Lot ». Consultez le tutoriel consacré aux profils Bilibili.' }],
    steps: [
      { title: 'Copier le lien de la vidéo Bilibili', text: 'Ouvrez la vidéo dans Bilibili et copiez son lien depuis le partage. Pour plusieurs publications du même créateur, consultez le tutoriel de téléchargement de profil par lot.' }, paste('Bilibili'),
      { title: 'Choisir la résolution et télécharger', text: 'Dans « Sélectionner la qualité » (Select Quality), vérifiez le titre et la miniature. Comparez la résolution, le format et la taille estimée, puis touchez « Télécharger » (Download). La qualité disponible dépend de la vidéo.', sections: [
        { title: 'Comparer résolution et taille du fichier', text: 'Une résolution supérieure conserve généralement davantage de détails, mais peut occuper plus d’espace. Comparez les tailles estimées selon vos besoins. Les valeurs de cet exemple ne s’appliquent pas à toutes les vidéos.' }, defaultQuality
      ] }, progress,
      { ...save, sections: [
        { title: 'Vérifier le fichier final', text: 'La taille finale peut différer de l’estimation. Vérifiez les informations du fichier téléchargé et sa lecture.' },
        { title: 'Comprendre le compteur 1 / 63', text: '1 / 63 signifie que vous consultez le premier des 63 éléments de la liste d’aperçu. Ce n’est pas le nombre de parties de cette vidéo. Utilisez les flèches et vérifiez le titre et la source de chaque élément.' },
        { title: 'Ajouter la vidéo téléchargée dans Photos', text: saveExplanation }
      ] }
    ], exampleNote: `${example('Bilibili')} Le lien b23.tv de l’exemple télécharge une seule vidéo désignée comme version avec musique de fond. Il ne montre pas le téléchargement de toutes les parties.`
  },
  'download-youtube-video-iphone': {
    title: 'Télécharger une vidéo YouTube', description: description('YouTube'), intro: intro('YouTube'),
    tips: [{ title: 'Le fichier téléchargé n’a pas de son', text: 'Vérifiez le type de média sélectionné, puis essayez une autre version vidéo disponible. L’outil de fusion audio et vidéo nécessite une piste audio correspondante dont vous disposez séparément.' }],
    faq: [{ question: 'Puis-je télécharger directement une chaîne entière ?', answer: 'Une chaîne utilise le parcours par lot, distinct du téléchargement d’une vidéo. Utilisez le lien de chaîne ou de liste et sélectionnez les publications effectivement renvoyées.' }, { question: 'La haute définition est-elle garantie ?', answer: 'Non. Les médias disponibles dépendent du fichier source, de la réponse de la plateforme et des conditions d’accès. Vérifiez les résultats de l’extraction.' }],
    steps: [{ title: 'Copier le lien YouTube', text: 'Dans YouTube, ouvrez la vidéo et choisissez « Partager » (Share), puis « Copier le lien » (Copy link). Pour plusieurs vidéos d’une playlist, utilisez le tutoriel consacré aux playlists.' }, paste('YouTube'), quality, progress, save], exampleNote: example('YouTube')
  },
  'download-instagram-reels-iphone': {
    title: 'Télécharger un Reel Instagram', description: description('Instagram'), intro: intro('Instagram'),
    tips: [{ title: 'Compte privé ou publication indisponible', text: 'Posséder un lien ne donne pas une autorisation d’accès. Une connexion particulière, une publication supprimée ou un lien expiré peut empêcher le parcours par lien public de récupérer le média.' }],
    faq: [{ question: 'Ce parcours s’applique-t-il aux Stories Instagram ?', answer: 'Ce tutoriel porte uniquement sur les Reels. Les liens, la durée de disponibilité et les conditions d’accès des Stories diffèrent. Le résultat obtenu avec un Reel ne prouve pas la prise en charge d’une Story.' }, { question: 'Comment enregistrer plusieurs vidéos d’un même créateur ?', answer: 'Utilisez son lien de profil dans le parcours par lot. Consultez le tutoriel consacré aux profils Instagram.' }],
    steps: [{ title: 'Copier le lien du Reel', text: 'Ouvrez le Reel dans Instagram, choisissez « Partager » (Share), puis « Copier le lien » (Copy link). Utilisez le lien de la publication, pas celui du profil.' }, paste('Instagram'), progress, save], exampleNote: example('Instagram')
  },
  'download-x-twitter-video-iphone': {
    title: 'Télécharger une vidéo X (Twitter)', description: description('X'), intro: intro('X'),
    tips: [{ title: 'Le média détecté n’est pas la bonne vidéo', text: 'Vérifiez si le lien mène à la publication originale, à une citation ou à un profil. Examinez les médias effectivement détectés au lieu de vous fier uniquement au texte de la publication.' }],
    faq: [{ question: 'Que faire si le compte exige une connexion ?', answer: 'Ce contenu peut être soumis à des conditions d’accès. Copier un lien ne contourne pas la connexion, les comptes privés ni les autres contrôles d’accès.' }, { question: 'Puis-je extraire le son après le téléchargement ?', answer: 'Oui, utilisez l’outil d’extraction audio sur une vidéo enregistrée qui possède une piste audio. Le format de sortie dépend des options réellement proposées par l’outil.' }],
    steps: [{ title: 'Copier le lien de la publication vidéo', text: 'Dans X, ouvrez la publication contenant la vidéo, puis le partage, et choisissez « Copier le lien » (Copy Link).' }, paste('X'), quality, progress, save],
    exampleNote: `${example('X')} Le bouton « Set up » au centre de la capture concerne X Chat. L’entrée de copie du lien se trouve en bas à gauche.`
  }
};
