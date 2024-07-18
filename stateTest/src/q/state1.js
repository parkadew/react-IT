import PlayListMock from "../__mock__/playList.json";

function State1() {
  console.log(PlayListMock.playlist);

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {PlayListMock.playlist.map((song) => (
          <li key={song.id}>


          </li>
        ))}

      </ul>
      <div>
        <p>
          곡명 : <input />
        </p>
        <p>
          가수/작곡 : <input />
        </p>
        <p>
          <button>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
// 먼저 데이터들이 화면에 렌더링 될수있게 만든다
//  -map을 사용하여 주어진 데이터 전체를 순회하여 가져올것이다.