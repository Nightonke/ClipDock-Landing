import type { Locale } from './locales';

type PlatformCopy = {
 downloadTitle: string; downloadIntro: string; iosSummary: string; androidSummary: string;
 androidDetails: string; iosScope: string; privacyTitle: string; privacyText: string;
 androidAllowance: string; deletion: string; androidLanguage: string;
};

export const platformCopy: Record<Locale, PlatformCopy> = {
 'en-US': {
  downloadTitle: 'Choose your ClipDock', downloadIntro: 'Download the app for your device. Features, free allowances, purchases, and privacy practices differ by platform.',
  iosSummary: 'Save supported media, extract existing YouTube captions, and process local videos on iPhone and iPad. The tutorials on this site show the iOS edition.',
  androidSummary: 'Save supported links, use the floating paste button, manage your files, and edit video and audio on Android.',
  androidDetails: 'Explore ClipDock for Android', iosScope: 'iPhone / iPad features and demos',
  privacyTitle: 'Privacy by platform', privacyText: 'The iOS App Store label states no data collected. Android processes account, download, and diagnostic data. Read the policy for your version.',
  androidAllowance: 'Android free downloads require Google sign-in and use a limited allowance. Verified Google Play Premium access works without a separate ClipDock sign-in.',
  deletion: 'Delete Android account and data', androidLanguage: '',
 },
 'zh-Hans': {
  downloadTitle: '选择适合你设备的 ClipDock', downloadIntro: '按设备选择下载。两端的功能、免费额度、购买方式和隐私处理有所不同。',
  iosSummary: '在 iPhone 和 iPad 上保存支持的媒体、提取 YouTube 已有字幕并处理本地视频。本站现有教程展示 iOS 版本。',
  androidSummary: '在 Android 上保存支持的链接，使用悬浮粘贴按钮、管理文件，并处理视频和音频。',
  androidDetails: '了解 ClipDock 安卓版', iosScope: 'iPhone / iPad 功能与演示',
  privacyTitle: '按平台了解隐私', privacyText: 'iOS 的 App Store 标签声明不收集数据；Android 会处理账号、下载和诊断数据。请查看对应版本的政策。',
  androidAllowance: 'Android 免费下载需要 Google 登录，并使用有限额度；已验证的 Google Play Premium 权益无需另行登录 ClipDock。',
  deletion: '删除 Android 账号与数据', androidLanguage: '',
 },
 'zh-Hant': {
  downloadTitle: '選擇適合你裝置的 ClipDock', downloadIntro: '依裝置選擇下載。兩個平台的功能、免費額度、購買方式與隱私處理有所不同。',
  iosSummary: '在 iPhone 和 iPad 上儲存支援的媒體、擷取 YouTube 現有字幕並處理本機影片。本站現有教學展示 iOS 版本。',
  androidSummary: '在 Android 上儲存支援的連結，使用浮動貼上按鈕、管理檔案，並處理影片與音訊。',
  androidDetails: '了解 ClipDock Android 版（英文）', iosScope: 'iPhone / iPad 功能與示範',
  privacyTitle: '各平台的隱私處理', privacyText: 'iOS 的 App Store 標籤聲明不收集資料；Android 會處理帳號、下載與診斷資料。請查看對應版本的政策。',
  androidAllowance: 'Android 免費下載需要 Google 登入，並使用有限額度；已驗證的 Google Play Premium 權益無需另行登入 ClipDock。',
  deletion: '刪除 Android 帳號與資料', androidLanguage: '（英文）',
 },
 'ja': {
  downloadTitle: 'デバイスに合う ClipDock を選択', downloadIntro: 'お使いのデバイス向けのアプリをダウンロードしてください。機能、無料枠、購入方法、データの取り扱いはプラットフォームによって異なります。',
  iosSummary: 'iPhone と iPad で対応メディアを保存し、YouTube の既存字幕を抽出し、端末内の動画を編集できます。このサイトの既存チュートリアルは iOS 版です。',
  androidSummary: 'Android で対応リンクを保存し、フローティング貼り付けボタン、ファイル管理、動画・音声編集を利用できます。',
  androidDetails: 'Android 版 ClipDock を見る（英語）', iosScope: 'iPhone / iPad の機能とデモ',
  privacyTitle: 'プラットフォーム別のプライバシー', privacyText: 'iOS の App Store ラベルではデータ収集なしと申告されています。Android 版はアカウント、ダウンロード、診断データを処理します。各版のポリシーをご確認ください。',
  androidAllowance: 'Android の無料ダウンロードには Google ログインが必要で、利用枠に制限があります。確認済みの Google Play Premium は ClipDock への別途ログインなしで利用できます。',
  deletion: 'Android のアカウントとデータを削除', androidLanguage: '（英語）',
 },
 'ko': {
  downloadTitle: '기기에 맞는 ClipDock 선택', downloadIntro: '기기에 맞는 앱을 다운로드하세요. 기능, 무료 이용 한도, 구매 방식 및 개인정보 처리는 플랫폼마다 다릅니다.',
  iosSummary: 'iPhone과 iPad에서 지원되는 미디어를 저장하고, 기존 YouTube 자막을 추출하고, 기기의 동영상을 편집하세요. 이 사이트의 기존 가이드는 iOS 버전을 설명합니다.',
  androidSummary: 'Android에서 지원되는 링크를 저장하고, 플로팅 붙여넣기 버튼과 파일 관리, 동영상 및 오디오 편집 기능을 이용하세요.',
  androidDetails: 'Android용 ClipDock 알아보기 (영어)', iosScope: 'iPhone / iPad 기능 및 데모',
  privacyTitle: '플랫폼별 개인정보 처리', privacyText: 'iOS App Store 라벨에는 데이터 수집 없음으로 표시됩니다. Android는 계정, 다운로드 및 진단 데이터를 처리합니다. 해당 버전의 정책을 확인하세요.',
  androidAllowance: 'Android 무료 다운로드에는 Google 로그인과 제한된 이용 한도가 적용됩니다. 확인된 Google Play Premium은 별도의 ClipDock 로그인 없이 이용할 수 있습니다.',
  deletion: 'Android 계정 및 데이터 삭제', androidLanguage: ' (영어)',
 },
 'es': {
  downloadTitle: 'Elige tu versión de ClipDock', downloadIntro: 'Descarga la app para tu dispositivo. Las funciones, los límites gratuitos, las compras y la privacidad varían según la plataforma.',
  iosSummary: 'Guarda contenido compatible, extrae subtítulos existentes de YouTube y edita vídeos locales en iPhone y iPad. Los tutoriales actuales de este sitio muestran la versión para iOS.',
  androidSummary: 'Guarda enlaces compatibles, usa el botón flotante para pegar, organiza archivos y edita vídeo y audio en Android.',
  androidDetails: 'Descubre ClipDock para Android (en inglés)', iosScope: 'Funciones y demostraciones para iPhone / iPad',
  privacyTitle: 'Privacidad por plataforma', privacyText: 'La ficha de iOS en App Store declara que no se recopilan datos. Android procesa datos de cuenta, descarga y diagnóstico. Consulta la política de tu versión.',
  androidAllowance: 'Las descargas gratuitas en Android requieren iniciar sesión con Google y tienen un límite. El acceso Premium verificado de Google Play no requiere iniciar sesión por separado en ClipDock.',
  deletion: 'Eliminar cuenta y datos de Android', androidLanguage: ' (en inglés)',
 },
 'pt-BR': {
  downloadTitle: 'Escolha sua versão do ClipDock', downloadIntro: 'Baixe o app para seu dispositivo. Recursos, limites gratuitos, compras e práticas de privacidade variam por plataforma.',
  iosSummary: 'Salve mídias compatíveis, extraia legendas existentes do YouTube e edite vídeos locais no iPhone e iPad. Os tutoriais atuais deste site mostram a versão para iOS.',
  androidSummary: 'Salve links compatíveis, use o botão flutuante para colar, organize arquivos e edite vídeo e áudio no Android.',
  androidDetails: 'Conheça o ClipDock para Android (em inglês)', iosScope: 'Recursos e demonstrações para iPhone / iPad',
  privacyTitle: 'Privacidade por plataforma', privacyText: 'A ficha do iOS na App Store declara que não há coleta de dados. O Android processa dados de conta, download e diagnóstico. Consulte a política da sua versão.',
  androidAllowance: 'Os downloads gratuitos no Android exigem login com Google e têm um limite. O acesso Premium verificado do Google Play dispensa um login separado no ClipDock.',
  deletion: 'Excluir conta e dados do Android', androidLanguage: ' (em inglês)',
 },
 'de': {
  downloadTitle: 'Wähle deine ClipDock-Version', downloadIntro: 'Lade die App für dein Gerät herunter. Funktionen, kostenlose Kontingente, Käufe und Datenschutz unterscheiden sich je nach Plattform.',
  iosSummary: 'Speichere unterstützte Medien, extrahiere vorhandene YouTube-Untertitel und bearbeite lokale Videos auf iPhone und iPad. Die bisherigen Anleitungen dieser Website zeigen die iOS-Version.',
  androidSummary: 'Speichere unterstützte Links, nutze die schwebende Einfügetaste, verwalte Dateien und bearbeite Video und Audio auf Android.',
  androidDetails: 'ClipDock für Android entdecken (Englisch)', iosScope: 'Funktionen und Demos für iPhone / iPad',
  privacyTitle: 'Datenschutz nach Plattform', privacyText: 'Laut dem iOS-Datenschutzlabel im App Store werden keine Daten erhoben. Android verarbeitet Konto-, Download- und Diagnosedaten. Lies die Richtlinie deiner Version.',
  androidAllowance: 'Kostenlose Android-Downloads erfordern eine Google-Anmeldung und sind begrenzt. Verifizierter Google Play Premium-Zugang funktioniert ohne separate ClipDock-Anmeldung.',
  deletion: 'Android-Konto und Daten löschen', androidLanguage: ' (Englisch)',
 },
 'fr': {
  downloadTitle: 'Choisissez votre version de ClipDock', downloadIntro: 'Téléchargez l’app pour votre appareil. Les fonctions, quotas gratuits, achats et pratiques de confidentialité varient selon la plateforme.',
  iosSummary: 'Enregistrez les médias compatibles, extrayez les sous-titres existants de YouTube et modifiez des vidéos locales sur iPhone et iPad. Les tutoriels actuels du site présentent la version iOS.',
  androidSummary: 'Enregistrez les liens compatibles, utilisez le bouton flottant de collage, gérez vos fichiers et modifiez des vidéos et de l’audio sur Android.',
  androidDetails: 'Découvrir ClipDock pour Android (en anglais)', iosScope: 'Fonctions et démonstrations pour iPhone / iPad',
  privacyTitle: 'Confidentialité par plateforme', privacyText: 'La fiche iOS de l’App Store indique qu’aucune donnée n’est collectée. Android traite des données de compte, de téléchargement et de diagnostic. Consultez la politique de votre version.',
  androidAllowance: 'Les téléchargements gratuits sur Android nécessitent une connexion Google et sont limités. Un accès Premium Google Play vérifié fonctionne sans connexion ClipDock séparée.',
  deletion: 'Supprimer le compte et les données Android', androidLanguage: ' (en anglais)',
 },
};
