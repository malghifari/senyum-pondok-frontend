import VueRouter from 'vue-router'
import NavBar from "./components/NavBar"
import Register from "./components/Register"
import Login from "./components/Login"
import ThankPage from "./components/ThankPage"
import MenuPage from "./components/MenuPage"
import Home from "./components/Home"
import FormKonfirmasi from "./components/FormKonfirmasi"
import Konfirmasi from "./components/Konfirmasi"

const routes = [
    {
        path: '/',
        component: NavBar
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/terimakasih',
        name: 'terimakasih',
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
];

const router = new VueRouter({routes, mode: 'history'});
export default router;