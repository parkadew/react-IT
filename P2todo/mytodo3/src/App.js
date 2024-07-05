import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom"
function App() {
  // 내가 페이지마다 해야할 행위를 모두 정리한 후에 들어가는것이 좋다
  // 먼저 main에서 
  // input을 2개 만들고 id:test , pw:test야만 todo페이지로 이동하게 할거야

  // 나 페이지가 몇개 필요한지 먼저 분류 해보자
  // - react-router-dom을 떠올려야함


  // react-router-dom 공식문서 -> getting start
  // 2. createBrowserRouter/ RouterProvider

  const router = ([
    {
      path: "/",
      Element: <div>main</div>
    },
    {
      path: "todo",
      Element: <div>todo다 씹새야</div>
    },

  ])
  return (
    <RouterProvider></RouterProvider>

  );
}

export default App;
