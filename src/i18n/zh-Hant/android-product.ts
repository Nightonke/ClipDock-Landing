import type { AndroidProductCopy } from '../android-product';

export const androidProduct = {
 title: 'ClipDock Android 版｜影片下載與本機影音工具',
 description: '在 Android 儲存支援的網頁影片，使用浮動貼上按鈕下載、管理檔案，並裁剪或轉碼本機素材。了解免費額度、Google 登入與 Premium。',
 heading: '儲存影片，繼續創作。',
 intro: 'ClipDock Android 版結合支援連結的下載功能、網頁影片瀏覽器、媒體庫與本機影音工具。選擇所需素材、確認可用畫質，再儲存或分享結果。',
 requirements: 'Android 8.0 或以上版本 · 免費下載 App · 提供 App 內購買',
 featuresTitle: '從一個連結，到可用的素材',
 features: [
  { title: '從支援的連結下載', text: '貼上 X、Instagram、Facebook、TikTok、抖音、小紅書或嗶哩嗶哩等支援來源的分享連結，也可使用 HTTP/HTTPS 媒體直連及支援的 HLS 隨選串流。依來源提供的結果選擇畫質與格式；實際可用資源取決於個別連結。' },
  { title: '複製連結，再點浮動按鈕', text: '開啟 ClipDock 時，可啟用自動填入或下載連結。若要在其他 App 中使用複製的連結，可自行啟用浮動貼上控制項並授予「顯示在其他應用程式上層」權限，複製後再點選浮動按鈕。已開始的下載可在背景繼續，並顯示通知。' },
  { title: '從網頁中選擇影片', text: '在內建「網頁影片」瀏覽器開啟頁面並播放影片，長按支援的影片，或開啟偵測到的影片清單以選擇資源。不支援受 DRM 保護的內容與直播串流。常用網頁可加入書籤，也可從最近瀏覽的網址重新開啟。' },
  { title: '管理檔案，處理本機素材', text: '預覽、重新命名、搜尋、篩選及分享影片、圖片與音訊。匯入本機素材後，可裁剪、轉碼、拼接、調整畫布、旋轉或處理聲音，另有浮水印、GIF、動態相片（Motion Photos）與擷取畫面等工具。儲存或分享前請先預覽成品；可用選項依 App 版本與購買狀態而定。' },
 ],
 accountsTitle: '免費下載額度、帳號與 Premium',
 accounts: 'App 提供有限的首次下載免費額度與基本工具。使用免費下載額度需要 Google 登入，剩餘額度會顯示於 App 內。刪除檔案或重新建立帳號不會重設額度。經驗證的 Google Play Premium 權益無需另行登入 ClipDock 即可使用。',
 purchases: 'Premium 提供週、月、年訂閱或一次性解鎖選項。價格與包含的功能以 Google Play 購買畫面為準。續訂方案需在 Google Play 管理。購買與帳號規則適用於對應版本，選擇方案前請閱讀條款。',
 privacyTitle: '了解本機檔案與資料處理',
 privacy: '下載、匯入的媒體與本機編輯結果會保存在裝置上，除非你主動分享或匯出。帳號服務、連結解析、購買驗證與下載診斷會依 Android 隱私政策處理相關資訊；iOS 的隱私標籤不適用於此版本。',
 faqTitle: '開始使用前',
 faq: [
  { question: '下載完成後，檔案在哪裡？', answer: '檔案會出現在 ClipDock 媒體庫，可預覽、將支援的檔案儲存至相簿，或分享給其他 App。下載完成與成功匯出至相簿是兩個步驟。' },
  { question: '為什麼連結或背景工作會失敗？', answer: '來源變動、資源失效、登入要求、網路狀況或 Android 電池限制都可能中斷工作。請先檢查原始連結與錯誤訊息，排除原因後再試。支援某個來源不表示每支影片或每種畫質都能下載。' },
  { question: '網站上的 iPhone 教學也適用於 Android 嗎？', answer: '本站現有截圖教學展示 iPhone 與 iPad 版本。Android 的操作按鈕、權限、免費額度與部分功能有所不同；Android 版可先參考本頁介紹及 Google Play 商店截圖。' },
  { question: '如何刪除帳號或取消訂閱？', answer: '請參閱下方的 Android 帳號與資料刪除說明。刪除帳號與取消訂閱是不同操作：續訂方案需在 Google Play 管理。刪除說明也提供無需重新安裝 App 的申請方式。' },
 ],
 rights: '請僅儲存及處理你擁有或獲准使用的內容，並遵守來源限制與存取控制。',
 other: '選擇其他平台',
} satisfies AndroidProductCopy;
