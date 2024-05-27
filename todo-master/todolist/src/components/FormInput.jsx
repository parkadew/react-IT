


/*


    1.props(properties)
        
        function 상위컴포넌트(){
            const value_1 = "값"
            cosnt value_2 = "값"
        }

        return (
            div연속으로 못쓴다 하지만 fragement로 감싸면 쓸수있다..??
        <div> // 리액트에서는 요소가 연달아 올 수 없다, wrapper로 감싸줘야한다
        <> // Fragement (감싸는 용도)(div로 감쌀것인가 fragment로 감쌀것인가)
            <React.Fragement key={index} // 속성 부여가 가능>  
            <하위 컴포넌트/>
            <하위 컴포넌트/>
            </React.Fragement>
        </div>
        )

    2. 구조분해할당
       -> 자바스크립트에서 데이터의 집단을 나타내는 대표적인 자료구조인 배열과 객체를
       -> 구조를 분해하여 각각의 요소를 변수로 표현한 과정을 축약

       const gwan ={ 
         age: 15,
         height: 200
       }

       const age = gwan.age
       const height = gwan.height

       const {age : gwanAge, height} = gwan
       객체의 키에 맞는 할당이 이루어져야한다.
       console.log(age, height) // 15,200
    
    const gwan = [15,200]
    const [age,height] = gwan

    -> 구조 분해 할당하는 가장 큰 이유는 

        객체의 키값을 명시 -> 구성 파악하기 쉽다
        데이터 집단의 값을 키(index,key)뿐만 아니라 내가 원하는 이름으로 사용
        -> 다른 객체끼리에는 중복되는 키가 존재할 수 있어서 혼돈을 야기할수있다.


    3. 나머지 매개변수 연산자

       function a(A, B, C, D, ....){

       }

       function a(A,B ...rest){
          console.log(rest) {c,d,e,f,g...}
       }

       a(1,2,3,4) -> rest // 3,4
       아름이 꼭 rest일 필요는 없다
*/


import React from "react"

const FormInput = ({label, size}) => {
    return <React.Fragment>
    <div>FormInput</div>
    <div></div>
    </React.Fragment>
}
export default FormInput

// 다음주 수업까지 대면 ---> 다다음주부터는 비대면 
// 30분 전 일찍 열거에요 (9시) >> 대화
