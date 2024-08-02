
// src/components/one-todo.js
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../action';

const OneTodo = ({ todo }) => {
    const dispatch = useDispatch();
    const titleEditInput = useRef();
    const [isEdit, setIsEdit] = useState(false);

    const onClickSetEditMode = () => {
        setIsEdit(true);
    };

    const onClickCompleteMode = () => {
        const updatedTodo = {
            ...todo,
            title: titleEditInput.current.value,
        };
        dispatch(updateTodo(updatedTodo));
        setIsEdit(false);
    };

    const onDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <div>
            {isEdit ? <input ref={titleEditInput} defaultValue={todo.title} /> : todo.title}
            {todo.content}
            <button onClick={isEdit ? onClickCompleteMode : onClickSetEditMode}>
                {isEdit ? '완료' : '수정'}
            </button>
            <button onClick={onDeleteTodo}>삭제</button>
        </div>
    );
};

export default OneTodo;




// import { useRef, useState } from "react"

// const OneTodo = ({ todo, TODOS, setTODOS }) => {

//     const titleEditInput = useRef()

//     const [isEdit, setIsEdit] = useState(false);

//     const onClickSetEditMode = () => {
//         setIsEdit(true)
//     }
//     const onClickCompleteMode = (id) => {
//         // 복제하여 내가 수정을 원하는 요소를 찾아와야한다
//         // findIndex
//         const tempTODOS = [...TODOS]
//         const TodoIndex = tempTODOS.findIndex((todos) => todos.id === todo.id);
//         tempTODOS[TodoIndex] = {
//             ...tempTODOS[TodoIndex],
//             title: titleEditInput.current.value,
//         }
//         setTODOS(tempTODOS)
//         setIsEdit(false);
//     }
//     const OnDeleteTodo = () => {
//         const updateTodo = TODOS.filter((t) => t.id !== todo.id);
//         //삭제를 클릭한 todo의 고유 번호는 id
//         // todo.id 는 todos를 순회하며 각 요소마다 고유id의 값과 비교하는 값
//         // filtertodo === 내가 삭제를 선택한 todo를 제외한 나머지로 만들어진 새로운 배열
//         setTODOS(updateTodo)
//     }

//     return (
//         <div>
//             {isEdit ? <input ref={titleEditInput} defaultValue={todo.title} /> : todo.title}
//             {todo.content}
//             <button onClick={isEdit ? onClickCompleteMode : onClickSetEditMode}>
//                 {isEdit ? "완료" : "수정"}</button>
//             <button onClick={OnDeleteTodo}>삭제</button>
//         </div>

//     )

// }
// export default OneTodo

// //왜오애왜오애왜 전역변수로 만들기 안해 미친노마왜오애오야아아아아아아아앙ㅇ아아ㅏ아앙\
// // 전역변수미친싸이코새끼야아앙
