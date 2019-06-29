import VueRouter from 'vue-router'
import Register from "./components/Register"
import Login from "./components/Login"
import ThankPage from "./components/ThankPage"
import MenuPage from "./components/MenuPage"
import Home from "./components/Home"
import FormKonfirmasi from "./components/FormKonfirmasi"
import Konfirmasi from "./components/Konfirmasi"
import TabelHistory from "./components/TabelHistory"
import HistoryInfaq from "./components/HistoryInfaq"

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
        path: '/menu',
        component: MenuPage
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/formkonfirmasi',
        component: FormKonfirmasi
    },
    {
        path: '/konfirmasi',
        component: Konfirmasi
    },
    {
        path: '/asal',
        component: TabelHistory
    },
    {
        path: '/history',
        component: HistoryInfaq
    },
];

const router = new VueRouter({routes, mode: 'history'});
export default router;