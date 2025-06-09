import { ref, watch, type DirectiveBinding } from "vue";
import { type i18HTMLElement } from "../typs";

export const currentLanguage = ref<string>('zh')

const i18n = {
    mounted(el: i18HTMLElement, binding: DirectiveBinding) {
        const updateText = () => {
            el.textContent = binding.value[currentLanguage.value] || binding.value['zh'] || ''
        }
        updateText()
        el._i18Watcher = watch(currentLanguage, updateText)
    },

    updated(el: i18HTMLElement, binding: DirectiveBinding) {
        el.textContent = binding.value[currentLanguage.value] || binding.value['zh'] || ''
    },

    unmounted(el: i18HTMLElement) {
        el._i18Watcher && el._i18Watcher()
    }
}

export default i18n