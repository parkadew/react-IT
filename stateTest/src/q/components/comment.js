
import styled from "styled-components";

function Comment({ post, setPost, deleteComment }) {


  return (
    <S.CommentItem>
      {post.Comments.map((co) => <form>
        <p>
          작성자: <span>{co.User.nickname}</span>
        </p>
        <p>
          댓글 내용: <span>{co.content}</span>
        </p>
        <button onClick={(e) => {
          e.preventDefault();
          deleteComment(co.id);
        }}>삭제</button>
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
