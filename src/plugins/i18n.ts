import { createI18n } from 'vue-i18n'

const loadedLanguages: string[] = []
const lang = localStorage.getItem('lang')

const i18n = createI18n({
  locale: lang || 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages: {},
})
await loadLocaleMessages(i18n.global.locale.value)
async function loadLocaleMessages(locale: string) {
  if (!loadedLanguages.includes(locale)) {
    const messages = await import(`@/locales/${locale}.json`)
    i18n.global.setLocaleMessage(locale, messages.default)
    loadedLanguages.push(locale)
  }
}
async function setI18nLanguage(locale: string) {
  await loadLocaleMessages(locale)
  i18n.global.locale.value = locale
}

export { i18n, setI18nLanguage }
