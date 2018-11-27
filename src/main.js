import Vue    from 'vue'
import App    from './app.vue'
import router from './router'
import 'normalize-css/normalize.css'
import './style/global.scss'

Vue.config.productionTip = false

let rootVue = null

Vue.use({
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$orirando', {
      get: () => {
        if (!rootVue) return null
        return rootVue.$children[0]
      }
    })
  }
})

rootVue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
