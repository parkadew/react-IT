import styled from "styled-components";

const OneTodo = ({ todo, deleteTodo, updateTodo }) => {

  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        <div>
          {todo.state ? "완료" : "미완료"}
          {todo.title}
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </S.Header>
      <S.Content state={todo.state}>
        {todo.content}
      </S.Content>
    </S.Wrapper>
  )
}
export default OneTodo


const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: white;
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  display: flex;
    align-items: center;
  justify-content: space-between;
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
`;

const S = {
  Wrapper,
  Header,
  Content,
};
