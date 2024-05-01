import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const publicRouter = [
    {
        path: '/', component: Home
    },
    {
        path: '/login', component: Login, layout: null,
    },
    {
        path: '/register', component: Registration, layout: null,
    }, 
    {
        path: "/chats/:id", component: Home
    }
];