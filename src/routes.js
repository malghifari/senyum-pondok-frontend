import VueRouter from 'vue-router'
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import ThankYou from "./components/pages/ThankYou"
import BiodataOka from "./components/pages/BiodataOka"
import StatusInfaq from "./components/pages/StatusInfaq"

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
        component: ThankYou
    },
    {
        path: '/admin/biodata-oka',
        name: 'biodata-oka',
        component: BiodataOka
    },
    {
        path: '/admin/status-infaq',
        name: 'status-infaq',
        component: StatusInfaq
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;