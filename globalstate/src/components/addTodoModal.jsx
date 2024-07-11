import { useContext } from "react"
import { todocontext } from "../context/todo.context"

const AddTodoModal = () => {
    const { todos, setTodos } = useContext(todocontext);
    console.log(todos, "add-modal")

    return <div>
        <button onClick={() => {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 10000000),
                title: "test",
                content: "test"
            }])
        }}>추가</button>
    </div>
}
export default AddTodoModal

//전역 변수를 사용하려면 UseContext를 사용해주어야한다

