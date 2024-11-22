import Blueberry from "./Pages/Blueberry";
import HomePage from "./Pages/HomePage";

export const MainRouter = [
    {
        path:'/',
        component: HomePage,
        exact:true
    },
    {
        path:'/Blueberry',
        component: Blueberry,
        exact:true
    }
]