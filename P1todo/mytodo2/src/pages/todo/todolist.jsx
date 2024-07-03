import styled from "styled-components"
import OneTodo from "./onetodo"

const Todolist = ({ todo, setTodo }) => {

    return (
        <S.Wrapper>
            {todo.map((todo) => (
                <OneTodo key={todo.id} todo={todo} setTodo={setTodo} />
            ))}
        </S.Wrapper>
    )
}
export default Todolist


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
