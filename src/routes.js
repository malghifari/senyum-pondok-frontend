import VueRouter from 'vue-router'
import Register from "./components/Register"
import Login from "./components/Login"
import ThankPage from "./components/ThankPage"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Register
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: ThankPage
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;