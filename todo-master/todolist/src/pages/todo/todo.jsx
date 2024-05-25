
import styled from 'styled-components'
/*
컴포넌트를 나누는 기준

1. 재사용
2. 가독성
3. 단일 기능
4. 랜더링 최적화
-> 리랜더링 (함수 재실행)
-> 내가 리랜더하고 싶은 함수(컴포넌트)가 아니라면 랜더링 해서는 안된다.

=> 코드를 치기 전에 컴포넌트 구조를 구상 (완벽하지는 않아도 괜찮습니다)
=> 코드를 치면서, 리뷰를 받을면서 컴포넌트 구조를 수정
*/

const Main = () => {
    // 컴포넌트 -> 레이아웃, 회원가입 폼, 로그인 폼, 인풋, 버튼
    // 컴포넌트 나누는게 익숙치 않다면 -> 한번에 작성  후 이후에 나누는것도 ok

    return <div>:)</div>
}
export default Main

// 컴포넌트 앞글자는 항상 대문자로 만들어야한다.
// 스타일 된 요소를 생성해서 컴포넌트화 한다 === styled components
const Wrapper = styled.div `
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



`