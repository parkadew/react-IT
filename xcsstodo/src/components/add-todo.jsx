
const Addtodo = ({ TODOS, setTODOS }) => {

    const onSubmitAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: event.target.title.value,
            content: event.target.content.value
        }
        setTODOS([...TODOS, newTodo]);
        console.log(TODOS)
    }

    return <form onSubmit={onSubmitAddTodo}>
        <input name="title" placeholder="title"></input>
        <input name="content" placeholder="content"></input>
        <button>추가</button>
    </form>
}
export default Addtodo