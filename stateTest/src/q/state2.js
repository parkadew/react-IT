import { useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";

function State2() {

  // 나는 추가하기 위해서 
  // <input name="nickname" placeholder="작성자" />
  // <input name="content" placeholder="댓글 내용" />
  // <button >댓글 작성</button>
  // input의 value값을 전개 연산자를 활용하여 배열안에 집어넣어줘야한다
  // id는 만들어두었다
  /*  
    문제 2.
    Q1. 아래 작성된 state의 mock data를 활용하여
        댓글 목록을 화면에 랜더링 해보세요 :)
        Components는 src/components/state/comment.js를 활용하세요
        
    Q2. 댓글 작성 수정 삭제 기능을 구현해보세요 :)
            1. 댓글 작성 기능
            2. 댓글 수정 기능
            3. 댓글 삭제 기능 ( 본인이 작성한 댓글만 삭제할 수 있습니다, myComment 활용 )

     중첩 객체 배열

    */

  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  const addComment = (comment) => {
    setPost(prevPost => ({
      ...prevPost,
      Comments: [...prevPost.Comments, { ...comment }]
    }));
    // setPost 에 업데이트할 상태를 생각해내야한다
    // 어떤걸 추가 하고싶은가 전에 생성되 배열과 함께 새로 생성한 배열을 넣고 싶다.
    // prevPost의 역할은 무엇일까
    // prevPost는 현재의 post 상태를 나타내며, 스프레드 연산자(...)를 사용하여 기존 상태를 복사하고
    // 거기에 덧붙여 Coments에 접근해 배열을 업데이트 한다.

  };
  // comment 매개변수는 addComment({ content, User: { nickname } });
  // 여기서 전달된것이다 addComment함수를 호출할때 전달한 객체야

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ content, User: { nickname } });
    // { content, User: { nickname } } 이건 어떤걸까 ->  addComment함수가 호출될떄 전달할것들
    // 객체안에 content 와 usernickname 중첩객체배열도 이런식으로 직관적으로 접근하고 추가할수있는거구나.
    setNickname('');
    setContent('');
  };

  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>
      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <form onSubmit={handleSubmit} >
          <input type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} name="nickname" placeholder="작성자" />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)} name="content" placeholder="댓글 내용" />
          <button >댓글 작성</button>
        </form>
      </div>

      <S.CommentList>
        <Comment post={post} setpost={setPost} />
      </S.CommentList>
    </S.Wrapper >
  );
}
export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
