import styled from "styled-components"
import AccountForm from "./AccountForm"
import { useState } from "react"
import SignInForm from "./SignInForm"

const Main = () => {
    const [formState, setFormState] = useState("LOGIN")

    const change = (e) => {
        setFormState(e.target.value)
    }

    return <S.Wrapper>
        <S.Container>
            <S.Header>
                <input onChange={change}>
                </input>
                <S.Tab onClick={() => setFormState("funck")}>
                    {"Account"}
                </S.Tab>
            </S.Header>
            <S.Line></S.Line>
            {
                formState === "LOGIN" ? <SignInForm /> : <AccountForm />
                // 아 글자 하나 때문에 진짜 개씨발
            }
        </S.Container>
    </S.Wrapper >

}
export default Main


const Wrapper = styled.div`
height: calc(100vh);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #070b23;
`

const Line = styled.div`
height: 2px;
width: 100%;
background-color: #146d93;
`

const Container = styled.div`
    width: 360px;
    border : 2px solid #146d93;
    border-radius: 10px;
    background-color: #040405;
`

const Header = styled.header`
    background-color: #040405;
    display: flex;
    border-radius: 10px;
`
const Tab = styled.div`
    font-size: 32px;
    color: white;
    padding: 16px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #204ef9;
    }   
    background-color: "#e0e0e0";
`

const S = {
    Wrapper,
    Container,
    Header,
    Tab,
    Line
}


