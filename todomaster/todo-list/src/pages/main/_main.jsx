
import { useNavigate } from "react-router-dom"

const mockProducts = [{
    id:3,
    category: "rank",
    name: "상품-1",
    price:3000
},
{
    id:12,
    category: "random",
    name: "상품-2",
    price:5000
},

]
function Main(){
    const navigate = useNavigate()
   
        return <div>
           {
            mockProducts.map((product) => {
                console.log("hello")
               return <div key={product.id} onClick={()=>{
                navigate(`/todo/${product.id}?goods=${product.category}`)
               }}>
                    {product.name}
                </div>
             })
           }
        </div>
   
   
    }
    


export default Main