import { type DirectiveBinding } from 'vue'
import { type LazyOptions, State } from "../types"
import { scrollParent } from '../util/dom'
import ImageManager from "./imageManager"
const DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export default class Lazy {
    error: string
    loading: string
    cache: Set<string>
    managerQueue: ImageManager[]
    observer?: IntersectionObserver

    constructor(options: LazyOptions) {
        this.error = options.error || DEFAULT_URL
        this.loading = options.loading || DEFAULT_URL
        this.cache = new Set()
        this.managerQueue = []
        this.initIntersectionObserver()
    }

    add(el: HTMLElement, binding: DirectiveBinding) {
        const src = binding.value
        const parent = scrollParent(el)

        const manager = new ImageManager({
            el,
            parent,
            src,
            error: this.error,
            loading: this.loading,
            cache: this.cache
        })

        this.managerQueue.push(manager)
        this.observer?.observe(el)
    }

    update(el: HTMLElement, binding: DirectiveBinding) {
        const src = binding.value
        const manager = this.managerQueue.find((manager) => {
            return manager.el === el
        })
        if (manager) {
            manager.update(src)
        }
    }

    private initIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                //  the target element and the root element intersect
                if (entry.isIntersecting) {
                    const manager = this.managerQueue.find((manager) => {
                        return manager.el === entry.target
                    })
                    if (manager) {
                        if (manager.state === State.loaded) {
                            this.removeManager(manager)
                            return
                        }
                        manager.load()
                    }
                }
            })
        }, {
            rootMargin: '0px',
            threshold: 0
        })
    }

    private removeManager(manager: ImageManager) {
        const index = this.managerQueue.indexOf(manager)
        if (index > -1) {
            this.managerQueue.splice(index, 1)
        }
        if (this.observer) {
            this.observer.unobserve(manager.el)
        }
    }
}