
import styled from "styled-components"
import OneTodo from "./oneTodo"

const TodoList = ({ todos, setTodos }) => {
    const deleteTodo = (todoId) => {
        const filterTodo = todos.filter((todo) => todo.id !== todoId);
        setTodos(filterTodo)

    }

    return (
        <S.Wrapper>
            {todos.map((todo) => (
                <OneTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </S.Wrapper>
    )

}
export default TodoList

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}