
import styled from "styled-components"
import TodoList from "./listcomponent/todolist"
import MButton from "../../components/button"
import { useState } from "react";
import AddTodoModal from './listcomponent/addmodal'

const Todo = function () {

    const [isOpenAddTodoModal, setisOpenAddTodoModal] = useState(false);
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: true,
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2",
            state: false

        }
    ]);

    return <>
        <S.Wrapper>
            {isOpenAddTodoModal && <AddTodoModal todos={todos} setTodos={setTodos} setisOpenAddTodoModal={setisOpenAddTodoModal} />}
            <S.Container>
                <S.Title>TODOLIST</S.Title>
                <TodoList todos={todos} setTodos={setTodos} />
                <MButton size={'full'} variant={'primary'} onClick={() => setisOpenAddTodoModal(true)}>
                    추가
                </MButton>
            </S.Container>
        </S.Wrapper>
    </>
}
export default Todo


const Wrapper = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        `;

const Container = styled.div`
        width: 420px;
        height: 100%;
        background-color: '#60c38c';
        border-radius: 8px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        position: relative;
        `;

const Title = styled.h1`
        background-color: '#60c38c';
        color: white;
        padding-left: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        `;

const S = {
    Wrapper,
    Container,
    Title
}