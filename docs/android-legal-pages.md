# Android legal pages

Prepared 2026-10-25 for `com.nightonke.android.clipdock` (Google Play), separately from the App Store edition.

## Public routes

- `/android/privacy/` and `/zh-Hans/android/privacy/`
- `/android/terms/` and `/zh-Hans/android/terms/`
- `/android/delete-account/` and `/zh-Hans/android/delete-account/`

Content lives in `src/i18n/android-legal.ts`; `AndroidLegalPage.astro` renders it. Existing legal routes retain their App Store text and now prominently identify its platform, with links to the Android documents. Other languages identify the language of the Android destination explicitly. Android legal-page store buttons point to Google Play. No media/CDN release changed.

## Evidence used

The adjacent ClipDock-Android repository's GoogleAccountManager, AccountActivity, Google-account cloud function, purchase verification, DownloadAttemptReporter/Transport/Journal, InputRegionStore, foreground services and manifest were inspected. Build 13 is the latest closed-test release at preparation time.

The text deliberately does not claim zero collection, anonymous account hashes, automatic diagnostic erasure, a retention schedule that has not been implemented, or that account deletion cancels Google Play subscriptions. Raw manually supplied URLs can be reported; browser reporting strips URL credentials, queries and fragments. Download diagnostics use a separate installation identifier.

## Handling emailed deletion requests

The public email link initiates a **manual support process**; it is not an automatic deletion endpoint. The operator must monitor `daysinyear@foxmail.com` and process requests. No request has been tested against a real user's data by this website change.

1. Confirm whether the request covers the ClipDock account, installation diagnostics, or other support records. Verify ownership using the least additional information necessary. An email address alone cannot be hashed into the account key: account records use the verified Google subject (`sub`). Do not request passwords or raw authentication/purchase tokens.
2. Locate the verified account and/or installation through the supported authenticated workflow and operational records. Do not match or delete another person's data based solely on an unverified email, device model, or URL. If the identifier is unavailable, explain the information needed to locate it without requiring reinstallation merely to initiate a request.
3. Apply the existing account-deletion lifecycle so concurrent downloads and deletion retries remain safe. Cloud sessions and account-linked allowance transactions are removed; the restricted hashed-identity/balance/deletion-state record is retained for the disclosed anti-abuse purpose. Do not describe the retained record as anonymous.
4. Installation diagnostic records are separate. Locate and handle them explicitly when requested; deleting the Google account or a local video does not delete them. Follow applicable deletion rights and explain a concrete security/legal exception for any necessary retained records. The current implementation has no fixed automatic diagnostic retention interval.
5. Record completion and scope, notify the requester, and keep only necessary request-handling records. State that device-only files, Google accounts, Google Play purchase history, and subscriptions are separate.

The public wording must be updated when collection, processors, retention, deletion implementation, or purchase behavior changes. This document describes current implementation and operator responsibilities; it does not establish that every jurisdiction's requirements have been independently reviewed.

## Validation

- `npm run check:i18n`: 13 tests passed.
- `npm run build:production`: 412 pages; 411 sitemap entries; 28,897 local references; no site/localization errors before merging the latest upstream tutorial changes; deployment CI reruns.
- Six Android routes checked for language, canonical URL, alternate-language links and sitemap membership.
- Desktop Chrome preview checked for readable policy layout and correct Android document/store links.
- The upstream content-based sitemap date generator includes the new Android documents, with a regression check that editing Android privacy does not change unrelated document dates.
