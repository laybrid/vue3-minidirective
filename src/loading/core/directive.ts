import { createApp, type DirectiveBinding } from "vue"
import loading from './loading.vue'
// get loading instance
type loadingType = InstanceType<typeof loading>;
const app = createApp(loading)
const instance = app.mount(document.createElement('div')) as loadingType

const loadingDirective = {
    options:{img:''},
    created() {
        if(loadingDirective.options.img) {
            instance.setImg(loadingDirective.options.img)
        }
    },

    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const arg = binding.arg
        if ( arg != undefined) {
            instance.setTitle(arg)
        }
        if (binding.value) {
            append(el, instance)
        }
    },

    updated(el: HTMLElement, binding: DirectiveBinding) {
        const arg = binding.arg
        if (arg != undefined) {
            instance.setTitle(arg)
        }
        if (binding.value != binding.oldValue) {
            binding.value ? append(el, instance) : remove(el, instance)
        }
    }
}

function append(el: HTMLElement, instance: loadingType) {
    fixStyle(el)
    // instance时loading组件的实例 .$el是loading组件的根dom
    el.appendChild(instance.$el)
}

let kase  = false //判断是否是元素本身自带的定位
function remove(el: HTMLElement, instance: loadingType) {
    kase && (el.style.position = '')
    el.removeChild(instance.$el)
}

// 挂载元素位置修正
function fixStyle(el: HTMLElement) {
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
        el.style.position = 'relative'
        kase = true
    }
}
export default loadingDirective