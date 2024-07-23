import { useDispatch, useSelector } from "react-redux"

const Todo = () => {

    const todolist = useSelector((store) => store.todo);
    const dispatch = useDispatch();
    console.log(todolist)

    function handleAddTodoDispatch() {
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: Math.floor(Math.random() * 10000),
                title: "example",
                content: "example",
            },
        })
        //dispatch, type,switch(reducer) ==> useReducer()
        // useSelector, rootreducer ===> redux
    }


    return <div>
        <button onClick={handleAddTodoDispatch}>추가 </button>
    </div>
}
export default Todo