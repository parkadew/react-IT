
import './App.css';
import TodoProvider from './context/todo.context';
import AddTodoModal from './components/addTodoModal';
import TodoList from './components/todoList';

function App() {
  return (
    <TodoProvider>
      <div className='App' />
      <AddTodoModal></AddTodoModal>
      <TodoList></TodoList>
    </TodoProvider>
  );
}
export default App;
