import styled from "styled-components"
import { useState } from "react"
import React from 'react'
import LoginForm from "../components/LoginForm"
import SignUpform from "../components/SignUpForm"

function Main() {
    const [formState, setFormState] = useState("LOG_IN")
    //상태로 만들어 화면을 변화시켜준다 어떤걸 상태로 만들걸까 formstate -> 상태
    //tab에는 어떤게 들어가면 좋을까

    const TAB_ARRAY = [
        {

            name: "LOG_IN",

        },
        {

            name: "SIGN_UP",

        }
    ]
    const handlePressTab = (tabname) => {
        setFormState(tabname)
    }

    return <S.Wrapper>
        <S.Container>
            <S.Header>
                {TAB_ARRAY.map((tab, index) => <S.Tab
                    key={index}
                    onClick={() => handlePressTab(tab.name)} >
                    {tab.name}
                </S.Tab>)}
            </S.Header >
            <Line></Line>
            {
                formState === 'LOG_IN' ? <LoginForm /> : <SignUpform />
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
