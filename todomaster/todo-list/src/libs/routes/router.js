import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import Todo from "../../pages/todo/todo";

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