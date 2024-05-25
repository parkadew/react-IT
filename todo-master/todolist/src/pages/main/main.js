import { Link, useNavigate } from "react-router-dom"

    const mockProducts = [
        { 
            id: 3,
            category: "rank",
            name: "상품-1",
            price: 3000
        },
        {
            id: 12,
            category: "random",
            name: "상품-2",
            price: 2000
        },
    ]
    
    //컴퍼넌트 함수명의 시작은 무조건 대문자로 시작한다
    function Main() {

        const handler = () => {}
        const navigation = useNavigate()
        // html , javascript에서 사용하는 a태그와 location 객체를 사용해서
        // 페이지를 이동 => bundle.js를 다시 요청

        //useNavigate()는 페이지의 새로고침없이 (history객체와 state를 이용하여 )
        // 페이지의 갱신없이 주소를 이동하는 함수 -> bundle.js 다시 요청x
        // 자바스크립트 자체기능x 

        return <div onClick={handler}>
            {/**
             html 문법을 반환할수있음 => jsx 문법 
             원래는 반드시 jsx를 붙였어야하지만 지금은 js로도 가능
            */}
            {
                mockProducts.map((product) => {
                    console.log("hello")
                    //rect에서 map 이후에는 각 요소에 key라는 속성을 부여해야한다.
                    //렌더트리가 구분할수있는 특정한 고유값
                //    return <Link to href={`/todo/${product.id}?goods=${product.category}`} key={product.id}>
                //         {product.name}
                //     </Link>
                // })
                return <div onClick={()=>{
                        navigation(`/todo/${product.id}?goods=${product.category}`)
                    // window.location.href = `/todo/${product.id}?goods=${product.category}`
                }}>
                    {product.name}
                </div>
            })
        }
       
        </div>
    }
    export default Main