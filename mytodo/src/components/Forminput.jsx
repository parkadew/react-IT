import styled from "styled-components"

const FormInput = ({ ...props }) => {
    return <S.InputBox >
        <S.Input {...props} />
    </S.InputBox>
}
export default FormInput

const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`
const Input = styled.input`
border: 1px solid #151628;
background-color: #151628;
border-radius: 4px;
padding-left: 16px;
width: 100%;
height: 48px;
&::placeholder{
    color: #206efa;
    text-align: center;
   
}
`
const S = {
    InputBox,

    Input,

}




