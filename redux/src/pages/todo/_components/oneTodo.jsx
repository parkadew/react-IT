import styled from "styled-components";
import { flexAlignCenter } from "../../../libs/styles/common";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../../../store/todo.slice";


const OneTodo = ({ todo }) => {

    const dispatch = useDispatch();
    // 이게어떤역할? 디스패치를 사용해 action을 전달한다

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

    // 삭제 :
    const onPressDeleteTodo = () => {
        const todoId = todo.id
        dispatch(
            deleteTodo({
                id: todoId,
            })
        );
    };
    // deleteTodo: (state, action) => {
    //  state.todo = state.todo.filter((todo) => todo.id !== action.payload);

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

    // 수정 (갱신, Update) 요직 만들어보자
    const [isEditMode, setIsEditMode] = useState(false)

    const contentRef = useRef()

    const onPressChangeEditMode = () => {
        setIsEditMode(true)
    }

    const onPressEdit = () => {
        const todoId = todo.id
        const content = contentRef.current.value

        dispatch(updateTodo({
            id: todoId,
            content,
        }))

        // const temp_todos = [...todos]
        // let selectTodoIndex = temp_todos.findIndex((todo) => todo.id === todoId)
        // temp_todos[selectTodoIndex] = {
        //     ...temp_todos[selectTodoIndex],
        //     content
        // }

        // setTodos(temp_todos)
        setIsEditMode(false)
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <S.Wrapper state={todo.state}>
            <S.Header>
                <div>
                    {todo.state ? "완료" : "미완료"}
                    {todo.title}
                </div>
                <div>
                    <button onClick={isEditMode ? onPressEdit : onPressChangeEditMode}>
                        {isEditMode ? "완료" : "수정"}
                    </button>
                    <button onClick={onPressDeleteTodo}>삭제</button>
                </div>
            </S.Header>
            {isEditMode ? <textarea ref={contentRef} defaultValue={todo.content}></textarea> : <S.Content state={todo.state}>{todo.content}</S.Content>}
        </S.Wrapper>
    )
}
export default OneTodo


const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #999;
    margin: 16px 0;
    border-radius: 8px;
    background-color: ${({ state, theme }) =>
        state ? theme.colors.Gray[1] : theme.colors.text.white};
`;

const Header = styled.div`
    border-bottom: 1px dotted #999;
    ${flexAlignCenter};
    justify-content: space-between;
    padding: 8px 16px;
    height: 48px;
`;

const Content = styled.div`
    padding: 16px;
    text-decoration: ${({ state }) => (state ? "line-through" : "none")};
`;

const S = {
    Wrapper,
    Header,
    Content,
};
