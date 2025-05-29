import { State, ImageManagerOptions } from "../types"
import loadImage from "../util/loadImage"

export default class ImageManager {
    el: HTMLElement
    parent: HTMLElement | Window
    src: string
    error: string
    loading: string
    cache: Set<string>
    state: State

    constructor(options: ImageManagerOptions) {
        this.el = options.el
        this.parent = options.el
        this.src = options.src
        this.error = options.error
        this.loading = options.loading
        this.cache = options.cache
        this.state = State.loading

        this.render(this.loading)
    }

    load(next?: Function) {
        if (this.state > State.loading) {
            return
        }
        if (this.cache.has(this.src)) {
            this.state = State.loaded
            this.render(this.src)
            return
        }
        this.renderSrc(next)
    }
    
    update(src:string) {
        const currentSrc = this.src
        if(currentSrc !== src) {
            this.src = src
            this.state = State.loading
            this.load()
        }
    }

    private renderSrc(next?: Function) {
        loadImage(this.src).then(() => {
            this.state = State.loaded
            this.render(this.src)
            this.cache.add(this.src)
            next && next()
        }).catch((e) => {
            this.state = State.error
            this.render(this.error)
            next && next()
        })
    }

    private render(src: string) {
        this.el.setAttribute('src', src)
    }
}