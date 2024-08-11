import styled from "styled-components";
import OneTodo from "./oneTodo";
import { useQuery, useSuspenseQueries } from "@tanstack/react-query"

import { useEffect, useState } from "react";
import { useTodo } from "providers/todo-provider";

const TodoList = () => {
  // todolist를 불러오기까지 아예 안보이는 상태가 된다.
  const todos = useSuspenseQueries({
    queryKey: [QUERY_KEY.GET_TODO],
    queryFn: () => TodoApi.getTodo()
  })
  console.log({ todos })

  if (isLoading) return <div>is Loading...</div> // 스켈레톤 UI

  // const {todos, getTodo} = useTodo()
  // console.log(todos)
  // useEffect(() => {
  //   getTodo()
  // }, []);

  // if(isLoading) return <div>...loading</div>

  return (
    <S.Wrapper>
      {todos?.data.map((todo) => (
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


// --공용 컴포넌트로 디자인 시스템 만들기
// design - system --> DesignLibrary