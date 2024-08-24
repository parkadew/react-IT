import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import Todo from "../../pages/todo/todo";

const router = createBrowserRouter([{
    path: "/",
    element: <Main></Main>
},
{
    path: "/todo",
    element: <Todo></Todo>
},])
export default router