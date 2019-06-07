import VueRouter from 'vue-router'
import NavBar from "./components/NavBar"
import Register from "./components/Register"

const routes = [
    {
        path: '/',
        component: NavBar
    },
    {
        path: '/register',
        component: Register
    }
];

const router = new VueRouter({routes});
export default router;