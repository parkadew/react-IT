
import { useRef, useState } from "react";
import styled from "styled-components";

function Comment({ post, setPost, deleteComment, data }) {
  const [isEditmode, setisEditmode] = useState(false);
  const contentRef = useRef();

  //-- 클릭시 수정 모드로 변환 
  const onPressChangeEditMode = () => {
    setisEditmode(true);
  };
  //--  수정모드에서 1.전에 내용 저장(전개연산자)
  //-             2. 수정된 로직 업로드
  const onPressEditMode = () => {
    setisEditmode(false);

    const UpdatePost = { ...post };
    const SelectedIndex = UpdatePost.Comments.findIndex((co) => co.id === data.id)
    // SelectedIndex 는 전개연산자로 가져온 post의 복사본인 UpdatePost의 Comments로 접근한다 그리고 findIndex를 통해
    // post.Comments 배열에서 data.id와 동일한 id를 가진 댓글 객체의 '인덱스'를 찾아 반환한다.

    UpdatePost.Comments[SelectedIndex] = {
      ...UpdatePost.Comments[SelectedIndex],
      // 이는 updatedPost.Comments 배열에서 selectedIndex 위치에 있는 댓글 객체를 복사!한다 ->
      // 복사하는 이유는 객체를 복사함으로써 원본 객체를 직접 수정하지 않고 불변성 해치지않으며
      // 새로운 객체를 생성하여 변경할숴 있다.
      content: contentRef.current.value,
      // 기존의 content속성을 덮어쓴다.
    };
    setPost(UpdatePost);
    // const EditPost = { ...post }
    // const commentId = (Id)
    // console.log(commentId)
  }


  return (
    <S.CommentItem>
      <form>
        <p>
          작성자: <span>{data.User.nickname}</span>
        </p>
        <p>
          {isEditmode ? (<textarea ref={contentRef} defaultValue={data.content}></textarea>) : (<>댓글 내용: <span>{data.content}</span></>)}
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
