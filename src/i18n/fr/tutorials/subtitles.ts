import type { TutorialCopy } from '../../types';
export const copy: Record<string, TutorialCopy> = {
  'extract-youtube-subtitles-iphone': {
    title: 'Extraire les sous-titres existants de YouTube', description: 'Sur iPhone et iPad, extrayez les sous-titres YouTube avec ClipDock, choisissez une langue et un format, puis enregistrez-les dans Fichiers ou partagez-les.',
    intro: 'Enregistrez les sous-titres déjà disponibles d’une vidéo YouTube pour les lire ou les modifier. Collez le lien, choisissez les pistes et le format, puis enregistrez ou partagez les fichiers.',
    tips: [
      { title: 'Aucun sous-titre trouvé', text: 'Vérifiez que la vidéo s’ouvre normalement et qu’elle propose des sous-titres sur YouTube. Cette fonction ne crée pas de sous-titres lorsqu’il n’en existe pas. Si la vidéo en possède, vérifiez le lien et le réseau, puis réessayez.' },
      { title: 'Des erreurs dans les sous-titres', text: 'Les sous-titres automatiques proviennent de YouTube et peuvent contenir des erreurs de reconnaissance. Après l’exportation, vérifiez les noms, les termes et la synchronisation en les comparant à la vidéo.' }
    ],
    faq: [
      { question: 'Puis-je extraire les sous-titres générés automatiquement ?', answer: 'Oui, si la vidéo les propose. Cherchez les pistes marquées « auto-generated » dans les résultats.' },
      { question: 'Puis-je exporter plusieurs langues à la fois ?', answer: 'Sélectionnez plusieurs pistes ou utilisez « Tout sélectionner », puis « Exporter les sous-titres ». Les langues disponibles dépendent des sous-titres déjà présents sur la vidéo.' },
      { question: 'ClipDock traduit-il ou génère-t-il des sous-titres ?', answer: 'Non. Cette fonction extrait uniquement les sous-titres déjà disponibles sur YouTube. Elle ne traduit pas automatiquement et ne transcrit pas les vidéos sans sous-titres.' },
      { question: 'Les sous-titres sont-ils enregistrés dans Photos ?', answer: 'Les sous-titres sont des fichiers et ne sont pas enregistrés dans Photos. Choisissez l’enregistrement dans Fichiers ou partagez-les avec une autre application.' }
    ],
    steps: [
      { title: 'Coller le lien de la vidéo YouTube', text: 'Copiez le lien de partage de la vidéo dans YouTube. Dans ClipDock, ouvrez « Extraction » (Extract) en bas, puis « Sous-titres » (Subtitles) en haut. Touchez « Coller » (Paste) ou saisissez le lien. Utilisez le lien d’une vidéo précise.' },
      { title: 'Extraire la liste des sous-titres', text: 'Vérifiez le lien, puis touchez « Extraire » (Extract). Attendez pendant l’affichage de « Extraction des sous-titres… » (Extracting captions…). ClipDock récupère les sous-titres déjà disponibles sur YouTube ; il ne transcrit pas l’audio d’une vidéo sans sous-titres.' },
      { title: 'Choisir les langues', text: 'Touchez le cercle à gauche des pistes souhaitées ou « Tout sélectionner » (Select all). Vérifiez la langue et la mention éventuelle de génération automatique. Les pistes proposées dépendent de la vidéo.' },
      { title: 'Choisir le format du fichier', text: 'Touchez « Format : SRT » (Format: SRT) pour ouvrir « Format des sous-titres » (Caption format). Choisissez SRT, VTT, TTML, JSON3, SRV1, SRV2 ou SRV3 selon le logiciel destinataire. Vérifiez les formats disponibles sous chaque piste sélectionnée.', sections: [
        { title: 'Quel format choisir ?', text: 'Commencez par SRT si vous n’avez pas de contrainte particulière. Pour un lecteur web, choisissez VTT s’il le demande. Si le logiciel destinataire impose un format, utilisez celui qu’il prend en charge.' }
      ] },
      { title: 'Enregistrer ou partager les sous-titres', text: 'Une fois les pistes et le format choisis, touchez « Exporter les sous-titres » (Export captions). Le nombre entre parenthèses correspond aux pistes sélectionnées. Dans « Exporter vers » (Export to), choisissez « Enregistrer dans Fichiers » (Save to Files) ou « Partager » (Share).', sections: [
        { title: 'Enregistrer dans Fichiers', text: 'Choisissez l’enregistrement dans Fichiers, indiquez un emplacement et confirmez. Ouvrez ensuite l’application Fichiers pour vérifier les sous-titres.' },
        { title: 'Partager avec une autre application', text: 'Choisissez le partage, puis l’application ou le mode d’envoi dans la feuille de partage du système. Vous exportez des fichiers de sous-titres. Enregistrez et utilisez uniquement les contenus dont vous détenez les droits ou pour lesquels vous avez une autorisation.' }
      ] }
    ],
    exampleNote: 'Les captures en anglais montrent deux pistes de sous-titres anglais et s’arrêtent au menu d’exportation. Elles ne montrent pas l’enregistrement terminé. Ce parcours extrait les sous-titres existants, sans traduction ni transcription audio.'
  }
};
