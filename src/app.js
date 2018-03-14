import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
import routes from "./router";
Vue.use(VueRouter);
let router=new VueRouter({
    routes:routes
});
new Vue({
    router:router,
    el:"#app",
    render: h => h(App)
});