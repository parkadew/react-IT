import styled from "styled-components"
import OneTodo from "./oneTodo"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getTodos } from "../../../store/todo.slice";

const TodoList = () => {
    const todos = useSelector((store) => store.todo.todo);
    const dispatch = useDispatch();
    // todo -> rootReducer key
    // todo -> initialState => {todo:[]} key

    useEffect(() => {
        async function fetchTodos() {
            const result = await fetch('/api/todo');
            // "/api/todo"라고하는
            const data = await result.json();
            dispatch(getTodos(data.body));
        }
        fetchTodos();
    }, [dispatch]);

    return (
        <S.Wrapper>
            {todos.map((todo) => (
                <OneTodo key={todo.id} todo={todo} />
            ))}
        </S.Wrapper>
    )
}
export default TodoList

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}