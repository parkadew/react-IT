// src/store.js
import { createStore } from 'redux';

// 초기 상태 설정
const initialState = {
    todos: [
        {
            id: 1,
            title: "example-1",
            content: "example-1-1"
        },
        {
            id: 2,
            title: "example-2",
            content: "example-1-2"
        },
    ]
};
//리덕스에서 액션(action)은 상태(state)를 변경하기 위한 의도를 나타내는 객체이다. 액션 객체는 보통 두 가지 속성을 가진다.
// type: 액션의 타입을 나타내는 문자열입니다. 이 속성은 리듀서가 어떤 종류의 상태 변경을 수행해야 하는지를 결정하는 데 사용됩니다.
// payload: 선택적 속성으로, 액션과 함께 전달되는 추가 데이터를 포함합니다. 예를 들어, 새로운 할 일(todo) 객체나 업데이트된 값 등이 될 수 있습니다.

// 리듀서 정의
function rootReducer(state = initialState, action) {
    // rootReducer: 리듀서 함수 이 함수는 상태와 액션을 인수로 받아 새로운 상태를 반환한다.업로드한다?
    // state = initialState: 이 구문은 기본 상태를 설정한다. 만약 상태가 정의되지 않았다면 initialState 값을 사용합니다.
    // action: 리듀서가 처리할 액션 객체입니다. 액션 객체는 type과 payload 속성을 포함할 수 있습니다.
    switch (action.type) {
        // switch 문을 사용하여 액션의 type에 따라 상태를 업데이트합니다.(action.jsx파일을 확인해보면 알수있다.) 
        case 'ADD_TODO':
            return {
                ...state,
                // state 객체의 모든 속성을 복사합니다.
                todos: [...state.todos, action.payload]
                //state.todos 배열의 모든 요소를 복사하고, 새로운 할 일 객체(action.payload)를 추가합니다.
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                ) //새로운 할 일 객체(action.payload)
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
}
// 스토어 생성
const store = createStore(rootReducer);

export default store;
