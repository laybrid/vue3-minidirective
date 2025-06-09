import { type DirectiveBinding } from 'vue'
import { type DebounceHTMLElement } from '../types'

const DELAY = 300

const debounceDirective = {
    mounted(el: DebounceHTMLElement, binding: DirectiveBinding) {
        if (!(el instanceof HTMLButtonElement)) {
            console.error('v-debounce can only be used on <button> elements')
            return
        }

        if (typeof binding.value !== 'function') {
            console.error('v-debounce directive requires a function as its value')
            return
        }

        let time = DELAY
        if(binding.arg && (typeof binding.arg == 'number'  || !isNaN(parseInt(binding.arg)))) {
          time = parseInt(binding.arg)
        }
        const handler = () => {
            el._debounceHandler && clearTimeout(el._debounceTime)
            el._debounceTime = window.setTimeout(() => {
                binding.value()
            }, time);
        }
        el._debounceHandler = handler

        el.addEventListener('click', handler)
    },

    unmounted(el: DebounceHTMLElement) {
        el._debounceTime && clearTimeout(el._debounceTime)
        el._debounceHandler && el.removeEventListener('click', el._debounceHandler)
    }
}

export default debounceDirective