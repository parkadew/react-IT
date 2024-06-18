
import './App.css';
import AddTodoModal from './components/addtodoModal';
import TodoList from './components/todolist';
import TodoProvider from './context/todo.context';

function App() {
  return (
    <TodoProvider>
      {/*이 안에 있는 컴포너트들은 내가 만든 전역 상태(내가 만든 전역상태가 todo.context겠지)를 공유할 수있어요 */}
      <AddTodoModal></AddTodoModal>
      <TodoList></TodoList>
    </TodoProvider>
  );
}

export default App;
