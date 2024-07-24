
const initialState = {
    todo: [
        {
            id: 1,
            title: "example-1",
            content: "example-1",
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload);
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

export const { addTodo, deleteTodo, updateTodo } = todoSlice.action;
export default todoSlice.reducer;