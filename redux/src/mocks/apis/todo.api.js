import { http, HttpResponse } from 'msw'

export const addTodo = http.post("/api/todo", async () => {
    // input -> title, content -> body
    const { title, content } = await Request.json();
    // 백엔드가 data base에서 지정하고 저장할 떄 생긴 고유 번호를 id로 삼은 객체를 전달

    return HttpResponse.json({
        status: 200,
        data: {
            id: Math.floor(Math.random() * 1000000),
            title,
            content,
            state: false,
        },
    });
});

export const getTodos = http.get("/api/todo", async () => {
    //request input -> X
    // 만약에 내가 쓴 데이터만 불러오고 싶다 --> 출입증 제기(나 이런 사람이야) --> token(axios-todo)
    // token은 자동으로 데이터에 실리기 떄문에 따로 보내지 않아도 된다

    return HttpResponse.json({
        status: 200,
        data: [
            {
                id: 1,
                title: "example-1",
                content: "example-2",
                state: false,
            },
        ],
    });
});


// export const updateTodo = http.patch();
// export const deleteTodo = http.delete();
