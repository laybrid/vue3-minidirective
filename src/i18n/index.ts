import { type App } from 'vue'
import i18n, { currentLanguage } from './core/i18n'
import { useLanguage } from './core/useLanguage'

const I18n = {
    install(app: App) {
        app.provide('currentLanguage', currentLanguage)
        app.directive('i18n', i18n)
    }
}
export { useLanguage }
export default I18n