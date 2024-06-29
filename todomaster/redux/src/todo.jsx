import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
    const todoList = useSelector((store) => store.todo);
    const dispatch = useDispatch();
    console.log(todoList)


    function handleAddTodoDispatch() {
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: Math.floor(Math.random() * 1000000),
                title: "example",
                content: "example",
            }
        });
        // dispatch, type, switch(reducer) ==> useReducer
        // useSelector, rootReducer ==> redux 
    }

    return (<div>
        <button>추가</button>
    </div>);

}
export default Todo;