import { createStore } from "redux";


const initialstate = { // 초기 상태 설정
    todos: [
        {
            id: 1,
            title: "example-1",
            content: "example-1"
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2"
        },
    ]
};

const Reducer = (state = initialstate, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                )
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
}

//1.스토어 생성
const store = createStore(Reducer)

export default store;

// 리듀서 정의

