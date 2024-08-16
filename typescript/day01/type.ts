// 나중에 프로젝트할떄는 npm i typescript로 typescript를 설치해서 사용해주어야한다.
// vite template // react-ts 

let a: number = 5; // 타입 스크립트에서는 타입을 통해 타입스크립트가 타입을 추론
// a = "안녕하세요" 오류 숫자밖에 못드러옴
a = 7; // 이러면 오류 안남

let b: number | string = 5;
b = "안녕"

// 타입 스크립트는 타입을 추론하려 한다 -- 추론이 잘못될 수 있음, 지정 
// 타입 지정이 문서화의 역할도 하고 있기 때문에 
// 추론이 되는 상황에서 추론할지 지정할지 팀의 컨벤션

// 유니온타입 "|"

let c: "gwan" = "gwan"
const variant: "primary" | "secondary" = "secondary"
// 값으로도 타입 지정 가능하다
// 이런식으로 값을 주면 gwan이란 값 밖에 c에 들어갈수있다.
// object

//type alias or interface

type person = {
    age: number,
    address: string
}
// & ComponentType<'div'>
// 중복 선언이 불가 
// 상속이 되지 않아서 합성이 어려움(&)
// 함수에서 미리보기 가능

interface People {
    age: number
    address: string
}
//--- 
interface People {
    name: string
}
// extands ComponentType<'div>
// 중복선언 가능 --> 합성
// 상속이 가능 & 대신에 extands 
// 타입에서 미리보기 불가능


const Gwan: person = {
    age: 20,
    address: ""
    // ... 
}
console.log(Gwan.age)

//person은 Gwan에 어떤 키가 있는지 알수없음
// Gwan으 type을 재활용하여 타입을 지정

// const person = {
// age : 18 
//}

const person = {
    age: 18,
    // ...
    address: "",
}
/**
 * 
 * @param {title, content}
 */
function addTodo({ title, content }: { title: string, content: string }) {

}
addTodo({
    content: "",
    title: ""
})

// 개발 과정에서 오류를 줄일수있다.
// 문서화 역할을 수행해준다.
// 개발자 경험 상승

// ---- 단점

// 타입을 강제화한다.
// ektl qhrtmqgkrl