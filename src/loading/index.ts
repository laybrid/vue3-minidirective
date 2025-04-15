import { type App } from 'vue'
import loadingDirective from './core/directive'

const Loading = {
    install(app: App, options) {
        options && (loadingDirective.options = options)
        app.directive('loading', loadingDirective)
    }
}
export default Loading