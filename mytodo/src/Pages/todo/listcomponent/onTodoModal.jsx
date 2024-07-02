import { useRef, useState } from "react";
import styled from "styled-components";

const OneTodo = ({ todo, todos, setTodos, updateTodo }) => {

  const onPressDeleteTodo = () => {

    const deleteTodo = (todoId) => {
      // deleteTodo 에 매개변수로 todoId를 받았넹? 어디에쓰려고 -> 이거는 위에
      // onPressDeleteTodo 함수 즉 밑에 버튼에 onClick 이벤트를 부여해서 클릭하면 onPressDeleteTodo에 값이 전달되는거야
      // 그렇게 클릭된 데이터 todos데이터 배열이 전달되었지 내가 임의로 적은 todoId에 그렇게 전달 받은 todoId를
      //(filter로 todo.id를 통해 id를 찾아내는거구나)
      // 일단 filterTodo를 선언해준 후 todos를 고차함수 filter를 사용해서 임의의 매개변수 todo => 임의의 todos에 요소값이 들어오는거다
      // 그 요소값이랑 이제 비교를 하는거야 요소 id랑 내가 클릭해서 받아온 todoId의 값을 
      // 나는 100000로 random을 돌렸기때문에 당연히 겹칠일이없을테고 
      // ture면 반환해주는데 그럼 잠깐 random을 10으로 해봐야지 오오오삭제만 안되고 true가된다고 해서 뭐 잗공하는건없네
      // false면 왜 지우져버리지..? 와 미친 true면 생성이 되어버리네 생각이 맞았다 --> true면 반환하니까 생성되는것같다
      //
      const filterTodo = todos.filter((todo) => todo.id !== todoId)
      setTodos(filterTodo); //-> 이건 뭐야 이건 state의 상태를 관리하느 함수에 상태를 관리해주는거야 만약 여기에다가 timer라고 치고 +1을 하게되면
      // 상태에 따라 화면에 랜더링되면 +1을 하게 해줄거야 너는 filtertodo를 넣어줬으니까 filtertodo가 작동하겠지 언제? 너가 onPressDeleteTodo를 눌렀을때
      console.log(filterTodo)
    }
    deleteTodo(todo.id); //클릭한 oneTodo에 대한 id값? 맞네!
  }

  const [isEditMode, setIsEditMode] = useState(false);
  // 상태 최적화를 위한 컴포넌트 분리
  // 이 상태를 정의한 이유 -> 수정하려는 상태가 어떤것인가?

  const contentRef = useRef();
  // useRef를 사용한이유 렌더링과 상관없이, 마운트된 시점부터 언마운트된 시점까지 값을 유지하는 것인데 어떻게 사용할수있을까
  // 수정하는 거니까 전에값은 유지 되어있는게 맞지 
  // 그럼 그 유지되어있는값에 어떻게 값을 더하지?내용을 어떻게 더할까
  // ref={contentRef} 이거 뭐지..? 이게 수정된 값을 담아주네?

  const onPressChangeEditMode = () => {
    setIsEditMode(true);


    // selectTodo = { ...selectTodo, content: content.current.value }
    // temp.todos.find((todo) => todo.id === todoId)
    // const temp_todos = [...todos]
    // setTodos(temp_todos)
  };

  const onPressEdit = () => {
    setIsEditMode(false);
    updateTodo({
      todoId: todo.id,
      content: contentRef.current.value,
    })
  };


  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        <div>
          {todo.state ? "완료" : "미완료"}
          {todo.title}
        </div>
        <div>
          <button
            onClick={isEditMode ? onPressEdit : onPressChangeEditMode}>{isEditMode ? "완료" : "수정"}</button>
          <button onClick={onPressDeleteTodo}>삭제</button>
        </div>
      </S.Header>
      {isEditMode ? (<textarea ref={contentRef}>{todo.content}</textarea>) : (<S.Content state={todo.state}>
        {todo.content}</S.Content>)}
      {/**아 이건 수정 완료/수정하기 버튼을 보여주ㅡㄴ게 맞나 */}
    </S.Wrapper>
  )
};


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
