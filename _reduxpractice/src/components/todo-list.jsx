
// src/components/todo-list.js
import React from 'react';
import { useSelector } from 'react-redux';
import OneTodo from './one-todo';

const Todolist = () => {
    const todos = useSelector(state => state.todos);
    // 리덕스 스토어의 현재 '상태(state)'를 가져오고, 그 중에서 todos 부분만 선택합니다.

    return (
        <div>
            {todos.map(todo => (
                <OneTodo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Todolist;


// import OneTodo from "./one-todo"

// const Todolist = ({ TODOS, setTODOS }) => {
//     return <div>
//         {TODOS.map((todo) => (
//             <OneTodo key={todo.div} todo={todo} TODOS={TODOS} setTODOS={setTODOS} />
//         ))}
//     </div>
// }
// export default Todolist