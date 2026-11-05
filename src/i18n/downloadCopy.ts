import type { Locale } from "./locales";
import { homeContent } from "./home";

export const installOnAnotherDevice = {
  "en-US": "Install on another device",
  "zh-Hans": "在其他设备上安装",
  "zh-Hant": "在其他裝置上安裝",
  ja: "別のデバイスにインストール",
  ko: "다른 기기에 설치",
  fr: "Installer sur un autre appareil",
  de: "Auf einem anderen Gerät installieren",
  es: "Instalar en otro dispositivo",
  "pt-BR": "Instalar em outro dispositivo",
} satisfies Record<Locale, string>;

export function getDownloadCopy(locale: Locale) {
  const { freeDownload, scan } = homeContent[locale].ui;
  return { freeDownload, scan, installOnAnotherDevice: installOnAnotherDevice[locale] };
}
