
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
    initialState,
    reducerse: {
        addTodo: (state, action) => {
            state.todo.unshift(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const findTodo = state.todo.find((todo) => todo.id === action.payload.id);
            findTodo.content = action.payload.content;
        }
    },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
