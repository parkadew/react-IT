import { useContext } from "react";
import { TodoContext } from "../context/todo.context";

const TodoList = () => {
    const { todo } = useContext(TodoContext);
    console.log(todo, "todo-list");

    return <div></div>
}
export default TodoList