import styled from "styled-components";
import React, { useRef, useState } from "react";
import { flexAlignCenter } from "../../../libs/styles/common";
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../../../store/todo.reduce";

const OneTodo = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);

    const contentRef = useRef();

    const onpressDeletTodo = () => {
        const todoId = todo.id; // ? 이건 내가 임의로 넣어준건데 괜찮을랑가아
        dispatch(
            deleteTodo({
                id: todoId,
            }))
    }

    const onPressChangeEditMode = () => {
        setIsEditMode(true);
    };

    const onPressEdit = () => {
        const todoId = todo.id;
        const content = contentRef.current.value;
        dispatch(
            updateTodo({
                id: todoId,
                content,
            })
        )

    };

    return (
        <S.Wrapper state={todo.state}>
            <S.Header>
                <div>
                    {todo.state ? "완료" : "미완료"}
                    {todo.title}
                </div>
                <div>
                    <button onClick={isEditMode ? onPressEdit : onPressChangeEditMode}>
                        {isEditMode ? "완료" : "수정"}</button>
                    <button onClick={onpressDeletTodo}>삭제</button>
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
        state ? theme.colors.Gray[1] : theme.colors.white};
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