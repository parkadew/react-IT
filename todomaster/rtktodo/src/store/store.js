import reducer from "../../../redux/src/reducer/todo.reducer"
import { configureStore } from "@reduxjs/toolkit"
import todoReduce from "./todo.reduce";

export const store = configureStore({
    reducer: {
        todo: todoReduce,

    },
    /*
     process.env.NODE_ENV
     env(환경변수) -> 코드의 동작에 영행을 미치는 변수, 동적으로 변경하는 값
                 -> 변수(코드), 환경변수(컴퓨터)
     실제로 사용자들에게 베포하는 것은 bundle된 코드 -> npm run build -> 결과물(NODE_ENV == production)
     npm start (NODE_ENV === 'development')
     */
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


