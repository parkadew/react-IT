import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todo.slice";
import logger from "redux-logger"

export const store = configureStore({
    reducer: {
        todo: todoReducer,

        /**
   process.env.NODE_ENV
   env(환경변수) -> 코드의 동작에 영향을 미치는 변수, 동적으로 변경하는 값
               -> 변수(코드), 환경변수(컴퓨터)
   실제로 사용자들에게 베포하는 것은 bundle된 코드 -> npm run build -> 결과물(NODE_ENV === production
   npm start (NODE_ENV === 'development')
   */
        //rtk는 이미 다양한 미들웨어 설치된 상태, 따라서 기존에 있는 미들웨어에 로거라는 기능을 합치기 위해서 concat을 사용한다.
        // getDefaultMiddleware --> rtk의 기존 미들웨어를 가지고 오는 함수
    },
    devTools: process.env.NODE_ENV !== 'prodiuction',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
