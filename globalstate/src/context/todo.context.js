
// 전역상태 관리를 해보자
// 순서만 잘 알고있어도 쉽게 생성이 가능하다.
// src에 context

import { createContext, useState } from "react";

// 1. 전역 상태를 저장하고 다룰 수 있는 공간을 생성(createContext)
// 2. Provider(덮개)를 생성해서 내가 전역 상태로 다루고 싶은 스코프의 최상위에 감싸야한다.

/**
 * <Provider>
 *      <Router></Router>
 * </Provider>
 */

//3. provider에 내가 전달하고 싶은 값을 전달 및 저장 <Provider value={todos}></Provider>
//4. 컴포넌트에서 가져다가 사용할 떄 useContect()

// 전역 상태를 만들어보자 const todocontext = createContext();
// 이후에 provider는 컴포넌트로 만들어주어야한다.

export const todocontext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-content"
        }
    ]);

    return <todocontext.Provider value={{ todos, setTodos }}>{children}</todocontext.Provider>
};
export default TodoProvider;

