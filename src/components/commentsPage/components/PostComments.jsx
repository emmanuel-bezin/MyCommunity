import styled from "styled-components";

import theme from "/src/theme";

import useApp from "../../store/useApp";

const Time = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  margin: 0px;
  color: ${theme.grey};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Date = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  margin: 0px;
  color: ${theme.grey};
`;

const Pseudo = styled.p`
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${theme.green};
  font-weight: 600;
`;

const PseudoDateTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentContainer = styled.div`
  display: flex;
  border-radius: 20px;
  background-color: ${theme.transgrey};
  padding: 10px 15px;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

const CommentsContainer = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${theme.deepblue};
  margin: 0px;
  font-size: 20px;
`;

const ComentsNumber = styled.h1`
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${theme.green};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostComments = () => {
  const { post } = useApp();

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <ComentsNumber>{post.comments.length}</ComentsNumber>
        <Text>comments</Text>
      </div>
      <CommentsContainer>
        {post.comments.map((comment, idx) => {
          return (
            <CommentContainer>
              <PseudoDateTime>
                <Pseudo>{comment.pseudo}</Pseudo>
                <Date>{comment.date}</Date>
                <Time>{comment.time}</Time>
              </PseudoDateTime>
              {comment.comment}
            </CommentContainer>
          );
        })}
      </CommentsContainer>
    </Container>
  );
};

export default PostComments;
