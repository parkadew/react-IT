
// src/pages/todo.js
import React from 'react';
import Addtodo from '../components/add-todo';
import Todolist from '../components/todo-list';

function Todo() {
    return (
        <>
            <Addtodo />
            <Todolist />
        </>
    );
}

export default Todo;

// import { useState } from "react"
// import Addtodo from "../components/add-todo"
// import Todolist from "../components/todo-list"

// function Todo() {
//     const [TODOS, setTODOS] = useState(
//         [
//             {
//                 id: 1,
//                 title: "example-1",
//                 content: "example-1-1"
//             },
//             {
//                 id: 2,
//                 title: "example-2",
//                 content: "example-1-2"
//             },
//         ]
//     )
//     return (
//         <>
//             <Addtodo TODOS={TODOS} setTODOS={setTODOS} />
//             <Todolist TODOS={TODOS} setTODOS={setTODOS} />
//         </>
//     )

// }
// export default Todo