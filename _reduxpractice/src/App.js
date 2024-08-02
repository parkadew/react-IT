import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/main';
import Todo from './pages/todo';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
export default App;

// 먼저 나는 어떤 페이지가 필요한지 생각한다   *페이지가 두개 필요해 = router가 필요하구나 로 떠올려야 한다.
// reactrouterdom을 사용할것이라면 공식 문서에 방문하여 gettingstart에서 사용법을 확인하여 사용한다.
// 2. createBrowserRouter, RouterProvider가 있는 것을 확인할수있다. 이게 필요하다는것을 알아야한다

// 설계를 다하고 가는것이좋다.
// 나는 main 페이지에
// input을 두개 만들고 id:test, pw:test/ 여야지만 todo페이지로 이동할수있게끔 만들것이다.

// todo 페이지에서는
//  todo를 조회하고, 생성하고, 삭제하고, 수정할거야



// page는 main과 todo가 필요학다
// -> 그리고 main 페이지 에서 회원가입과 로그인 페이지가 필요하며 인풋이 필요하다
// 인풋의 값에 따라 페이지가 todo로 넘어갈수있게 만들것이ㅏ다 test -> test

// todopage로 넘어왔을때에는 todolist에 onetodo가 추가되는 형식의 투두리스트를 만들것이다
// 추가,삭제,수정
