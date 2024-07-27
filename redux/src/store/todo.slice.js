import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [
    ],
};
// 기본값인데 없으면 빈배열을 주면된다
// initialState는 Redux 스토어가 처음 생성될 때나 상태가 초기화될 때 슬라이스의 기본 상태를 정의합니다.
// 1. mocking api(가상 백에드) 에서 불러온 todo의 결과값을 전역 상태관리 하기 위해서
// todo.slice.js에 reducers getTodo를 추가하고 기본값이였던 todo를 빈 배열로 만들어준다.
// (이제 백엔드에서 불러올거니까 필욜없음)

// 2. export {} = todoSlice.action에 getTodo도 함꼐 추가해준다
// export {getTodo} = todoSlice.action

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.unshift(action.payload);
            // 이게 ...을 쓰지않아도 할수있게끔해준다 익명 함수에 state,action을 받으면 된다
            //  action.payload는 새로운 todo 항목
        },
        getTodos: (state, action) => {
            state.todo = action.payload;
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const findTodo = state.todo.find((todo) => todo.id === action.payload.id);
            findTodo.content = action.payload.content;
        },
    },
})
// name은 todo -> 키 값이다.
export const { addTodo, deleteTodo, updateTodo, getTodos } = todoSlice.actions;

export default todoSlice.reducer;