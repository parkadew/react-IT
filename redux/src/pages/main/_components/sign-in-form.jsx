import styled, { css } from "styled-components"
import FormInput from "../../../components/FormInput"
import TDButton from "../../../components/Button"
import { Form } from "./style"
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const signInFormSchema = yup.object().shape({
    email: yup.string().email('이메일 양식이 아닙니다').required(" "),
    password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required(" ")
})

const SignInForm = () => {

    const navigate = useNavigate()

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signInFormSchema),
    })

    const handlePressSignIn = async (data) => {
        try {
            const response = await fetch("/api/user/login", {
                //fetch는 자바스크립트에 내장된 빌트인 객체이다. 그리고 백엔드에도 주소가 있다.
                // 백엔드 주소
                method: 'post',
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            }) //.then((res) => res.json());
            const response_data = await response.json();
            if (response_data.status === 200) {
                navigate("/todo/3");
            }
            //fetch 는 데이터가 오면 json형태로 바꿔줘야한다.
        } catch (err) {
            console.log(err);
            alert("아디이와 비밀번호를 확인해주세요");
        }
    };

    return <S.Form onSubmit={handleSubmit(handlePressSignIn)}>
        <FormInput label={"이메일"} placeholder={"email"} size={3} name={'email'} register={register}
            error={errors.email?.message}
        />
        <FormInput label={"비밀번호"} placeholder={"password"} size={3} name={'password'} register={register}
            error={errors.password?.message}
        />
        <TDButton variant={'primary'} size={'full'} shape={'shape'} disabled={!isValid}>
            로그인
        </TDButton>

    </S.Form>
}

export default SignInForm


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
    background-color: #fff;
    z-index: 100;
    padding: 0 4px;
`

const S = {
    Form,
    InputBox,
    Input,
    InputLabel
}