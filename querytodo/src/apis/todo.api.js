import { baseHttp } from "./base"


const TodoApi = {
  addTodo({ title, content }) {
    return baseHttp.post("/todo", { title, content })
  },

  async getTodo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        return baseHttp.get('/todo')
      }, 1500)
    }).then(() => baseHttp.get('/todo'))
  },
  // 1.5초 loading이 뜬후 실행됨

  //   setTimeout(() => {
  //   return baseHttp.get('/todo')
  // }, 1500);
  // return baseHttp.get("/todo") 

  // async형태로 바꿔줘야한다




  updateTodo({ todoId, title, content, state }) {
    return baseHttp.patch("/todo", { title, content, state }, {
      params: {
        todoId // "/todo?todoId=${todoId}"
      }
    })
  },

  deleteTodo(todoId) {
    return baseHttp.delete(`/todo/${todoId}`)
  }
}
export default TodoApi