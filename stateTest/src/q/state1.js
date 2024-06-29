import { useState } from 'react'
import PlayListMock from "../__mock__/playList.json";
// const PlaylistMockData = PlayListMock.playlist.map((l) => ({
//   ...l, id: Math.floor(Math.random() * 100000)
// }))

const Playlist = PlayListMock.playlist.map((l) => ({
  ...l, id: Math.floor(Math.random() * 100000)
}))

function State1() {

  const [List, setList] = useState(Playlist)

  const [newTitle, setNewTitle] = useState("")
  const [newSinger, setNewSinger] = useState("")

  const onPressPlusList = (event) => {
    event.preventDefault();
    const NewList = {
      title: newTitle,
      signer: newSinger,
    }
    setList([...List, NewList])
  }
  // const deleteList = (id) => {
  //   //     const dlbt = addPlayList.filter(a => a.id !== id);
  //   //     setaddPlaylist(dlbt)
  //   //   }
  const deleteList = (song) => {
    const filterList = List.filter((li) => li.id !== song)
    setList(filterList)
  }

  /* 
    문제 1.
    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.
 
    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  /* 일단 화면에 내가 가져온 list들을 보여주고싶어 
    -> li에 내용들이 있네?? 그럼 li에 내용들이 보여질수있게끔 해야지
       첫번째 map돌리는 법부터 다시 -> 지금 li의 내용들을 map을 돌리고 싶은 거잖아 
        {List.map((song) => <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
          <button>삭제 </button>
        </li>)}
        위 형태를 보고 태그에 Map을 돌리고싶을때 어떤식으로 돌려야하는지 확실히 확인하자
        li 전체를 map을 돌리고 싶은거잖니?

        --

        그리고 이제 다음으로 나는 추가 먼저 어떻게 구상할지 생각해볼거야
        추가를 하려면
        내가 불러온 mockdata에 추가를 해줘야 보이는거잖아?
        그러면 먼저 내가 입력해서 -> 그 인풋에 입력한 정보를 가지고있는 새로운 객체가 필요해
        지금 내가 가져온 platlist의 예시데이터는 -> 
           {
              "title": "The Best of the 80's",
              "signer": "Various Artists"
            },
        이런 모습을 하고있다.
        id값 웨 줘야하지?
        id 값을 넣어줘야(데이터를 명확하게 정해줘야)
        순서대로 진행 할 수 있고 순서에 맞게 댓글 삭제와 추가를 진행 가능하고 한다.
        키 값은 객체의 아이디 (고유한 값)으로 줘야한다.
        id로 고유한 값으로 줘야지만 이 순서가 바뀌었을때 엉뚱한 위치에 랜더링이 될 수 있기 때문에 반드시 키를 지정해줘야한다.
        key={List.song.title} 키값을 title로 줄생각도 해봤는데 그러 같은 tiltle이 들어오면 어뜨케 하려구 
        일단 해봐야겠다.-> title로 하면되긴된다 추가는 되는데 아마 삭제 할때 문제가 발생할것같다.

        그렇다 치고 이제 내가입력한 값을 저장하고 그 저장된걸 클릭했을떄 밀어넣어줄 로직을 구현해야한다
        1 내가 입력한 새로운 값 저장하기 
          먼저 클릭하면 실행되어 input값을 저장할 함수를 생성해주자
         onPressPlusList 이 함수는 내가 아는 선에서 무조건 이벤트를 받아와야해 왜냐하면 여기 안에 새로운 객체에
         input에 입력한 값을 받아와서 새로운 객체를 만든후 넣어줘야하기 떄문이지

         삭제기능을 만들어보자
         먼저 삭제를 하려면 -> 

  */

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {List.map((song) => <li key={song.title}>
          <h3>{song.title}</h3>
          <p>{song.signer}</p>
          <button type='button' onClick={() => { deleteList(song.id) }} >삭제 </button>
        </li>)}
      </ul >
      <div>
        <p>
          곡명 : <input name="title" onChange={(e) => setNewTitle(e.target.value)} />
        </p>
        <p>
          가수/작곡 : <input name="signer" onChange={(e) => setNewSinger(e.target.value)} />
        </p>
        <p>
          <button onClick={onPressPlusList}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;

// import { useRef, useState } from "react";

// function State1({ addPlayList, setaddPlaylist }) {

//   const inputRef = useRef(null)
//   const [newTitle, setNewTitle] = useState("")
//   const [newSinger, setNewSinger] = useState("")

//   const textClear = () => {
//     inputRef.current.value = null
//   }

//   const onPressAddList = () => {
//     const newPlaylist = [...addPlayList];

//     const newSong = {
//       id: Math.floor(Math.random() * 100000),
//       title: newTitle,
//       signer: newSinger,
//     }
//     newPlaylist.push(newSong);
//     setaddPlaylist(newPlaylist);
//   }

//   const deleteList = (id) => {
//     const dlbt = addPlayList.filter(a => a.id !== id);
//     setaddPlaylist(dlbt)
//   }

//   return (
//     <>
//       <h1>문제1</h1>
//       <ul>
//         {addPlayList.map((song) => <li key={song.title}>
//           <form>
//             <h3>{song.title}</h3>
//             <p>{song.signer}</p>
//             <button type='button' onClick={() => { deleteList(song.id) }} >삭제 </button>
//           </form>
//         </li>)}
//       </ul >
//       <div>
//         <p>
//           곡명 : <input ref={inputRef} name='title' placeholder="song" value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//         </p>
//         <p>
//           가수/작곡 : <input ref={inputRef} name='signer' placeholder="singer" value={newSinger}
//             onChange={(e) => setNewSinger(e.target.value)}
//           />
//         </p>
//         <p>
//           <button onClick={onPressAddList} >추가</button>
//         </p>
//       </div>
//     </>
//   );
// }
// export default State1;



// // const onPressAddList = (event) => {
// //   const newTitle = {
// //     id: Math.floor(Math.random() * 100000),
// //     title: event.target.title.value,
// //   }
// //   const newSinger = {
// //     id: Math.floor(Math.random() * 100000),
// //     singer: event.target.singer.value,
// //   }
// //   setaddPlaylist([...addPlayList, newTitle, newSinger])
// // }
