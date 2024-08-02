
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../action';

const Addtodo = () => {
    const dispatch = useDispatch();

    const onSubmitAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: event.target.title.value,
            content: event.target.content.value
        };
        dispatch(addTodo(newTodo));
        // addTodo 액션 생성자를 호출하여 newTodo 객체를 매개변수로 전달하고, 반환된 액션 객체를 dispatch합니다.
    };

    return (
        <form onSubmit={onSubmitAddTodo}>
            <input name="title" placeholder="title" />
            <input name="content" placeholder="content" />
            <button>추가</button>
        </form>
    );
};

export default Addtodo;

// const Addtodo = ({ TODOS, setTODOS }) => {

//     const onSubmitAddTodo = (event) => {
//         event.preventDefault();
//         const newTodo = {
//             id: Math.floor(Math.random() * 1000),
//             title: event.target.title.value,
//             content: event.target.content.value
//         }
//         setTODOS([...TODOS, newTodo]);
//         console.log(TODOS)
//     }

//     return <form onSubmit={onSubmitAddTodo}>
//         <input name="title" placeholder="title"></input>
//         <input name="content" placeholder="content"></input>
//         <button>추가</button>
//     </form>
// }
// export default Addtodo