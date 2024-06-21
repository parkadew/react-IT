
import styled from "styled-components"
import TodoList from "./listcomponent/todolist"
import MButton from "../../components/button"


const Todo = () => {

    const todos = [
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: true
        },
        {
            id: 2,
            title: "example-1",
            content: "example-1",
            state: true
        },
    ]

    return <>
        <S.Wrapper>
            <S.Container>
                <S.Title>TODOLIST</S.Title>
                <TodoList todos={todos} />
                <MButton  >
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