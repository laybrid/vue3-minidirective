import { type App } from 'vue'
import { type LazyOptions } from './types'
import Lazy from './core/lazy'

const lazy = {
    install(app: App, options:LazyOptions) {
        const lazy = new Lazy(options)
        
        app.directive('lazy', {
            mounted: lazy.add.bind(lazy),
            updated: lazy.update.bind(lazy),
            unmounted: lazy.update.bind(lazy)
        })
    }
}
export default lazy