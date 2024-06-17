import { createContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    return <TodoContext.Provider>{children}</TodoContext.Provider>
}
export default TodoProvider;

// 지역 변수 전역변수 차이
// 코드 블럭 ( 특정 스코프 ) - 지역변수
// 코드 전체 (전역 스코프 ) - 전역 변수

// 상태 <--> 전역 상태 
// 특정 컴포넌트 내에서만 사용하는 상태 - 상태 : 단,props로 전달하면 하위 컴포넌트로 내려주는 것이 가능
// 컴포넌트 구분없이 모든 컴포넌트에서 접근이 가능한 상태 - 전역상태