import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";

const routes = [
    {
        path: '/',
        component: HelloWorld
    }
];

const router = new VueRouter({routes});
export default router;