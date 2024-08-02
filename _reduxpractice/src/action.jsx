// src/actions.js
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});
//이 함수는 todo 객체를 매개변수로 받아서, type과 payload 속성을 가진 액션 객체를 반환합니다.
// 어떻게 매개변수로 받아?
// 이 액션 생성자가 실제로 사용되는 부분을 살펴보겠습니다. 컴포넌트에서 사용자 입력을 받아 이 액션 생성자를 호출하고, 생성된 액션 객체를 dispatch합니다.

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    payload: todo
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: { id }
});
// 여기서 보이는 payload가 어떻게 import된곳에서 매개변수로 받아서 payload로 전달되나보네
