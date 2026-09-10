import type { TutorialCopy } from '../../types';
const enable = 'Dans ClipDock, ouvrez « Extraction » (Extract), puis « Vidéo » (Video). Activez « Remplir à partir du Presse-papiers » (Fill from Clipboard), « Liens de téléchargement automatique » (Auto-download Links) et « Détecter en arrière-plan » (Detect in Background). Pour recevoir des alertes, activez « Notifier lorsque les téléchargements en arrière-plan sont terminés ou échouent » dans « Paramètres de téléchargement » et autorisez les notifications du système.';
const review = 'Copiez d’abord un lien et vérifiez que ClipDock l’a reçu. Gardez l’image dans l’image active pendant votre navigation. À la fin, ouvrez « Gestion » (Manager) pour consulter les tâches terminées ou en échec et enregistrer les vidéos dans Photos si nécessaire.';
const exampleNote = 'La démonstration montre la détection des liens copiés en arrière-plan et la création de tâches. Une notification ne prouve pas que chaque fichier est téléchargé ou enregistré dans Photos.';
export const copy: Record<string, TutorialCopy> = {
  'copy-link-auto-download-iphone': {
    title: 'Télécharger automatiquement les liens copiés', description: 'Activez le téléchargement par copie de liens sur iPhone et iPad. Gardez l’image dans l’image active pour créer des téléchargements à partir des liens de partage copiés.',
    intro: 'Ce mode convient pour choisir des vidéos une par une dans différentes publications. Une fois les options activées, ClipDock détecte les liens copiés dans l’application source et crée les téléchargements. Le téléchargement par lot utilise, lui, un lien de profil ou de liste pour sélectionner plusieurs publications.',
    tips: [{ title: 'Le lien copié ne lance aucun téléchargement', text: 'Vérifiez les options activées, la compatibilité du lien, le réseau et les demandes du système. Si le collage manuel échoue aussi, examinez d’abord le lien source. Si le collage manuel fonctionne, vérifiez les conditions de fonctionnement du téléchargement automatique.' }],
    faq: [{ question: 'La détection continue-t-elle après fermeture de l’app ou verrouillage ?', answer: 'Gardez l’image dans l’image active pour la détection en arrière-plan. Le verrouillage, la fermeture forcée ou la gestion des ressources par iOS peuvent l’interrompre. Si un lien copié ne déclenche rien, revenez dans ClipDock vérifier son état.' }, { question: 'Est-ce la même chose que télécharger un profil par lot ?', answer: 'Non. Ce mode reçoit les liens de partage que vous copiez un par un. Le mode par lot extrait plusieurs publications à partir d’un seul lien de profil ou de liste.' }],
    steps: [
      { title: 'Activer le téléchargement automatique', text: enable },
      { title: 'Garder la fenêtre flottante active', text: 'Passez dans l’application vidéo en gardant la fenêtre d’image dans l’image de ClipDock active. Le message « Copiez un lien partagé pour télécharger automatiquement » (Copy a link to download) indique que vous pouvez copier un lien. Si la fenêtre gêne, faites-la glisser au bord de l’écran sans la fermer.' },
      { title: 'Copier le lien de la vidéo', text: 'Ouvrez le partage de la vidéo souhaitée et choisissez « Copier le lien » (Copy link). Vous n’avez pas besoin de revenir dans ClipDock pour le coller. Vous pouvez ranger la fenêtre au bord de l’écran, mais gardez l’image dans l’image active.' },
      { title: 'Continuer à parcourir les vidéos et vérifier les résultats', text: review }
    ], exampleNote
  },
  'copy-tiktok-links-background': {
    title: 'Télécharger tout en parcourant TikTok', description: 'Copiez les liens des vidéos TikTok qui vous intéressent sur iPhone ou iPad. ClipDock crée les téléchargements en arrière-plan ; vérifiez ensuite les résultats.',
    intro: 'Pour garder quelques vidéos de différents créateurs, copiez leurs liens au fil de votre sélection. Préparez le téléchargement automatique de ClipDock, puis revenez parcourir TikTok.',
    tips: [{ title: 'Quand utiliser le téléchargement de profil par lot ?', text: 'Pour plusieurs publications du même créateur, utilisez plutôt le lien de son profil. Pour quelques vidéos de créateurs différents, continuez à copier les liens un par un.' }],
    faq: [{ question: 'Pourquoi un tutoriel distinct du téléchargement TikTok classique ?', answer: 'Le tutoriel classique explique comment coller un lien dans ClipDock. Ici, vous créez les téléchargements en copiant des liens tout en parcourant TikTok.' }, { question: 'Que faire si le système demande une autorisation ?', answer: 'Accordez les autorisations nécessaires au presse-papiers ou aux notifications. Si vous avez fermé la demande, revenez dans ClipDock vérifier que le mode est prêt avant de copier d’autres liens.' }],
    steps: [
      { title: 'Activer les options de téléchargement en arrière-plan', text: enable },
      { title: 'Revenir dans TikTok', text: 'Parcourez TikTok en gardant la fenêtre d’image dans l’image de ClipDock active. Quand « Copiez un lien partagé pour télécharger automatiquement » (Copy a link to download) apparaît, choisissez les vidéos à enregistrer.' },
      { title: 'Ouvrir le partage et copier le lien', text: 'Sur la vidéo souhaitée, ouvrez le partage et choisissez « Copier le lien » (Copy link), puis continuez à regarder. Aucun aller-retour entre les applications n’est nécessaire. Rangez la fenêtre au bord de l’écran si elle gêne, sans fermer l’image dans l’image.' },
      { title: 'Continuer à parcourir les vidéos et vérifier les résultats', text: review }
    ], exampleNote
  }
};
