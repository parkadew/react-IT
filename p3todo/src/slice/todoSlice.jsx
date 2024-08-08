import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, title: 'example-1', content: 'example1-1' },
        { id: 1, title: 'example-2', content: 'example1-2' },
    ]
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // 각 리듀서 함수정의
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state
            }
        }


    }

})