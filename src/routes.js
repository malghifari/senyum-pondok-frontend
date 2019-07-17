import VueRouter from 'vue-router'
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import ThankYou from "./components/pages/ThankYou"
import BiodataOka from "./components/pages/BiodataOka"
import StatusInfaq from "./components/pages/StatusInfaq"
import UploadInfaq from "./components/pages/UploadInfaq"
import AdminUploadInfaq from "./components/pages/AdminUploadInfaq"
import VerifikasiInfaq from "./components/pages/VerifikasiInfaq"
import Summary from "./components/pages/Summary"

import HistoryInfaq from "./components/pages/HistoryInfaq"

import ChangePassword from "./components/pages/ChangePassword"


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
    },
    {
        path: '/admin/verifikasi-infaq',
        name: 'konfirmasi-infaq',
        component: VerifikasiInfaq
    },
    {
        path: '/oka/upload-infaq',
        name: 'upload-infaq',
        component: UploadInfaq
    },
    {
<<<<<<< HEAD
        path: '/oka/history-infaq',
        name: 'history-transaksi-infaq',
        component: HistoryInfaq
=======
        path: '/oka/change-password',
        name: 'change-password',
        component: ChangePassword
>>>>>>> e2067b4cd22610461422ee332ea3da82b6d39831
    },
    {
        path: '/admin/upload-infaq',
        name: 'admin-upload-infaq',
        component: AdminUploadInfaq
    },
    {
        path: '/admin/summary',
        name: 'admin-summary',
        component: Summary
    }
];

const router = new VueRouter({routes, mode: 'history'});
export default router;
