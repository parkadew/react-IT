import styled from "styled-components";
import React, { useState } from "react";
import { flexAlignCenter } from "../../../libs/styles/common";



const OneTodo = ({ todo, deleteTodo }) => {

    const [isEditMode, setIsEditMode] = useState(false);

    const onpressDeletTodo = () => {
        deleteTodo(todo.id);
        // const todoId = todo.id
        // const deleteTodo = todos.filter((todo) => todo.id !== todoId)
        // setTodos(deleteTodo)

    }

    const onPressChangeEditMode = () => { };
    const onPressEdit = () => { };

    return (
        <S.Wrapper state={todo.state}>
            <S.Header>
                <div>
                    {todo.state ? "완료" : "미완료"}
                    {todo.title}
                </div>
                <div>
                    <button>수정</button>
                    <button onClick={onpressDeletTodo}>삭제</button>
                </div>
            </S.Header>
            <S.Content state={todo.state}>
                {todo.content}
            </S.Content>
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