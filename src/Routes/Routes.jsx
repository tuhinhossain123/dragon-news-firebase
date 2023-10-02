import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
]);
export default router;