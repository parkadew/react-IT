import styled from "styled-components"
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"

const SignInForm = () => {
    return <S.Form>
        <FormInput label={"이메일"} placeholder={"이메일을 입력하세요"} size={3} />
        <FormInput label={"비밀번호"} placeholder={"비밀번호를 입력하세요"} size={3} />
        <TDButton variant={'primary'} size={'full'}>
            로그인
        </TDButton>


    </S.Form>
}
export default SignInForm

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`

const S = {
    Form,
}

