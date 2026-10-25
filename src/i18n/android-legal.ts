import type { LegalDocument } from "./legal";
import type { Locale } from "./locales";

export const androidLegalLocales = ["en-US", "zh-Hans"] as const;
export type AndroidLegalLocale = (typeof androidLegalLocales)[number];
export type AndroidLegalPage = "privacy" | "terms" | "delete-account";
export const androidLegalPath = (locale: AndroidLegalLocale, page: AndroidLegalPage) =>
	`${locale === "en-US" ? "" : `/${locale}`}/android/${page}/`;

type AndroidLegalCopy = {
	label: string;
	effectiveDateLabel: string;
	effectiveDateText: string;
	privacy: LegalDocument;
	terms: LegalDocument;
	"delete-account": LegalDocument;
};

export const androidLegalContent: Record<AndroidLegalLocale, AndroidLegalCopy> = {
	"en-US": {
		label: "ClipDock for Android · Google Play",
		effectiveDateLabel: "Last updated:",
		effectiveDateText: "October 25, 2026",
		privacy: {
			title: "Android Privacy Policy",
			description: "How ClipDock for Android handles Google sign-in, download links and diagnostics, purchases, permissions, retention, and deletion requests.",
			content: `
## 1. Scope and contact

This policy applies to **ClipDock: Web Video Downloader for Android**, package **com.nightonke.android.clipdock**, provided by Weiping Huang (Smith Night). It covers the Android app, its supporting cloud services, and related support requests. The App Store edition has a separate policy. Contact [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com) about privacy or [request account and data deletion](/android/delete-account/).

ClipDock processes some media locally and sends some information to its services to sign you in, enforce download allowances, verify purchases, resolve links, and understand download failures.

## 2. Google sign-in and download allowance

You can open ClipDock, browse websites, and manage local files without a ClipDock account. Using the free download allowance requires Google sign-in. A verified Google Play membership can provide paid access without signing in to a ClipDock account.

When you choose Google sign-in, Google provides a sign-in token containing account identity information, which may include your email and profile information. Our server verifies that token. It stores a hashed Google account identifier, remaining free-download balance, download allowance transactions, account timestamps, and sign-in session records. The account database does not retain the raw Google token or your Google profile. Your email is displayed and stored locally in the app. We do not receive your Google password.

The identifier links your allowance across installations. It is pseudonymous, not fully anonymous. A session is valid for up to 30 days unless ended or invalidated earlier. Google handles its services under its [Privacy Policy](https://policies.google.com/privacy).

## 3. Links, websites, and downloaded media

ClipDock uses links you enter, paste, share, or select in the browser to identify downloadable resources. Depending on the source and extraction route, links and related request information are sent to our cloud services and media-link resolution providers, including MeowLoad and SnapAny. Source websites and media hosts receive the network requests needed to open pages and download the content you select, including your IP address and applicable request headers. Browser pages may use cookies and local storage. Where needed to access your selected content, the app may use the source site's cookies or referer information for the media request.

**Optional website-login retry:** if an eligible YouTube link requires website sign-in, the app explains that tapping **Done Logging In** sends the necessary YouTube cookies and selected page URL to ClipDock's cloud retry service and its supporting cookie-extraction service. These cookies can represent a signed-in website session. After a successful retry, the app can reuse that locally stored session for later eligible retries until it is cleared or becomes invalid. The account/extraction proxy handles the cookie material for the request without logging or caching it. This website session is separate from Google sign-in for your ClipDock allowance. You can decline the retry or clear website data.

Downloaded or imported videos, audio, thumbnails, local task records, and editing results are stored on your device. The local editing tools do not upload your media files to us merely to trim, convert, or otherwise process them. This does not mean that links or download diagnostics remain only on your device. Files you explicitly share, export, or save to a gallery are also handled by the destination you choose.

## 4. Download diagnostics and service security

The release app sends extraction and download attempt reports to our cloud service. Reports can include:

- A randomly generated installation identifier; task, request, and attempt identifiers; and retry relationships.
- App version, Android version, device model, language, device region, and an IP-derived country code. Country-level information is not GPS location.
- Source links or identifiers, source host, timestamps, download entry point, extraction route, success/failure/cancellation, error codes, and membership status.

Reports for manually entered or shared links can contain the **full input URL**, including its query parameters. Encoding a URL with Base64 does not anonymize it. Browser-origin reporting removes URL usernames, passwords, query parameters, and fragments. The diagnostic reports do not include your Google sign-in token, purchase token, website cookies, or media request headers. Those credentials may be processed separately for their intended authentication, purchase, or source-access functions.

We use reports to investigate failures, measure service reliability, and improve supported download workflows. Reporting is enabled in the release app; this version does not provide a user-facing reporting switch. Reports that cannot be sent immediately may be queued locally and retried. Deleting a video from the local library does not delete its diagnostic report.

Google Play Integrity supplies app/device/licensing integrity information used to protect our services against abuse. Network and hosting providers also process connection information such as IP addresses, request times, and security logs.

## 5. Purchases

Google Play processes payments. ClipDock and its server use purchase tokens, product and entitlement information, and Google verification responses to check membership, restore eligible purchases, and prevent fraud. We do not receive your full payment card details or Google password. The Google Play purchasing account may differ from the Google account signed in to ClipDock. Account deletion does not cancel a subscription or delete your Google Play purchase history.

## 6. Clipboard, permissions, and local choices

- **Clipboard:** pasting, foreground link detection, or automatic download uses the clipboard features you enable. The floating paste control is started by you; tap it to read the copied link while another app is open. Close it to stop the floating control.
- **Display over other apps:** used for the visible floating download control. You can withdraw this permission in Android Settings.
- **Foreground services and notifications:** keep user-started downloads, media processing, or playback visible while work continues. Controls in the app or notification let you stop the applicable operation.
- **Photos and files:** system pickers grant access to media you choose; gallery export writes the selected output. Older Android versions may request storage permission for saving files.

You can change available permissions and optional clipboard features, clear browser site data, and remove local media. Disabling a required permission can limit the related feature.

## 7. Recipients, security, and international processing

Information is handled by us and service providers as needed for the functions above: Google for identity, billing, and integrity; Tencent Cloud/CloudBase for cloud processing and storage; Country.is for IP-based country lookup; link-resolution services for selected links; and website, CDN, and email providers for delivery and support. Source websites and destinations you independently use have their own policies. Information may be processed outside your country, including Hong Kong, mainland China, and the United States.

Our account, purchase-verification, and diagnostic endpoints use HTTPS. Credentials stored by the app use Android Keystore-backed protection where implemented. Source websites may offer unencrypted HTTP content; their transport is controlled by the source. No security measure is absolute. We do not sell personal information. We may disclose information when required by law, to address abuse and protect rights, or at your direction.

## 8. Retention and deletion

- **Local media:** remains until you delete it or the relevant app data. Gallery, exported, shared, and backup copies are separate.
- **Active account records:** retained to maintain your sign-in and download allowance. Session validity is limited as described above; ending a session invalidates access.
- **Account deletion:** deletes cloud sign-in sessions and account-linked download allowance history and invalidates old sessions. A restricted record of your hashed account identifier, remaining allowance, and necessary deletion/security state is retained to prevent repeated free allowances and unsafe deletion retries. This is retained pseudonymous information, not anonymization. There is no fixed automatic expiry for the anti-abuse balance record; it is retained while needed to enforce that allowance, subject to applicable deletion rights.
- **Download diagnostics:** held separately from Google account records and associated with an installation identifier. This version does not automatically erase them when you delete a video or ClipDock account, and no fixed automatic deletion interval is currently applied. You can request deletion; we may need limited information to identify the installation or reports concerned. We explain any information that must be retained for security or legal reasons.
- **Support and infrastructure records:** kept as needed to respond, resolve issues, secure services, or meet applicable obligations. Provider-managed logs and backups may have separate retention cycles.

See [Delete your ClipDock account and data](/android/delete-account/) for the in-app path and a web-accessible request method. You do not need to reinstall the app to initiate a request. Deleting an account does not remove local videos, delete your Google account, or cancel a Google Play subscription. We cannot remotely erase copies stored only on your device or in third-party destinations.

## 9. Your rights and support

Depending on applicable law, you may request access, correction, deletion, restriction, objection, or a copy of personal information we hold. Email [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com). We may request the minimum information needed to verify your identity and locate the relevant data. Do not send passwords, sign-in tokens, payment card numbers, or unnecessary private media. If you contact support, we receive your email, message, and any attachments you choose to send.

ClipDock is not directed to children. If you believe a child has provided personal information, contact us so we can investigate and handle it appropriately. We will update this policy when our practices change and provide notice or obtain consent where required. See the [Android Terms of Use](/android/terms/).
`,
		},
		terms: {
			title: "Android Terms of Use",
			description: "Terms for ClipDock on Google Play: permitted content, free downloads, memberships, subscriptions, restoration, and support.",
			content: `
## 1. Scope

These terms cover ClipDock: Web Video Downloader for Android, provided by Weiping Huang (Smith Night), and its supporting services. Read them with the [Android Privacy Policy](/android/privacy/). Use ClipDock only if you can accept these terms under applicable law, or with the required parent or guardian involvement.

## 2. Downloads and your content

ClipDock provides link extraction, webpage video detection, downloads, a local media library, and video/audio tools. Availability depends on the source, device, network, permissions, app version, region, and purchase status. Supporting a website does not guarantee that every link or resolution will be available.

Download, edit, and share only content you own, are authorized to use, or are otherwise legally entitled to use. Public availability alone is not permission. Respect copyright, privacy, and source-platform rules. Do not bypass DRM, paywalls, authentication, or access controls. Editing or removing marks does not change ownership or grant rights. ClipDock is not affiliated with a platform merely because it supports links from it.

Keep backups and check exported results before deleting originals. You remain responsible for your media and its use.

## 3. Free allowance and accounts

Basic app access is free. Free downloads use an account-based introductory allowance displayed in the app. Deleting a file does not restore a used download. Deleting and recreating a ClipDock account does not grant a new introductory allowance. Sign-in, account deletion, and the limited anti-abuse record are explained in the privacy policy. A verified Google Play membership can grant paid access without a ClipDock Google sign-in.

## 4. Google Play purchases and subscriptions

Paid features may be offered through recurring subscriptions or a one-time purchase. The price, billing period, renewal terms, eligibility, and included features are shown in the app and Google Play purchase screen before purchase. Google Play processes payment. Subscriptions renew under the terms shown unless canceled; cancel through **Google Play → profile → Payments & subscriptions → Subscriptions**. See [Google's cancellation instructions](https://support.google.com/googleplay/answer/7018481).

Uninstalling ClipDock or deleting a ClipDock account does not cancel a subscription. Cancellation normally leaves access until the end of the paid period, subject to Google Play's displayed terms, refunds, and applicable law. Use the Google Play account that made the purchase to restore eligible access. A separate ClipDock sign-in does not transfer purchase ownership between Google accounts or between the App Store and Google Play.

A lifetime option, if offered, is a one-time purchase of the eligible features described at purchase for the supported life of the product. It does not guarantee that every third-party website or future service will remain available indefinitely. Paid access does not grant rights to third-party content.

For billing problems or refunds, follow [Google Play's refund process](https://support.google.com/googleplay/answer/2479637) or contact us for help with ClipDock access. Refund eligibility follows applicable policies and law; nothing here limits mandatory consumer rights.

## 5. Responsible service use

Do not interfere with the service, evade purchase validation or allowance controls, distribute malicious or unlawful content, or make abusive automated requests. Software and third-party materials remain the property of their respective owners. Open-source components remain subject to their own licenses. Restrictions do not override rights that applicable law gives you.

## 6. Availability, changes, and responsibility

We may change supported sources and features for technical, security, legal, or operational reasons. We will provide notices and remedies required by law and seek to avoid materially reducing active paid benefits during an existing paid period. Source-site changes, removed content, regional restrictions, or network failures can interrupt downloads.

To the extent permitted by law, the service is provided as available without a guarantee of uninterrupted operation, compatibility with every file, or preservation of your data. Limits on liability do not exclude mandatory warranties, liability that cannot lawfully be excluded, or consumer rights in your jurisdiction.

You may stop using the app and [request account/data deletion](/android/delete-account/). We may restrict access for abuse or breaches of these terms. Ending app use does not itself cancel store subscriptions. We may revise these terms and provide notice of material changes where required.

## 7. Contact

For support, privacy, purchases, or disputes, contact [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com). This does not prevent you from exercising remedies available under applicable law.
`,
		},
		"delete-account": {
			title: "Delete your ClipDock account and data",
			description: "Request deletion of your ClipDock Android account and associated data, in the app or by email without reinstalling the app.",
			content: `
This page is for **ClipDock: Web Video Downloader for Android** (com.nightonke.android.clipdock), provided by **Weiping Huang (Smith Night)**.

## Delete your account in the app

1. Open ClipDock and go to **Me → Google account**.
2. Choose **Delete ClipDock account** and read the deletion notice.
3. Finish or cancel pending downloads on your devices and allow the balance to sync, then confirm deletion. If a network error occurs, reconnect and use **Retry account deletion**.

Deletion invalidates sign-in sessions, removes cloud account-linked download allowance history, and clears local sign-in information after the server confirms completion.

## Request deletion without the app

You can initiate an account or data deletion request by email even if you have uninstalled ClipDock:

**[Email a deletion request](mailto:daysinyear@foxmail.com?subject=ClipDock%20Android%20account%20and%20data%20deletion%20request)**

Or write to **daysinyear@foxmail.com** with the subject **“ClipDock Android account and data deletion request”**. Tell us whether you want to delete your ClipDock account and associated data, download diagnostic records, or other information you supplied. Include the Google email used to sign in and, if known, the app version and approximate dates relevant to diagnostic records. You may request deletion of diagnostics without deleting the account.

The link opens your email app; nothing is sent until you send the message. We will follow up to verify ownership and locate the relevant data, using only necessary information. **Do not send your password, Google sign-in token, payment card details, or private videos.** Sending a request does not immediately delete data; we confirm the result after verification and processing. You do not need to reinstall ClipDock to initiate the request.

## What is deleted, retained, or unaffected

- **Deleted on account deletion:** cloud sign-in sessions and account-linked download allowance transaction history; old account sessions stop working.
- **Retained for abuse prevention:** a hashed Google account identifier, remaining download allowance, and necessary deletion/security state. These prevent repeated introductory allowances and unsafe deletion retries. They are pseudonymous records, not fully anonymous data. No fixed automatic expiry currently applies to the balance record; it is retained while needed to enforce the allowance, subject to applicable deletion rights. Re-registering preserves the remaining balance.
- **Separate diagnostic records:** download reports are linked to an installation, not automatically erased by account deletion, and currently have no fixed automatic deletion interval. Ask us to delete them as part of your request. We may need additional information to locate them and will explain any security or legal retention exception.
- **Local files and external copies:** your downloaded videos, gallery files, exports, shared copies, and backups are not remotely deleted. Manage these on your device or with the destination provider.
- **Google account and purchases:** your Google account and Google Play purchase history are unaffected. **Account deletion does not cancel a subscription.** Cancel separately in [Google Play Subscriptions](https://play.google.com/store/account/subscriptions).

The [Android Privacy Policy](/android/privacy/) explains the information processed and retention in more detail. Support correspondence and necessary request-handling records may be retained to resolve the request and meet applicable obligations.
`,
		},
	},
	"zh-Hans": {
		label: "ClipDock Android 版 · Google Play",
		effectiveDateLabel: "最后更新：",
		effectiveDateText: "2026 年 10 月 25 日",
		privacy: {
			title: "Android 隐私政策",
			description: "说明 ClipDock Android 版的 Google 登录、下载链接与诊断、购买、权限、数据保留和删除申请。",
			content: `
## 1. 适用范围与联系

本政策适用于由 Weiping Huang（Smith Night）提供的 **ClipDock: Web Video Downloader Android 版**（包名 **com.nightonke.android.clipdock**）、配套云服务及相关支持请求。App Store 版本适用单独的政策。隐私问题可联系 [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com)，或查看[账号与数据删除方式](/zh-Hans/android/delete-account/)。

部分媒体处理在设备上完成；登录、下载额度管理、购买验证、链接解析和下载故障分析需要向服务端传输信息。

## 2. Google 登录与下载额度

打开应用、浏览网页和管理本地文件不要求 ClipDock 账号。使用免费下载额度需要 Google 登录。经过验证的 Google Play 会员可在未登录 ClipDock 账号时使用付费权益。

选择 Google 登录后，Google 提供包含账号身份信息的登录令牌，其中可能包括电子邮箱和个人资料。服务端验证令牌，并保存经哈希处理的 Google 账号标识、剩余免费下载额度、额度交易记录、账号时间信息和登录会话。账号数据库不保留原始 Google 令牌或 Google 个人资料；邮箱用于应用内显示并保存在本地。我们不会获得 Google 密码。

账号标识用于跨安装保留额度，它属于假名化信息，并非完全匿名数据。会话有效期最长为 30 天，也可能因退出或失效提前结束。Google 服务适用其[隐私政策](https://policies.google.com/privacy)。

## 3. 链接、网页与媒体

ClipDock 使用您输入、粘贴、分享或在浏览器中选择的链接识别可下载资源。依来源和解析路径，链接及相关请求信息会发送到我们的云服务和媒体链接解析服务商，包括 MeowLoad、SnapAny。打开网页和下载所选内容时，来源网站及媒体主机会收到相应网络请求，包括 IP 地址和适用的请求头。网页可能使用 Cookie 和本地存储；为访问您选择的内容，媒体请求可能需要该网站的 Cookie 或来源页面信息。

**可选的网站登录重试：**符合条件的 YouTube 链接需要网站登录时，应用会说明：点击 **Done Logging In（已完成登录）**将把必要的 YouTube Cookie 和所选网页 URL 发送至 ClipDock 云端重试服务及其配套 Cookie 解析服务。Cookie 可能代表已登录的网站会话。成功重试后，应用可在后续符合条件的重试中复用本地会话，直至网站数据被清除或会话失效。账号／解析代理仅按请求处理 Cookie，不记录或缓存其内容。此网站会话与 ClipDock 免费额度使用的 Google 登录相互独立。您可以放弃重试或清除网站数据。

下载或导入的视频、音频、缩略图、本地任务和编辑结果保存在设备上。本地编辑工具不会仅因裁剪、转换等处理而将媒体文件上传给我们。这不代表链接和下载诊断也只保存在本地。您主动分享、导出或保存到相册的文件，也会由所选目标处理。

## 4. 下载诊断与服务安全

正式版本会向云服务发送提取和下载尝试报告，可能包括：

- 随机生成的安装标识、任务及请求标识、尝试标识和重试关联。
- 应用版本、Android 版本、机型、语言、设备地区和根据 IP 判断的国家代码。国家级信息不是 GPS 定位。
- 来源链接或标识、来源域名、时间、下载入口、解析路径、成功／失败／取消结果、错误码和会员状态。

手动输入或分享链接的报告可能包含**完整输入 URL，包括查询参数**。Base64 编码并不等于匿名化。浏览器来源的上报会去除 URL 中的用户名、密码、查询参数和片段。诊断报告本身不包含 Google 登录令牌、购买令牌、网站 Cookie 或媒体请求头；这些信息可能在各自的登录、购买验证或来源访问功能中另行处理。

报告用于定位故障、统计服务可靠性和改善下载流程。正式版默认启用上报，当前版本没有面向用户的上报开关。暂时无法发送的报告会在本地排队重试。删除本地视频不会删除其诊断报告。

Google Play Integrity 提供应用、设备和许可完整性信息，帮助保护服务和防止滥用。网络与托管服务商还会处理 IP 地址、请求时间及安全日志等连接信息。

## 5. 购买

Google Play 处理付款。ClipDock 及服务端使用购买令牌、商品与权益信息和 Google 验证结果，核实会员、恢复有效购买并防止欺诈。我们不会获得完整银行卡信息或 Google 密码。Google Play 购买账号可与 ClipDock 登录账号不同。删除 ClipDock 账号不会取消订阅，也不会删除 Google Play 购买记录。

## 6. 剪贴板、权限与本地选择

- **剪贴板：**粘贴、前台链接检测或自动下载使用您启用的剪贴板功能。浮窗由您主动开启；在其他应用上方点击浮窗后读取所复制的链接，关闭浮窗可停止该功能。
- **显示在其他应用上层：**用于可见的浮动下载控件，可在 Android 设置中撤销权限。
- **前台服务与通知：**让用户启动的下载、媒体处理或播放在后台继续时保持可见，可通过应用或通知中的相应控件停止操作。
- **照片与文件：**系统选择器授予所选媒体的访问权，导出相册写入所选结果。旧版 Android 保存文件时可能需要存储权限。

您可调整权限和可选剪贴板功能、清除浏览器网站数据、删除本地媒体。拒绝必要权限可能影响对应功能。

## 7. 接收方、安全与跨境处理

我们及服务提供方按上述目的处理信息：Google 提供身份、付款和完整性服务；腾讯云／CloudBase 提供云计算与存储；Country.is 提供基于 IP 的国家查询；链接解析服务处理您选择的链接；网站托管、CDN 和邮件服务提供内容分发与支持。您自行使用的来源网站及分享目标有各自政策。信息可能在您所在国家以外处理，包括香港、中国大陆及美国。

账号、购买验证及诊断接口使用 HTTPS。应用中相应凭据采用 Android Keystore 支持的保护措施。来源网站可能提供未加密的 HTTP 内容，其传输方式由来源决定。任何安全措施都不能保证绝对安全。我们不出售个人信息；可能按法律要求、为处理滥用和保护权利，或按您的指示披露信息。

## 8. 保留与删除

- **本地媒体：**保留至您删除文件或相关应用数据；相册、导出、分享和备份中的副本单独管理。
- **使用中的账号记录：**用于维持登录和额度。会话有效期如上所述，退出或撤销后不可再用于访问。
- **删除账号：**删除云端登录会话及与账号关联的下载额度交易历史，使旧会话失效。为避免重复领取免费额度及不安全的删除重试，会受限保留经哈希处理的账号标识、剩余额度及必要的删除／安全状态。这是假名化保留数据，不是匿名化。防滥用额度记录目前没有固定的自动过期时间，在执行该额度规则所需期间保留，并受适用删除权利约束。
- **下载诊断：**独立于 Google 账号记录，按安装标识关联。当前版本不会在删除视频或 ClipDock 账号时自动删除诊断记录，也未设置固定自动删除周期。您可以申请删除；我们可能需要必要信息定位安装或相关记录，并会说明因安全或法律原因必须保留的部分。
- **支持与基础设施记录：**按回复、排障、保护服务或履行适用义务所需保留；服务商日志和备份可能有单独周期。

[账号与数据删除页](/zh-Hans/android/delete-account/)提供应用内路径及网页可发起的申请方式，无需重新安装应用即可发起申请。账号删除不会移除本地视频、删除 Google 账号或取消 Google Play 订阅。我们无法远程删除仅存在您设备或第三方目标中的副本。

## 9. 您的权利与支持

根据适用法律，您可能享有访问、更正、删除、限制处理、反对处理或获取个人信息副本等权利。请联系 [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com)。我们可能要求最少必要信息以验证身份并定位数据。请勿发送密码、登录令牌、银行卡号或无关私人媒体。主动联系支持时，我们会收到邮箱、邮件内容及您选择发送的附件。

ClipDock 不面向儿童。如果您认为儿童提供了个人信息，请联系我们调查并妥善处理。数据处理方式变化时，我们会更新本政策，并在需要时通知或取得同意。另请参阅 [Android 使用条款](/zh-Hans/android/terms/)。
`,
		},
		terms: {
			title: "Android 使用条款",
			description: "ClipDock Google Play 版本的内容使用、免费额度、会员、订阅、恢复购买和支持条款。",
			content: `
## 1. 适用范围

本条款适用于 Weiping Huang（Smith Night）提供的 ClipDock: Web Video Downloader Android 版及配套服务。请同时阅读 [Android 隐私政策](/zh-Hans/android/privacy/)。请仅在依法能够接受本条款，或获得必要的家长／监护人参与时使用服务。

## 2. 下载与内容权利

ClipDock 提供链接提取、网页视频识别、下载、本地媒体管理及音视频工具。功能可用性取决于来源、设备、网络、权限、版本、地区和购买状态。支持某网站不保证其所有链接或清晰度均可使用。

仅下载、编辑及分享您拥有、获授权或依法有权使用的内容。公开可访问并不代表已获许可。请尊重版权、隐私和来源平台规则，不得绕过 DRM、付费墙、身份认证或访问控制。编辑或移除标记不改变所有权，也不授予使用权。支持某平台链接不表示 ClipDock 与其有关联或合作。

请保留备份，并在删除原文件前检查导出结果。您对自己的媒体及使用方式负责。

## 3. 免费额度与账号

应用提供基础免费功能。免费下载使用应用显示的账号初始额度。删除文件不会恢复已使用次数，删除并重新创建账号也不会重新获得初始额度。登录、删除及防滥用保留记录见隐私政策。经验证的 Google Play 会员可在未登录 ClipDock Google 账号时使用付费权益。

## 4. Google Play 购买与订阅

付费功能可通过自动续订或一次性购买提供。价格、周期、续订条件、资格和功能范围以购买前应用及 Google Play 购买页面显示为准。Google Play 负责付款处理。订阅按所展示条款续订，除非取消；可在 **Google Play → 个人资料 → 付款和订阅 → 订阅** 中管理。参见 [Google 取消说明](https://support.google.com/googleplay/answer/7018481)。

卸载应用或删除 ClipDock 账号不会取消订阅。通常取消后可用至已付费周期结束，具体受 Google Play 所示条件、退款及适用法律约束。恢复有效购买时请使用原 Google Play 购买账号。ClipDock 登录不会在 Google 账号之间或 App Store 与 Google Play 之间转移购买权益。

如提供永久方案，它是对购买时说明的产品支持生命周期内适用功能的一次性购买，不保证每个第三方网站或未来服务无限期可用。付费权益不授予第三方内容使用权。

付款或退款问题可按 [Google Play 退款流程](https://support.google.com/googleplay/answer/2479637)处理，应用权益问题也可联系我们。退款资格遵循相关政策与法律，本条款不限制强制消费者权利。

## 5. 合理使用

不得干扰服务、规避购买验证或额度控制、传播恶意或违法内容，或发起滥用性自动请求。软件及第三方材料归各自权利人所有，开源组件适用其许可证；限制不排除法律明确赋予您的权利。

## 6. 可用性、变更与责任

我们可能因技术、安全、法律或运营原因调整支持来源及功能，并依法提供通知与救济，尽量避免在有效付费周期内实质减少已付费权益。来源站点变化、删除内容、地区限制或网络故障可能中断下载。

在法律允许范围内，服务按可用现状提供，不保证不间断运行、兼容所有文件或永久保留数据。责任限制不排除依法不可排除的责任、保证或当地消费者权利。

您可以停止使用并[申请删除账号／数据](/zh-Hans/android/delete-account/)。因滥用或违反条款，我们可能限制访问。停止使用并不自动取消商店订阅。条款变化时，我们会在需要时通知重要修改。

## 7. 联系

支持、隐私、购买或争议问题请联系 [daysinyear@foxmail.com](mailto:daysinyear@foxmail.com)。联系支持不妨碍您行使法律赋予的其他救济权利。
`,
		},
		"delete-account": {
			title: "删除 ClipDock 账号与数据",
			description: "通过应用或邮件申请删除 ClipDock Android 账号及相关数据，无需重新安装应用即可发起请求。",
			content: `
本页适用于 **Weiping Huang（Smith Night）** 提供的 **ClipDock: Web Video Downloader Android 版**（com.nightonke.android.clipdock）。

## 在应用中删除账号

1. 打开 ClipDock，进入 **我的 → Google 账号**。
2. 选择 **删除 ClipDock 账号**，阅读删除提示。
3. 完成或取消各设备上未完成的下载，联网同步额度后确认。若遇到网络错误，请重新联网并选择 **重试删除账号**。

删除使登录会话失效，移除云端与账号关联的下载额度交易历史，并在服务端确认后清除本地登录信息。

## 不使用应用也可申请

即使已经卸载 ClipDock，也可以通过邮件发起账号或数据删除请求：

**[发送删除申请邮件](mailto:daysinyear@foxmail.com?subject=ClipDock%20Android%20account%20and%20data%20deletion%20request)**

也可直接写信至 **daysinyear@foxmail.com**，主题为 **“ClipDock Android 账号与数据删除申请”**。请说明要删除账号及相关数据、下载诊断记录，或其他曾提供的信息。注明登录时使用的 Google 邮箱；若申请删除诊断记录，可补充已知的应用版本及大致发生日期。可以单独申请删除诊断记录而不删除账号。

链接会打开邮件应用，只有您发送邮件后才会提交。我们会跟进验证所有权并用必要信息定位数据。**请勿发送密码、Google 登录令牌、银行卡信息或私人视频。** 发出申请不会立即删除数据；验证并处理完成后，我们会确认结果。无需重新安装 ClipDock 即可发起申请。

## 删除、保留和不受影响的信息

- **账号删除会移除：**云端登录会话、与账号关联的下载额度交易历史；旧账号会话将无法使用。
- **防滥用保留：**经哈希处理的 Google 账号标识、剩余下载额度及必要删除／安全状态，防止重复领取初始额度及不安全的删除重试。它们是假名化记录，并非完全匿名数据。额度记录当前没有固定自动过期时间，在执行该规则所需期间保留，并受适用删除权利约束。重新注册会沿用剩余额度。
- **独立诊断记录：**报告按安装关联，账号删除不会自动删除，当前也没有固定自动删除周期。可在请求中要求删除；我们可能需要补充信息定位记录，并会说明安全或法律保留例外。
- **本地与外部副本：**下载的视频、相册文件、导出、分享及备份不会被远程删除，请在设备或对应服务中管理。
- **Google 账号及购买：**不会删除 Google 账号或 Google Play 购买记录。**删除账号不等于取消订阅。** 请在 [Google Play 订阅页面](https://play.google.com/store/account/subscriptions)单独取消。

完整数据处理和保留说明见 [Android 隐私政策](/zh-Hans/android/privacy/)。支持邮件和必要的申请处理记录可能按解决请求及履行适用义务所需保留。
`,
		},
	},
};

