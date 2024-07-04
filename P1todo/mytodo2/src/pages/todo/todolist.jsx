import styled from "styled-components"
import OneTodo from "./onetodo"

const Todolist = ({ todo, setTodo }) => {

    //여기서 map을 돌린 todos가 복사된 todo야 너가 활용을 하려면 todo의 복사본 todos가 꼭 필요할거야

    return (
        <S.Wrapper>
            {todo.map((todos) => (
                <OneTodo key={todos.id} todos={todos} todo={todo} setTodo={setTodo} />
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
