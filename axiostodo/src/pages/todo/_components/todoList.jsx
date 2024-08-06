import styled from "styled-components";
import OneTodo from "./oneTodo";

import { useEffect, useState } from "react";
import { useTodo } from "providers/todo-provider";

const TodoList = () => {
  const {todos, getTodo} = useTodo()
  console.log(todos)

  useEffect(() => {
    getTodo()
  }, []);

  return (
    <S.Wrapper>
      {todos.map((todo) => (
        <OneTodo key={todo.id} todo={todo} />
      ))}
    </S.Wrapper>
  );
};
export default TodoList;

const Wrapper = styled.div`
  padding: 32px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const S = {
  Wrapper,
};
