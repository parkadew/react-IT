
function Todo() {
    const TODOS = [
        {
            id: 1,
            title: "example-1",
            content: "example-1-1"
        },
        {
            id: 2,
            title: "example-2",
            content: "example-1-2"
        },
    ]
    return (
        <>
            {TODOS.map((todo) => (<div>{todo.title}</div>))}
        </>
    )

}
export default Todo