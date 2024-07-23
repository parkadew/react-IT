import { Provider } from 'react-redux'
import './App.css';
import { createStore } from 'redux'
import { rootReducer } from "./reducer/root"
import Todo from './todo.jsx/todo';

const store = createStore(rootReducer);
//1. 여기가 중앙 저장소 생성
// createStore(reducer) createStore 안에 reducer가 들어와야한다

// 3. rootReducer와 합칠 reducer들을 생성 
// 4. createStore rootReducer 전달
// 사용 준비 끝

function App() {
  return (
    <Provider store={store}>
      {/*2. 전역상태관리를 위한 프로바이더 생성*/}
      <Todo />
    </Provider>
  );
}

export default App;
