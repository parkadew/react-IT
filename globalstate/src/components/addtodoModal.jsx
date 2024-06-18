import { useContext } from "react";
import { TodoContext } from "../context/todo.context";

const AddTodoModal = () => {
    const { todos, setTodos } = useContext(TodoContext);
    console.log(todos, "add-modal")
    return <div>
        <button onClick={() => {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 100000000),
                title: "test",
                content: "test",
            }])
        }}>추가</button>
    </div>
}
export default AddTodoModal;