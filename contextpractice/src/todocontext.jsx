import { createContext } from 'react'


const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [TODOS, setTodos] = usestate([
        {
            id: 1,
            title: "example-1",
            content: "example-1"
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2"
        },
    ])

    return (
        <TodoContext.Provider value={{ TODOS, setTodos }}>
            {children}
        </TodoContext.Provider>
    )

}
export default TodoProvider
// contextapi를 사용할떄에는 children을 잘 생각해보자
// TodoContext안에 오는 모든것들을 children을 통해 전달해주는것이다.
