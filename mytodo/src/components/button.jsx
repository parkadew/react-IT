
import styled from "styled-components"
import React from "react"

const MButton = ({ children, ...rest }) => {
    // 미치겠다 지금까지 안됬던이유가 버튼에 전개연산자 ...rest를 안사용해서다 이거 이유 확실히 알고 넘어가야겠다
    // ...rest 전개연산자가 나머지 매개변수야 나머지 매개변수인데 너가 todo에서 butto에 props로 onClick={() => setisOpenAddTodoModal(true) 를 전달했는데 어떻게 받을거야 
    // 받을수있는 걸 안적어줬잖아 만약 전개연산자 안쓸거였으면 오 근데 이벤트인 onclick은 onclick이라고 써도 안받아지네
    // 그냥 이벤트를 받을때에는 전개연산자를 사용해서 props를 전달받는다고 생각하자
    return <S.Button
        {...rest}
    >
        {children}
    </S.Button>
}
export default MButton

const Button = styled.button`
    background-color: #204ef9;
        color:#d8def3;
        outline: none;
        border-radius: 3px;
        border-color: #204ef9;
        width:100%;
        aspect-ratio: 8/1;
        font-weight: 900;
       
`
const S = {
    Button
}

