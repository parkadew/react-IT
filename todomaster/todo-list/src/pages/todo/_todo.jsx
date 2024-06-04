import { useParams,useSearchParams } from "react-router-dom"

function Todo(){
    const {todoId} = useParams()
    const [SearchParams] = useSearchParams()
    
    console.log(todoId, SearchParams.get("goods"))
    return <div>투두페이지입니다</div>
}
export default Todo