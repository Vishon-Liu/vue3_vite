import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入 ant-design ui
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

// 引入 fullpage 
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(VueFullPage)

app.mount('#app')
