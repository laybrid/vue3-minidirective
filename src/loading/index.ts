import { type App } from 'vue'
import { type LoadingOptions } from './types'
import loadingDirective from './core/directive'

const Loading = {
    install(app: App, options?: LoadingOptions) {
        options && (loadingDirective.options = options)
        app.directive('loading', loadingDirective)
    }
}
export default Loading