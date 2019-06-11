import VueRouter from 'vue-router'
import NavBar from "./components/NavBar"
import Register from "./components/Register"
import Login from "./components/Login"
import ThankPage from "./components/ThankPage"

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
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;