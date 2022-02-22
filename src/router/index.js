import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home,  meta: { title: 'Home' } },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});


export default router
