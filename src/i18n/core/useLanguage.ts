import { inject, type Ref } from 'vue'

export function useLanguage() {
    const currentLanguage = inject('currentLanguage') as Ref<string>

    const setLanguage = (lang: string) => {
        currentLanguage.value = lang
    }
    return {
        currentLanguage,
        setLanguage
    }
}