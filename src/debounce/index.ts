import { type App } from 'vue'
import debounceDirective from './core/debounce'

const Debounce = {
    install(app: App) {
        app.directive('debounce',debounceDirective)
    }
}
export default Debounce