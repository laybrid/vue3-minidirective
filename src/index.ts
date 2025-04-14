import { App } from 'vue'
import Test1 from './test1/test1.vue'
import Test2 from './test2/test2.vue'
const myui = {
  install (app: App) {
    app.component('Test1',Test1)
    app.component('Test2',Test2)
  }
}
export {Test1,Test2}
export default myui