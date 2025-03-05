import { createI18n } from 'vue-i18n'

const loadedLanguages: string[] = []
const lang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  locale: lang,
  fallbackLocale: 'en',
  legacy: false,
  messages: {},
})

async function loadLocaleMessages(locale: string) {
  if (!loadedLanguages.includes(locale)) {
    const messages = await import(`@/locales/${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)
    loadedLanguages.push(locale)
  }
}

async function setI18nLanguage(lang: string) {
  await loadLocaleMessages(lang)
  i18n.global.locale.value = lang
}

export { i18n, loadLocaleMessages, setI18nLanguage }
