import styled from "styled-components";
import OneTodo from "./onTodoModal";

const TodoList = ({ todos, setTodos }) => {

    const updateTodo = ({ todoId, content }) => {
        //TodoListdp todos, setTodos를 props로 매개변수로 전달받은건알겠어
        // 그런데 updateTodo는 todoId, content를 어떻게 왜 매개변수로 넣어놨을까?
        const temp_todos = [...todos];
        const selectTodoIndex = temp_todos.findIndex((todo) => todo.id === todoId);
        // selectTodo.content = content;
        temp_todos[selectTodoIndex] = {
            ...temp_todos[selectTodoIndex],
            content,
        };
        setTodos(temp_todos);
    };

    return (
        <S.Wrapper>
            {todos.map((todo) => (
                <OneTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} updateTodo={updateTodo} />
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
