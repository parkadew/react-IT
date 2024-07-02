import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <div>메인페이지입니다.</div>
},
{
    path: "/todo",
    element: <div>투두페이지입니다.</div>
},])
export default router


