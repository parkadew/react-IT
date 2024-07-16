import styled from "styled-components";
import React from "react";

const AddTodoModal = ({ setisOpenAddtodoModal, todo, setTodo }) => {

  const onPressAddTodo = (event) => {
    event.preventDefault();
    const NewTodo = {
      id: Math.floor(Math.random() * 10000),
      title: event.target.title.value,
      content: event.target.content.value,
      state: false
    }
    setTodo([...todo, NewTodo])
    setisOpenAddtodoModal(false);
  }
  // onPressAddTodo 라는 함수를 생성후 event를 받는데 왜 event를 받을까 이 생성된 함수는 어디로 가야할까 
  // form에 SUBMITevent로 이동할것이다 이렇게 되면 버튼을 누르면 자동으로 인풋애 입력한 입력값들을 받을수이싿
  // 생성된 함수에 내가 멍청하게 어떤 기능도 아닌데 화살표함수를 먼저 때렸다
  // 나는 newtodo로 새로 넣어줄 객체를 생성해주는것이맞다.
  // 그래 newTodo라는 객체를 생성해줬어 이제 어떻게 해야할까
  // 복사본 배열(전개연산자에) 넣어줘야한다 ...todo,NewTodo
  // 이사실은 알고있었음에 어디에 넣어줘야할지 고민했다 이로직은 함수의 상태를 변경시켜주야하지때문에
  // setTodo로 값을 전달시켜주어야한다 setTodo(...todo,NewTodo)
  // 그리고 input의 name 키값을 입력해주는것은 필수이다 왜냐하면 내가 위에서 event.target.title.value,
  // title. 이라고 내가 작성했다 그럼 값을 찾을수있게해줘야ㅈ 
  // 그리곤 어떻게 해야할까 아 생각도못했네 추가 완료 거기에 더해 하나 추가했으면 모달 창닫는거까지
  // 추가후 모달창 자동 닫힘 =  setisOpenAddtodoModal(false);
  // 오류 발생 -- 지금 새로입력한 내용이 추가가 안되고 모달만 추가가된다. setTodo([...todo, NewTodo]) 이게 문제일텐데
  return (
    <S.Modal>
      <S.Form onSubmit={onPressAddTodo}>
        <S.Title>
          <h1>ADD TODO LIST</h1>
          <button type='button' onClick={() => setisOpenAddtodoModal(false)} > x </button>
        </S.Title>
        <S.Content>
          <input placeholder="제목을 입력해주세요" name='title' />
          <textarea placeholder="할 일을 입력해주세요" name='content' />
        </S.Content>
        <button>
          ADD
        </button>
      </S.Form>
    </S.Modal >
    // 내가 부족해서 { setisOpenAddTodoModal, todos, setTodos } 이 props로 전달되어야한다는것을 확인했다
    // 그럼 왜 전달되야할까 생각해보자
    // 먼저 간단한 그냥 X 버튼 --> onClick={() => setisOpenAddtodoModal(false)} 콜백 함수로 작성해줘야한다 
    // 왜그런지 생각해봤을까?
    // !! react 에서 이벤트 핸들러 함수에 이벤트 객체 말고 다른 인자를 넘기려고 하면 의도한대로 동작하질 않았다.
    //
    // 여기에 추가되는 로직이 만들어져야한다
    // 추가되는 로직 첫번쨰 추가 로직은 그리 복잡하지않는다 이건 외워도 될거같다
    // 복사본 배열을 생성해(전개연산자) 그 뒤에 새로 만들어질 배열을 추가해준다
  )
}
export default AddTodoModal

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;
const Title = styled.div`
  font-size: 24px;
  display: flex;
    align-items: center;;
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
      display: flex;
    justify-content: center;
    align-items: center;;
  margin-top: 16px;
  flex-direction: column;

  & > input {
    background-color: #ecf1f0;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    background-color: #f3f9f8;
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const S = {
  Modal,
  Form,
  Content,
  Title,
};