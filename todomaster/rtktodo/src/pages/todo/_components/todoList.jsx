
import styled from "styled-components"
import OneTodo from "./oneTodo"
import { useSelector } from "react-redux"

const TodoList = () => {
    const todos = useSelector((store) => store.todo.todo);
    // todo -> rootReducer key
    // todo -> initialState => {todo:[]}key 
};

return (
    <S.Wrapper>
        {todos.map((todo) => (
            <OneTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
    </S.Wrapper>
)


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