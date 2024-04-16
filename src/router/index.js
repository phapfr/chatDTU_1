import Home from "../pages/Home";
import Login from "../pages/Login";

export const publicRouter = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login, layout: null,
    }
];