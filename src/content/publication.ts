/** One publication rule for the sitemap, navigation and language alternates. */
export const isPublishedTutorial = (article: { screenshotsReady?: boolean }) =>
 article.screenshotsReady === true;
