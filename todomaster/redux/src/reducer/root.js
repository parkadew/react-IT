
import { combineReducers } from "redux";
import todo from "./todo.reducer"

//import 한 이름이 key값이 되기 떄문에 중요

export const rootReducer = combineReducers({ todo });
// 중앙에 저장할 reducer를 합치고 키로 분류하기 위한 코드