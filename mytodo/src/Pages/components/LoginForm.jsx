import FormInput from "../../components/Forminput"
import styled from "styled-components"
import MButton from "../../components/button"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate()

    const handlePressLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if (email === "test" && password === "test") {
            return navigate("/todo/3")
        }
        alert("아이디와 비밀번호를 확인해주세요")
    }

    return <S.Form onSubmit={handlePressLogin}>
        <FormInput placeholder={"Nick_name"} name="email" />
        <FormInput placeholder={"Pass_word"} name="password" />
        <MButton >Log_In</MButton>
    </S.Form>
}

export default LoginForm

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`

const S = {
    Form

}
