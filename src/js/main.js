// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//手动启动插件
Vue.ues(VueRouter);
Vue.ues(VueResource);

// 导入自己的组件

import ComptApp from '../component/App.vue';

new Vue({
    el:'#app',
    render:c => c(ComptApp)
})