

// 사용히면 안되는 타입에 대해서 정의

import { useState } from "react";

let f: any = 3; // X 
console.log(a)

// unknown

let e: unknown = 3;

let q = {
    age: 20,
    type: "person",
}

// as const 를 하게 되면 read only로 바꿀수없게 된다.

// type guard, 타입이 불명확할 때 타입이 정해져있다고 가정
if (typeof e === 'string') {
    e.charAt(-1)
}

type People2 = {
    type: string,
    age: number,
    name: string
}

type Person = {
    type: string,
    age: number
}

function isPeople(args: People2 | Person): args is People2 {
    return args.type === 'people'
}

if (isPeople(q)) {
    q.name
} else {
    q.age

}

// 사용하며 안되는 타입들
let d: object = {} // 객체타입
let h: Function = () => console.log('function')

// 타입 안정성을 위해서 사용하는것, 자세할수록 좋을까요,포괄적일스록 좋으띾요
// 타입 스크립트할떄 자동완성이 되지않는 다면 타입을 지정하는것이 좋다.

// Array Type

const g: (number | string)[] = [1, 2, 3]

type Todo = {
    id: number,
    title: string,
    content: string,
    state: boolean
}
// import type {Todo} from '/'
type TodoList = Array<Todo>


// 2 배열 타입이 주어졌을 때 요소의 타입을 가지고 오는 것
type TodoList2 = Array<{
    id: number,
    title: string,
    content: string,
    state: boolean
}>
type Todo2 = TodoList2[number]


const todos: TodoList = [
    {
        id: 0,
        title: "",
        content: "",
        state: false
    }
]

// 배열의 고차함수를 사용해도 타입이 안정적이다.
todos.map((todo) => todo.id)


// 함수 타입
function addNumber(num1: number, num2: number): number {
    return num1 + num2
}

const i = addNumber(2, 3)

// 유틸타입
// 여러분들이 타입을 쉽게 지정할 수 있도록 도와주는 유틸리티성 타입

const useTodo = () => {
    const state: Todo = {
        id: 0,
        title: "",
        content: "",
        state: false
    }
    const addTodo = () => { }
    return (state, addTodo)
}

const j = useTodo()
type Props = {
    addTodo: ReturnType<typeof useTodo>['addTodo'] // 함수의 반환형을 타입으로 지정해 재사용
}

type Post = {
    title: string
    content: string
    nickName?: string // 옵셔널 지정
}

const post: Post = {
    title: "",
    content: "",
}

//제거
const postWithOutNickName: Omit<Post, 'nickNmae' | 'contnet'> = {
    title: "",
}

const postWithOutNickName: Pick<Post, 'title' | 'content'> = {
    content: "",
    title: "",
}

// 모두 옵셔널
const postWithOptional: Partial<Post> = {
    // 타입 안정적이다.
}

post.content
// post.user?.nickName!
// !(단언) --> X
// if(!post.user?.nickName) throw new Error() // return


// 타입 스크립트 공식 홈페이지

// 제네릭 -> 유틸리티 -> 버튼


const theme = {
    white: "#ffffff"
} as const

type ButtonProps = {
    color: keyof typeof theme
}

//객체를 생성하면 객체의 키로 구성된 타입만 따로 구성할 수있다
/**


 {
    color theme[color]
 }
 */

// 제네릭
// 하나의 틀?함수?
// 하나의 함수를 재활용하여 다양한 인스턴스로 활용하는 것

function checkNull(args?: Number): string {
    if (!args) throw new Error("args is null")
    return args
}



function checkStringNull(args?: string): string {
    if (!args) throw new Error("args is null")
    return args
}

function checkGenericNull<T>(args: any): T {
    // 만약 해당 함수 안에 로직이 복잡하게 작성될 경우
    // any를 작성하면 타입이 안정적이지 않지만, 제네릭을 사용하면 안정적이다.

    // 타입가드 Todo
    if (!args) throw new Error("args is null")
    return args
}

// const i = checkGenericNull<Todo>("3") //타입에 대한 변환도 가능
// 같은 인자가 들어갔음에도 변환하는 값이 달라진다

// 제네릭은 죤나게 어려움
// useState

// const [state, setState] = useState({title:"title"})
// 현재 이 state의 타입은 {title : string} 일 것이다.

// setstate{3} // error
// usestate 내부에서 재네릭으로 타입을 받고 setState에 해당 재네릭 타입만 들어오도록 정의\
// <>이거 나오면 제네릭

const usestate = <T>(args?: T): [T | undefined, (args: T) => void] => {
    let state = args
    const setState = (nextState: T) => {
        state = nextState
    }
    return [state, setState]
}

const [stateA, setStateA] = useState<Todo>()
setStateA({
    id: 0,
    title: "",
    content: "",
    state: false,
})