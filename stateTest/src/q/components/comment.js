import { useState } from "react";
import styled from "styled-components";

function Comment({ post, setpost }) {





  return (
    <>
      {post.Comments.map((co) => <S.CommentItem key={co.User}>
        <p>
          작성자: <span>{co.User.nickname}</span>
        </p>
        <p>
          댓글 내용: <span>{co.content}</span>
        </p>
      </S.CommentItem >)
      }
    </>
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
