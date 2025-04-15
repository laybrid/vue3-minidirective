import { createApp, type DirectiveBinding } from "vue"
import loading from './loading.vue'
// 获取loading组件实例的类型
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
    mounted(el: Element, binding: DirectiveBinding) {
        const arg = binding.arg
        if ( arg != undefined) {
            instance.setTitle(arg)
        }
        if (binding.value) {
            append(el, instance)
        }
    },
    updated(el: Element, binding: DirectiveBinding) {
        const arg = binding.arg
        if (arg != undefined) {
            instance.setTitle(arg)
        }
        if (binding.value != binding.oldValue) {
            binding.value ? append(el, instance) : remove(el, instance)
        }
    }
}

function append(el: Element, instance: loadingType) {
    fixStyle(el)
    // instance时loading组件的实例 .$el是loading组件的根dom
    el.appendChild(instance.$el)
}

function remove(el: Element, instance: loadingType) {
    el.classList.remove('relative')
    el.removeChild(instance.$el)
}

// 挂载元素位置修正
function fixStyle(el: Element) {
    const style = getComputedStyle(el)
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
        !el.classList.contains('relative') && el.classList.add('relative')
    }
}
export default loadingDirective