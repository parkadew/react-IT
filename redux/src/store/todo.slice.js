import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: [
        {
            id: 1,
            title: "example-1",
            content: "example-1",
        },
    ],
};
// 기본값인데 없으면 빈배열을 주면된다

export const todoSlice = createSlice({
    name: "todo",
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload);
            // 이게 ...을 쓰지않아도 할수있게끔해준다 익명 함수에 state,action을 받으면 된다
            //  action.payload는 새로운 todo 항목
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
export const { addTodo, deleteTodo, updateTodo } = todoSlice.action;
export default todoSlice.reducer;