import styled from "styled-components";

import theme from "/src/theme";

import useApp from "../../store/useApp";

const Category = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 18px;
  background-color: ${({ color }) => color && color};
  cursor: pointer;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  transition: 0.2s ease;
`;

const Text = styled.p`
  margin: 0px;
  color: ${theme.deepblue};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Title = styled.h1`
  display: flex;
  margin: 8px 0px;
  color: ${theme.deepblue};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 500;
`;

const LikesNbr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: ${theme.gold};
  border-radius: 20px;
  font-size: 14px;
`;

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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  margin: 0px;
  color: ${theme.green};
`;

const InfosContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  padding: 20px 0px;
  flex-direction: column;
  overflow: hidden;
`;
const Post = () => {
  const { post } = useApp();

  return (
    <Container>
      <TopContainer>
        <InfosContainer>
          <Pseudo>{post.pseudo}</Pseudo>
          <LikesNbr>{post.likesNbr}</LikesNbr>
          <Time>{post.time}</Time>
          <Date>{post.date}</Date>
        </InfosContainer>
        <Category color={post.color}>{post.category}</Category>
      </TopContainer>
      <Title>{post.title}</Title>
      <Text>{post.message}</Text>
    </Container>
  );
};

export default Post;
