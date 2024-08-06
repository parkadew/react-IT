import { http, HttpResponse } from "msw";

// backend
export const login = http.post('/api/user/login', async ({ request }) => {
    // msw에 http가있다 여기에 post로 데이터를 받아올것이다.
    // get과 post의 차이는?  get은 바디데이터 전달이 잘 안된다.
    // /todo?todoId=3&userId=2 / /querystring
    // /todo

    const url = new URL(request.url);
    const { todoId, userId } = url;
    console.log(todoId, userId);// 2,2
    // "/api/user/login/:todoId"
    // const {todoId} = request.params

    // 사용자 ----- request --- backend
    // email,password

    const { email, password } = await request.json();
    // 실제 백엔드 --> Data base(데이터 저장소)
    // 가짜로 작성

    if (email !== "test@test.com" || password !== 'testtest')
        return new HttpResponse(null, {
            status: 400,
            // http response status code
            // 400 bad request -> 사용자가 데이터를 잘못 입력했다
        });
    return HttpResponse.json({
        token: "token",
        status: 200,
        // 200 -> 성공
    });

});
// get은 body데이터 전달이안된다
// 반면에 post는 전부 다된다.
// redux thunck
//
//rtk 적용하는법
// 1. store 폴더 생성한다
// 2.store.js를 작성한다 --> store.js는 어떤 역할은 하는가,저상소 생성,옵션을 설정한다
// 3. app.js에서 Providerfh Router를 감싸준다
// 4. Provider에 store라는 키에 2번에서 생성한 store를 전달한다
// 5. store에 todo.slice.js를 생성한다
// 6. todo.slice의 export된 reducer를 store.js에 등록한다