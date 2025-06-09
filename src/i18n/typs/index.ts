import { type WatchHandle } from 'vue'

export interface i18HTMLElement extends HTMLElement {
    _i18Watcher: WatchHandle
}
