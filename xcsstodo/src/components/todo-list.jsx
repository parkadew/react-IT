import OneTodo from "./one-todo"

const Todolist = ({ TODOS, setTODOS }) => {
    return <div>
        {TODOS.map((todo) => (
            <OneTodo key={todo.div} todo={todo} TODOS={TODOS} setTODOS={setTODOS} />
        ))}
    </div>
}
export default Todolist