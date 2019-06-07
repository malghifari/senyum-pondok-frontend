import VueRouter from 'vue-router'
import NavBar from "./components/NavBar"
import Register from "./components/Register"
import Login from "./components/Login"

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
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;