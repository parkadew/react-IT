import styled from "styled-components";

const AccountForm = () => {

    return <Form>
        <Input placeholder="id"></Input>
        <Input placeholder="password"></Input>
        <Input placeholder="password-confirm"></Input>
    </Form>
}
export default AccountForm;

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
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

