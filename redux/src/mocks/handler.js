import * as UserApi from "./apis/user.api";
import * as TodoApi from "./apis/todo.api"
// {login : functoin}

export const handlers = [...Object.values(UserApi), ...Object.values(TodoApi)];
// function


// import { HttpResponse, http } from "msw";

// export const handlers = [
//     http.get("/todo", () => {
//         return HttpResponse.json({
//             id: 1,
//         });
//     }),
// ];