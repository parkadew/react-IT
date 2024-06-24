
import { useRef, useState } from "react";

function State1({ addPlayList, setaddPlaylist }) {

  const [newTitle, setNewTitle] = useState("")
  const [newSinger, setNewSinger] = useState("")

  const onPressAddList = () => {
    const newPlaylist = [...addPlayList];

    const newSong = {
      id: Math.floor(Math.random() * 100000),
      title: newTitle,
      signer: newSinger,
    }

    newPlaylist.push(newSong);
    setaddPlaylist(newPlaylist);
  }
  const deleteList = (id) => {
    const dlbt = addPlayList.filter(a => a.id !== id);
    setaddPlaylist(dlbt)
  }

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {addPlayList.map((song) => <li key={song.title}>
          <form>
            <h3>{song.title}</h3>
            <p>{song.signer}</p>
            <button type='button' onClick={() => { deleteList(song.id) }} >삭제 </button>
          </form>
        </li>)}
      </ul >
      <div>
        <p>
          곡명 : <input name='title' placeholder="song" value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </p>
        <p>
          가수/작곡 : <input name='signer' placeholder="singer" value={newSinger}
            onChange={(e) => setNewSinger(e.target.value)}
          />
        </p>
        <p>
          <button onClick={onPressAddList} >추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;



// const onPressAddList = (event) => {
//   const newTitle = {
//     id: Math.floor(Math.random() * 100000),
//     title: event.target.title.value,
//   }
//   const newSinger = {
//     id: Math.floor(Math.random() * 100000),
//     singer: event.target.singer.value,
//   }
//   setaddPlaylist([...addPlayList, newTitle, newSinger])
// }
