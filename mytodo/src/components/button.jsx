
import styled from "styled-components"
import React from "react"

const MButton = ({ children }) => {
    return <S.Button >
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

