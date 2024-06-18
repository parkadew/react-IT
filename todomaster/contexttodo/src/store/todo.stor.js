import { Children, createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

// 저장할 공간 만들기
const TodoProvider = ({ chlildren }) => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: true
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2",
            state: false
        }
    ]);

    return <TodoContext.Provider value={{ todos, setTodos }}>{chlildren}</TodoContext.Provider>
}
export default TodoProvider
//provider만들어주기