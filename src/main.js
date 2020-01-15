import Vue from "vue";
import App from "./App.vue";
import router from './router/index.js'
import ActionSheetPlugin from "./plugins/actionsheet.js";
import LoadingPlugin from "./plugins/loading.js";
Vue.use(ActionSheetPlugin);
Vue.use(LoadingPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
