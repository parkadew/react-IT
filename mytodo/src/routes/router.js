import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/main/Main";
import Todo from "../Pages/todo/Todo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/todo/:todoId",
        element: <Todo />
    },
])
export default router