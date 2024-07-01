
import './App.css';
import { Provider } from "react-redux"
import Todo from './todo';
import { createStore } from 'redux';
import { rootReducer } from './reducer/root'
import { server } from './mocks/surver';

server.listen();

const store = createStore(rootReducer);
// 1. 중앙 저장소 생성
// createStore(reducer)

// 3. rootreducer 와 합칠 reducer들을 생성
// 4. createStore rootreducer 전달
// 사용 준비 끝

//---일단 안되니까 rtk로 넘어간다

// rtk?
// 

function App() {
  server.listen();
  return (
    <Provider store={store}>
      {/*2. 전역상태 관리를 위한 프로바이더 생성 */}
      <Todo></Todo>
    </Provider>
  );
}

export default App;
