
// src/pages/main.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function onSubmitSignIn(event) {
    event.preventDefault();
    const id = event.target.id.value;
    const password = event.target.password.value;

    if (id === 'test' && password === 'test') {
      navigate('/todo');
    }
  }

  return (
    <form onSubmit={onSubmitSignIn}>
      <input name="id" placeholder="ID" />
      <input name="password" placeholder="Password" type="password" />
      <button>로그인</button>
    </form>
  );
}

export default Home;


// import { useNavigate } from "react-router-dom";

// function Home() {
//     <div>home</div>
//     const navigate = useNavigate();
//     /*
//         input 2개 만들고 
//         button을 눌렀을때 todo페이지로 이동    
    
//     */
//     function onSubmitSignIn(event) {
//         event.preventDefault();
//         const id = event.target.id.value;
//         const password = event.target.password.value;

//         if (id === 'test' && password === 'test') {
//             navigate("/todo")
//         }
//     }
//     return (
//         <form onSubmit={onSubmitSignIn}>
//             <input name='id'></input>
//             <input name='password'></input>
//             <button>로그인</button>
//         </form>
//     )
// }

// export default Home