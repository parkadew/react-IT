import { combineReducers } from "redux";
import todo from "./todo.reducer"
// import user from './user.reducer'
// import한 이름이 key값이 되기 떄문에 굉장히 중요함
// reducer를 합치는 역할을 한다.

export const rootReducer = combineReducers({ todo })
// 중앙에 저장할 리듀서를 합치고 키로 분류하기 위한 코드

