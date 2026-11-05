import type { Locale } from "./locales";

// Small, explicit UI dictionary: language controls must work in every edition.
// Order: title, search label, empty result, clear search, close.
const copy = {
  "en-US": ["Choose your language", "Search languages", "No languages found", "Clear search", "Close"],
  "zh-Hans": ["选择语言", "搜索语言", "未找到匹配的语言", "清空搜索", "关闭"],
  "zh-Hant": ["選擇語言", "搜尋語言", "找不到符合的語言", "清除搜尋", "關閉"],
  ja: ["言語を選択", "言語を検索", "言語が見つかりません", "検索をクリア", "閉じる"],
  ko: ["언어 선택", "언어 검색", "검색된 언어가 없습니다", "검색 지우기", "닫기"],
  fr: ["Choisissez votre langue", "Rechercher une langue", "Aucune langue trouvée", "Effacer la recherche", "Fermer"],
  de: ["Sprache auswählen", "Sprachen suchen", "Keine Sprache gefunden", "Suche löschen", "Schließen"],
  es: ["Elige tu idioma", "Buscar idiomas", "No se encontraron idiomas", "Borrar búsqueda", "Cerrar"],
  "pt-BR": ["Escolha seu idioma", "Pesquisar idiomas", "Nenhum idioma encontrado", "Limpar pesquisa", "Fechar"],
} satisfies Record<Locale, [string, string, string, string, string]>;

export function getLanguagePickerCopy(locale: Locale) {
  const [title, search, empty, clear, close] = copy[locale];
  return { title, search, empty, clear, close };
}

export const languagePickerMeta = {
  "en-US": {
    "flagCode": "us",
    "languagePrefixes": [
      "en"
    ]
  },
  "zh-Hans": {
    "flagCode": "cn",
    "languagePrefixes": [
      "zh-hans",
      "zh-cn",
      "zh-sg",
      "zh"
    ]
  },
  "zh-Hant": {
    "flagCode": "hk",
    "languagePrefixes": [
      "zh-hant",
      "zh-tw",
      "zh-hk",
      "zh-mo"
    ]
  },
  "ja": {
    "flagCode": "jp",
    "languagePrefixes": [
      "ja"
    ]
  },
  "ko": {
    "flagCode": "kr",
    "languagePrefixes": [
      "ko"
    ]
  },
  "es": {
    "flagCode": "es",
    "languagePrefixes": [
      "es"
    ]
  },
  "pt-BR": {
    "flagCode": "br",
    "languagePrefixes": [
      "pt-br",
      "pt"
    ]
  },
  "de": {
    "flagCode": "de",
    "languagePrefixes": [
      "de"
    ]
  },
  "fr": {
    "flagCode": "fr",
    "languagePrefixes": [
      "fr"
    ]
  }
} satisfies Record<Locale, { flagCode: string; languagePrefixes: string[] }>;
