import VueRouter from 'vue-router'
import Register from "./components/Register"
import Login from "./components/Login"
import ThankPage from "./components/ThankPage"
import BiodataOka from "./components/BiodataOka"

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
    },
    {
        path: '/admin/biodata-oka',
        name: 'biodata-oka',
        component: BiodataOka
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;