// import logo from './logo.svg'; //--> 원래 기본으로 있던 create-react-app 의 기본 페이지 로고 가져오는 거라 주석 처리 해준 것 (삭제해줘도 됨)
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from "./libs/routes/router"  //-->  export default 로 추출해줬기에 이름 마음대로 설정 가능한 것을 확인 가능
import { ThemeProvider } from 'styled-components';
import { theme } from './libs/styles/theme';
import { Provider } from 'react-redux'
import { store } from './store/store';
// import { server } from './mocks/server';
// import { useEffect, useState } from 'react';

function App() {

  // const [isMswinit, setISmswInit] = useState(false);
  // useEffect(() => {

  //   async function initiallizeMSW() {
  //     if (!isMswinit && process.env.NODE_ENV === "development") {
  //       await server.start();
  //       setISmswInit(true);
  //       // 강제리렌더링
  //     }
  //   }
  //   initiallizeMSW();
  // }, [isMswinit]);

  /*
  npm install msw
  npx msw init ./public
  handlers.js -> server.js
  app.js -> server.listen()
  */

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;