// Keep existing App Store documents scoped explicitly, including every language
// switch. Android documents are published only in their reviewed languages.
export const platformNotices: Record<Locale, { title: string; text: string; ios: string; android: string; deletion: string; locale: AndroidLegalLocale }> = {
	"en-US": { title: "Choose your app version", text: "The document below covers the App Store edition. For Android and Google Play, use the separate Android documents.", ios: "App Store edition", android: "Android documents (English)", deletion: "Delete Android account and data", locale: "en-US" },
	"zh-Hans": { title: "选择应用版本", text: "下方正文适用于 App Store 版本。Android 和 Google Play 用户请阅读独立的 Android 文档。", ios: "App Store 版本", android: "Android 文档（简体中文）", deletion: "删除 Android 账号与数据", locale: "zh-Hans" },
	"zh-Hant": { title: "選擇應用程式版本", text: "下方文件適用於 App Store 版本。Android 與 Google Play 使用者請閱讀獨立的 Android 文件。", ios: "App Store 版本", android: "Android 文件（簡體中文）", deletion: "刪除 Android 帳號與資料（簡體中文）", locale: "zh-Hans" },
	ja: { title: "アプリのバージョンを選択", text: "以下の文書は App Store 版に適用されます。Android と Google Play については、専用の Android 文書をご確認ください。", ios: "App Store 版", android: "Android の文書（英語）", deletion: "Android アカウントとデータの削除（英語）", locale: "en-US" },
	ko: { title: "앱 버전 선택", text: "아래 문서는 App Store 버전에 적용됩니다. Android 및 Google Play 사용자는 별도의 Android 문서를 확인해 주세요.", ios: "App Store 버전", android: "Android 문서 (영어)", deletion: "Android 계정 및 데이터 삭제 (영어)", locale: "en-US" },
	es: { title: "Elige tu versión de la app", text: "El documento siguiente corresponde a la edición de App Store. Para Android y Google Play, consulta los documentos específicos de Android.", ios: "Edición de App Store", android: "Documentos de Android (inglés)", deletion: "Eliminar cuenta y datos de Android (inglés)", locale: "en-US" },
	"pt-BR": { title: "Escolha a versão do app", text: "O documento abaixo se aplica à edição da App Store. Para Android e Google Play, consulte os documentos específicos do Android.", ios: "Edição da App Store", android: "Documentos do Android (inglês)", deletion: "Excluir conta e dados do Android (inglês)", locale: "en-US" },
	de: { title: "App-Version auswählen", text: "Das folgende Dokument gilt für die App-Store-Version. Für Android und Google Play gelten die gesonderten Android-Dokumente.", ios: "App-Store-Version", android: "Android-Dokumente (Englisch)", deletion: "Android-Konto und Daten löschen (Englisch)", locale: "en-US" },
	fr: { title: "Choisissez la version de l’application", text: "Le document ci-dessous concerne la version App Store. Pour Android et Google Play, consultez les documents Android distincts.", ios: "Version App Store", android: "Documents Android (anglais)", deletion: "Supprimer le compte et les données Android (anglais)", locale: "en-US" },
};
