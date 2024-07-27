import * as UserApi from "./apis/user.api";
import * as TodoApi from "./apis/todo.api"
// {login : functoin}

export const handlers = [...Object.values(UserApi), ...Object.values(TodoApi)];
// function