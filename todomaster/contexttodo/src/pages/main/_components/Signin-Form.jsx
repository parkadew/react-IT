
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"
import Form from "./style"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import useInput from "../../../hooks/use-input"

const SignInForm = () => {

    const navigate = useNavigate()
    const [email, handleChangeEmailValue] = useInput("");
    const [password, hadleChangepasswordValue] = useInput("");

    const handlepressSignin = (event) => {
        event.preventDefault()

        const { email, password } = event.taret
        // const email = event.target.email.value
        // const password = event.target.password.value
        if (!email.value.trim() || !password.value.trim()) return
        if (email.value === "test@test.com" && password.value === "testtest") {
            return navigate("/todo/3")
        }
        alert("아이디와 비밀번호를 확인해주세요")
    }

    const isValidEmail = email.includes("@");
    const isValidPassword = password.length >= 8;

    return <S.Form onSubmit={handlepressSignin}>
        <FormInput label={"이메일"} placeholder={"이메일을 입력하세요"} size={3} name="email" onChange={handleChangeEmailValue} error={!isValidEmail && email && "이메일 양식이 맞지않습니다"} />
        < FormInput label={"비밀번호"} placeholder={"비밀번호를 입력하세요"} size={3} name="password" onChange={hadleChangepasswordValue} error={!isValidPassword && password && '비밀번호는 8글자 이상이여야합니다'} />
        <TDButton variant={'primary'} size={'full'} disabled={!isValidEmail || !isValidPassword}>
            로그인
        </TDButton>
    </S.Form>
}
const S = {
    Form,
}
export default SignInForm



