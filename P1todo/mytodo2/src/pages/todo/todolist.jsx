import styled from "styled-components"
import OneTodo from "./onetodo"

const Todolist = ({ todo, setTodo }) => {
    if (!Array.isArray(todo)) {
        console.error('todo is not an array');
        return null; // 혹은 적절한 오류 처리
    }

    //여기서 map을 돌린 todos가 복사된 todo야 너가 활용을 하려면 todo의 복사본 todos가 꼭 필요할거야

    return (
        <S.Wrapper>
            {todo.map((todos) => (
                // 조회 -> todo.map을 통해 mock데이터를 전부 순회 하였으며 새로운 복사본 배열인 todos생성
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
