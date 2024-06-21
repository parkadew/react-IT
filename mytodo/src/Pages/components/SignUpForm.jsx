import FormInput from "../../components/Forminput"
import MButton from "../../components/button"
import styled from "styled-components"

const SignUpform = () => {
    return <S.Form >
        <FormInput placeholder={"Nick_name"} />
        <FormInput placeholder={"Pass_word"} />
        <FormInput placeholder={"Pass_word_confirm"} />
        <MButton>Create an account</MButton>
    </S.Form>
}
export default SignUpform

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