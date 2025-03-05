import type { I18n } from 'vue-i18n'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

// Các ngôn ngữ được hỗ trợ
export const SUPPORT_LOCALES = ['en', 'vi']

// Theo dõi ngôn ngữ đã tải
const loadedLanguages: string[] = []

/**
 * Thiết lập i18n với các tùy chọn
 * @param options Các tùy chọn cho i18n
 * @returns Instance i18n
 */
export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'en',
    ...options,
    messages: {},
  })

  // Tải và thiết lập ngôn ngữ mặc định
  setI18nLanguage(i18n, options.locale)
  return i18n
}

/**
 * Thiết lập ngôn ngữ cho i18n
 * @param i18n Instance i18n
 * @param locale Mã ngôn ngữ cần thiết lập
 */
export function setI18nLanguage(i18n: I18n, locale: string) {
  // Thiết lập locale cho i18n
  i18n.global.locale = locale

  // Lưu ngôn ngữ đã chọn vào localStorage
  localStorage.setItem('lang', locale)

  // Cập nhật thuộc tính lang cho thẻ HTML
  document.querySelector('html')?.setAttribute('lang', locale)

  // Đảm bảo tải tin nhắn ngôn ngữ
  loadLocaleMessages(i18n, locale)
}

/**
 * Tải tin nhắn ngôn ngữ
 * @param i18n Instance i18n
 * @param locale Mã ngôn ngữ cần tải
 * @returns Promise
 */
export async function loadLocaleMessages(i18n: I18n, locale: string) {
  // Chỉ tải nếu chưa được tải trước đó
  if (!loadedLanguages.includes(locale)) {
    try {
      // Tải file ngôn ngữ động
      const messages = await import(`@/locales/${locale}.json`)

      // Thiết lập tin nhắn ngôn ngữ
      i18n.global.setLocaleMessage(locale, messages.default)

      // Đánh dấu ngôn ngữ đã được tải
      loadedLanguages.push(locale)
    }
    catch (error) {
      console.error(`Failed to load locale: ${locale}`, error)
    }
  }

  return nextTick()
}

// Lấy ngôn ngữ từ localStorage hoặc sử dụng mặc định
const savedLocale = localStorage.getItem('lang') || 'en'

// Tạo và xuất instance i18n
export const i18n = setupI18n({ locale: savedLocale })

// Tạo promise để theo dõi việc tải i18n ban đầu
export const i18nReady = loadLocaleMessages(i18n, savedLocale)
