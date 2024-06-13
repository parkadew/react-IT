
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"
import Form from "./style"





const SignInForm = () => {
    const handlepressSignin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if (!email.trim() || !password.trim()) return;
    }
    return <S.Form>
        <FormInput label={"이메일"} placeholder={"이메일을 입력하세요"} size={3} name="email" />
        <FormInput label={"비밀번호"} placeholder={"비밀번호를 입력하세요"} size={3} name="password" />
        <TDButton variant={'primary'} size={'full'}>
            로그인
        </TDButton>
    </S.Form>
}
const S = {
    Form,
}
export default SignInForm



