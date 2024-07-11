import { useContext } from "react";
import { todocontext } from "../context/todo.context";

const TodoList = () => {
    const { todos, setTodos } = useContext(todocontext);
    // 내가 객체로 보냈으니까 구조 분해할당??
    console.log(todos, "todo-list");
    return <div>

    </div>
}
export default TodoList

