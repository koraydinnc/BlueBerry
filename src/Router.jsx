import Blueberry from "./Pages/Blueberry";
import Faydalari from "./Pages/Faydalari";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import StoryPage from "./Pages/StoryPage";
import Tarifler from "./Pages/Tarifler";

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
    },
    {
        path:'/ürünlerimiz',
        component: ProductsPage,
        exact:true
    },
    {
        path:'/Faydaları',
        component: Faydalari,
        exact:true
    },
    {
        path:'/Tarifler',
        component: Tarifler,
        exact:true
    },
    {
        path:'/hikayemiz',
        component: StoryPage,
        exact:true
    },
]