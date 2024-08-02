

//1.스토어 생성
const store = createstore(Reducer)

const initialstate = { // 초기 상태 설정
    todos: [
        {
            id: 1,
            title: "example-1",
            content: "example-1"
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2"
        },
    ]
};

const Reducer = (state = initialstate, action){

    switch (action)
}

    export default store;

// 리듀서 정의

