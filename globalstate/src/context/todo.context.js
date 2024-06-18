import { createContext, useState } from "react"

export const TodoContext = createContext();

//---- 잠깐만 다시 봐보니 createContext랑 TodoProvider가 다른것이네?

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-content",
        },
        {
            id: 2,
            title: "example-2",
            content: "example-content",
        },
        {
            id: 3,
            title: "example-3",
            content: "example-content",
        },
    ]);

    return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>

}

export default TodoProvider


// 지역 변수 전역변수 차이
// 코드 블럭 ( 특정 스코프 ) - 지역변수
// 코드 전체 (전역 스코프 ) - 전역 변수

// 상태 <--> 전역 상태 
// 특정 컴포넌트 내에서만 사용하는 상태 - 상태 : 단,props로 전달하면 하위 컴포넌트로 내려주는 것이 가능
// 컴포넌트 구분없이 모든 컴포넌트에서 접근이 가능한 상태 - 전역상태

// 아 내가 지금 하려는것이
// 전역 상태 관리
// 순서만 알아도 생성할수있다
// 1. 전역 상태를 저장하고 다룰수 있는 공간을 생성(createContext)  
// 2. Provider(덮개)를 생성해서 내가 전역 상태로 다루고 싶은 스코프의 최상위에 감싸야한다

/*
    <Provider>
        <Router/>
    </Provider>
*/
// 3. Provider에 내가 전달하고 싶은 값을 전달 및 저장 <Provider value={todos}
// 4. 컴포넌트에서 가져다가 사용할 떄 useContext() -> 전역 최상위에서 상태를 만들어서 내가 전달하고 싶은곳에 전달해서 그 범위안에 있는 컴포넌트들이 내가 만든 상태를 어디에서도 사용할수있게 usecontext 를 사용하면되는구나
// 

//Provider는 컴포넌트다 -> 컴포넌트 형태로 만들어줘야한다
