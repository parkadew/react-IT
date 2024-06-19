import { useReducer } from "react"
import { userReducer } from "../reducer/user.reducer"

const UserList = () => {
    const [users, dispatch] = useReducer(userReducer, [
        {
            id: 1,
            name: "김사과"
        },
    ]);
    // const [상태명, 액션 전달 함수] = useReducer(생성한 reducer,기본값)
    const handlePressAddUser = () => {
        dispatch({
            type: "ADD_USER",
            payload: {
                id: Math.floor(Math.random() * 100000),
                name: "이멜론",
            },
        });
        // 추가하는 로직을 작성
    };

    return <div>
        <button onClick={handlePressAddUser}></button>
    </div>
}