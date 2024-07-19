import styled from "styled-components";

function Comment({ data }) {
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{data.User.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{data.content}</span>
      </p>
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