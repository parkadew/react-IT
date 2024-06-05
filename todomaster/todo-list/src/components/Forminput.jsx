
import React from "react"
import styled from "styled-components"

const FormInput = ({ label, size }) => {
    return <S.Input>
        <S.InputLabel>FormInput</S.InputLabel>
        <S.Input />
    </S.Input>
}
export default FormInput

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`
const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`
const Input = styled.input`
border: 1px solid #999;
width: 100%;
border-radius: 4px;
padding-left: 16px;
height: 48px;
&::placeholder{
    text-align: center;
}
`
const InputLabel = styled.label`
    position: absolute;
    left: 16px;
    top: -6px;
    font-size: 12px;
    background-color: aliceblue;
    z-index: 100;
    padding: 0 4px;
`
const S = {
    Form,
    InputBox,
    InputLabel,
    Input
}



