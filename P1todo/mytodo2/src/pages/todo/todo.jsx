import styled from "styled-components";
import Todolist from "./todolist";
import { useState } from "react";
import AddTodoModal from "./addtodomodal";

//일단 todo에서 임의의 mockdata를 형성해볼까?
//usestate에 배열로 값을 적어서 todolist에 전달해줄것야 왜 전달해줄까 
// todolist의 onetodo로 전달해주기 위해서지
// 배열안에 객체로 생성해주었다
// 이걸 보이게 해주고 싶어 그게 onetodo의 역할이야 onetodo에 값이 전달되도록 props로 전달해보자
// 보내줬으면 todolist로가서 받아줘야지
// 그리고 받은 데이터로 onetodo를 생성해줄거야
// 그리곤 todo로받은 데이터를 map을 돌려 생성해줄거야

const Todo = () => {

    const [isOpenAddtodoModal, setisOpenAddtodoModal] = useState(false);
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: false
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2",
            state: false
        },
    ]);
    return <S.Wrapper>
        {isOpenAddtodoModal && <AddTodoModal todo={todo} setTodo={setTodo} setisOpenAddtodoModal={setisOpenAddtodoModal} ></AddTodoModal>}
        <S.Container>
            <S.Title>TODOLIST</S.Title>
            <Todolist todo={todo} setTodo={setTodo} />
            <button onClick={() => { setisOpenAddtodoModal(true) }}>추가</button>
        </S.Container>
    </S.Wrapper>
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