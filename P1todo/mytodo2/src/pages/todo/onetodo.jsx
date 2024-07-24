import { useRef, useState } from "react";
import styled from "styled-components";

const OneTodo = ({ todo, setTodo, todos }) => {
  // 근데 나는 항상 객체로 넘겨줬는데..

  const contentref = useRef();

  //여기 onclick이벤트를 전달하는 예를 확인 할수있다.
  const onPressDeleteTodo = () => {
    console.log(todo)
    // 왜 이함수 안에 또다른 함수가 있어야하는거지?
    // 이거 진짜 왜일까
    // 예상 1 일단 click이벤트를 받아줄 함수가 없다
    // onPressDeleteTodo 는 이벤트를 받아줄 함수이며 deleteTodo를 실행시켜준다
    const deleteTodo = (ds) => {
      console.log(ds)
      // 어떻게 정확히 클릭한 todoid가 배달될수있냐고
      // 밑에 너가 deleteTodo(todos.id) 이걸 작성했잖니 deleteTodo의 매개변수는 todos.id이다 라고
      // 이게 만약 변수였다면 너가 더 잘이해했을거야
      const filterTodo = todo.filter((ti) => ti.id !== ds)
      // 애초에 이거 해석하기를 삭제버튼을 누른 해당 onetodo를 제외시킨다가 아닌
      //  X 버튼을 눌렀을 때 해당 투두아이템을 제외하고 투두리스트를 화면에 보여줌으로써 삭제 기능을 구현한다.
      // 라고 이해해보면 어떨까? / 결과적으로 삭제 버튼을 눌렀을 때 todoList에서 해당하는 아이템이 제외된 채로 새로운 todoList가 만들어진다.

      //filter의 영향으로
      // 왜 굳이 전에 생성한 todo 와 map을 돌려 생성한 todos의 id르 비교하는거야?
      // 앞의 todo의 배열의 아이디와  deleteTodo를 통해 전달받은 todos의 id
      console.log(todo)
      // 이거 왜 todo.filter로 만든것일까나아 
      // todo인 배열에서 filter라는 조건문을 달아준것이다. -> todos가 곧 요소값 todo값 
      // // 내가 이거 event.value값이 자꾸 어떻게 넘어가나 했더니
      // // 이벤트 객체 하나만 넘기려고 할 때는 이거를 onClick={(e) => onclickHandler(e)}
      // // 생략해서 작성한다.
      // // 삭제 모드를 내가 자연어로 생각해야할때에는 
      // // 특정요소 혹은 특정 조건을 만족하는 요소들을 제외한 새로운 배열을 생성하여 상태를 변경한다.
      setTodo(filterTodo);
      // 이 로직이 기존 배열에 새로운 배열을 넣는건데
      // 아예 랜더링 되지 않는것은 이것 때문이다.
    }
    deleteTodo(todos.id)
    // 내가 클릭한 oneTodo의 id값 --> todos.id인 이유는 내가 todolist에서 map을 돌려
    // map으로 순회한 todo -> todos
  }
  //아니 생각해보니까 내가 화면에 랜더링한것은 todo가 아니라 map의 매개변수todos 잖아
  // 근데 위에 filter는 왜 todo.filter가 되는것인가
  // }
  // 지금 모든 내용들이 무조건 복사본인 todos로들어와야지만 화면에 렌더링 되는것을 확인할수있다.
  // 왜 처음 배열인 todo의 값에 접근하면은 그 내용물들이 화면에 랜더링되어 보여지지않는것이지? 
  // 필히 map을 돌린 복사본 todos에 접근해야지만이 내용물에 접근이 가능하다.

  // onPressDeleteTodo 라는 함수안에 deleteTodo함수를 또 만들어주었다
  // 내가 놓친부분 -> todolist에서 todo와 todos를 전달해주었다.
  // 전에 작성한 todo와 todos의 역할을 제대러 파악하지못했다
  // 전에 작성해서 props로 보낸 todos는 mock데이터이며 todo는 
  //  {todo.map((todos) => (
  //    <OneTodo key={todos.id} todos={todos}
  // map을 돌려서 oneTodo를 생성해줄 당시 todos라는 새로운 매개변수로 받아주었다.
  // 왜 복사본 배열에 접근해야지만이 화면에 랜도링 되는걸까?

  // 아 수정모드를 만들자 그게 textarea가 될것이고
  // 이 수정 모드를 만들때 어떻게 설계해아할까
  // 수정 모드가 true라면 onPressEdit
  // const updateTodo = () => {
  //   //복사본이 필요해
  // }
  // const updateTodo = ({ todoId, content }) => {
  //   // 이 매개변수 todoId 는 뭘까
  //   const temp_todos = [...todos]
  //   //  temp_todos라는 복사본의 필요이유
  //   const selectTodo = temp_todos.findIndex((todo) => todo.id === todoId)
  //   temp_todos[selectTodo] = {
  //     ...temp_todos[selectTodo],
  //     content,
  //   };
  //   setTodo(temp_todos);
  //   // 여기서 매개변수 todId는 뭐야
  // }

  const [isEditMode, setisEditMode] = useState(false)

  const onPressChangeEditMode = () => {
    setisEditMode(true);
    // 이 모드를 나타내게 해주는 기능 만을 한다
    // 지금 이걸 누르면 input으로 바뀌어야 하기 떄문에 상태가 변해야한다 
    // 그리고 버튼에 나태내주어야지
    // 
    // 수정 모드가 아닐떄 수정모드로 변경 시켜주는 함수
    // 수정 모드를 어떻게 정의 할것인가
    // 모달창을 띄워서 수정 시키는것 => 전역 상태관리를 배워야지만 수정가능하다
  };
  const onPressEditMdoe = () => {
    updateTodo({
      todoId: todos.id,
      content: contentref.current.value,
    })
    setisEditMode(false);
    // 수정이 된 새로운 배열이 들어와야한다.
    // 밑으로 구조 분해 할당을 통해 전달 한것이다.
  }

  const updateTodo = ({ todoId, content }) => {
    const temp_todos = [...todo]
    // todos is not iterable 이라는 오류가 발생했다.
    const selectTodo = temp_todos.findIndex((todoe) => todoe.id === todoId)
    //!== -> === 로 수정 왜? 처음 부터 잘못되어있었네
    //!== 조건은 todo.id가 todoId와 다르지 않은 첫 번째 요소의 인덱스를 찾습니다.
    // 이 조건은 수정하려는 특정 todo를 찾는 것이 아니라!
    // todoId와 다른 첫 번째 todo를 찾는 것입니다.
    // 왜 다른 첫번째 todd를 찾게되는것일까
    temp_todos[selectTodo] = {
      ...temp_todos[selectTodo],
      content,
    }
    setTodo(temp_todos)
  }

  return (
    <S.Wrapper state={todos.state}>
      <S.Header>
        <div>
          {todos.state ? "완료" : "미완료"}
          {todos.title}
        </div>
        <div>
          <button onClick={isEditMode ? onPressEditMdoe : onPressChangeEditMode}>{isEditMode ? '완료' : '수정'}</button>
          <button onClick={onPressDeleteTodo}>삭제</button>
        </div>
      </S.Header>
      {isEditMode ? (<textarea ref={contentref} >{todos.content}</textarea>) :
        <S.Content state={todo.state}>{todos.content}</S.Content>}
      {/**아 이건 수정 완료/수정하기 버튼을 보여주ㅡㄴ게 맞나 */}
    </S.Wrapper>)

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
