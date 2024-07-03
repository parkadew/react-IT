import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const SignInForm = () => {

    const navigate = useNavigate();

    const change = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === "test" && password === "test") {
            return navigate("/todo")
        }

    }
    // onsubmit해서 그 함수에 event를 전달하는것이 목적이니 event를 받아야지
    // 어떤 event가 올까 예상해보면 
    // email과 password에 오는 값을 판별하기 위해 event로 받은 value의 값을 변수에 저자해줄것이다
    // 그리곤 그변수를 if문 비교를 통해 구별해주는것이다.
    //const email = e.target.value;
    //const password = e.target.value;
    //그러나 위처럼 무작정 event를 받으면 받아야하는 이벤트가 하나이기떄문에 구분이 가지 않을것이다 
    // 그러므로 name 키값을 더해줌으로써 구별햐주자
    // const email = e.target.email.value; 이런식으로
    // 그리곤 간단하다 useNavigate()함수를 변수에 담아 위 if (email === "test" && password === "test")
    // 이게 두개다 true라서 반환될떄 navigate("/todo") 함수를 실행시킨다! 안에 주솔르 받아서

    return <Form onSubmit={change}>
        <Input placeholder="LOGIN" name='email'></Input>
        <Input placeholder="PASSword" name='password'></Input>
        <button >실행</button>
    </Form>
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