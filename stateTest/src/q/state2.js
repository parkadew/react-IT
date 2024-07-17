import { useState } from "react";
import styled from "styled-components";
import Comment from "./components/comment";

function State2() {

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
        id: 1,
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 2,
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 3,
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 4,
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        id: 5,
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  //-----추가

  const addComment = (comment) => {
    const newId = Math.floor(Math.random() * 10000);
    const addComment = { ...post, Comments: [...post.Comments, { ...comment, id: newId }] };
    setPost(addComment)

    // setPost(prevPost => ({
    //   ...prevPost,
    //   Comments: [...prevPost.Comments, { ...comment, id: newId }]
    // }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ content, User: { nickname } });
    setNickname('');
    setContent('');
  };
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  //------- 삭제

  const deleteComment = (id) => {
    const deletepost = { ...post };
    deletepost.Comments = post.Comments.filter((comment) => comment.id !== id)
    setPost(deletepost)
  };







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
        {post.Comments.map((data) => <Comment data={data} post={post} setPost={setPost} deleteComment={deleteComment} />)}
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
