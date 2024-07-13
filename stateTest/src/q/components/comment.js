
import styled from "styled-components";

function Comment({ post, setPost }) {

  const IdPost = post.Comments.map((l) => ({
    ...l, id: Math.floor(Math.random() * 10000)

  }));
  console.log(IdPost)
  // 조회 완료

  // Idpost를 사용할때 IdPost[0]를 사용하지 않으면 그 배열로 들어가지 못한다 
  // 헌데 왜 밑에서 map을 돌린 IdPost.map은 매개변수로 받은 co를 바로 복사본으로 받아볼수있는것일까??
  // map이 복사본 배열을 반환한다...
  // 그럼
  // 내가 왜 한번 더 map을 돌렸을까
  // 전부다 순회시켜서 요소들을 가져와야하기때문이야 -> 왜 그럼 foreach가 아니라 map으로 가져온것일까
  // 만약 map을 돌려서 가져오게 되면 내가 설정한 co에 어떤게 어게 되는걸까 
  // co는 콜백함수의 매개변수로 새로운 수노히를 함으로써 새로운 복사본 배열이 오게된것일것이다.
  // 내가 IdPost에서는 이미 Posts.Comments 로 들어가서 map을 돌렸기 때문에 Comments내의 정보 배열만 오게되었을것이다
  // 내가 넣어준 l은 복사본이야 IdPost 의! Posts.Comments의 값을 가져온 복사본이라고
  // 밑에 생성된 map은 co라는 매개변수의 요소에 접근되는것이고
  // 그그 {} 안에 들어가있잖아
  // 
  // 그래 내가 복사본을 생성해서 
  // 지금까지 내가 한것은 화면에 데이터들이 렌덩링 될수있도록 만들었다.
  // 그럼 이제 추가하는 로직을 만들어보자
  // 추가 버튼은 state2파일에 있기때문에 거기서 만드는게 좋을것같다

  // 나는 여기가 todolist
  return (
    <S.CommentItem>
      {IdPost.map((co) => <form>
        <p>
          작성자: <span>{co.User.nickname}</span>
        </p>
        <p>
          댓글 내용: <span>{co.content}</span>
        </p>
        <button>삭제</button>
      </form>)}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
