
import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({ post, setPost, deleteComment, data }) {
  const [isEditmode, setisEditmode] = useState(false);

  //-- 클릭시 수정 모드로 변환 
  const onPressChangeEditMode = () => {
    setisEditmode(true);
    console.log(post.Comments.id)
  };
  //--  수정모드에서 1.전에 내용 저장(전개연산자)
  //-             2. 수정된 로직 업로드
  const onPressEditMode = () => {
    setisEditmode(false);
    updateCo({
      CoId: post.Comments.id
    })
    // const EditPost = { ...post }
    // const commentId = (Id)
    // console.log(commentId)
  }
  const updateCo = ({ }) => {

  }


  return (
    <S.CommentItem>
      <form>
        <p>
          작성자: <span>{data.User.nickname}</span>
        </p>
        <p>
          {isEditmode ? <textarea defaultValue={data.value}></textarea> : <>댓글 내용: <span>{data.content}</span></>}
        </p>
        <button onClick={(e) => {
          e.preventDefault();
          deleteComment(data.id);
          console.log(data.id)
        }}>삭제</button>
        <button onClick={(e) => { e.preventDefault(); isEditmode ? onPressEditMode() : onPressChangeEditMode() }}>{isEditmode ? "완료" : "수정"}</button>
      </form>
    </S.CommentItem >
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
