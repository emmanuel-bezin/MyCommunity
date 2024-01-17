import styled from "styled-components";

import theme from "/src/theme";

const Input = styled.input`
  font-size: 22px;
  color: ${theme.deepblue};
  outline: none;
  border: none;
  padding-left: 10px;
  width: 80%;
  margin-bottom: 2px;

  @media (max-width: 450px) {
    width: 200px;
  }
`;

const Title = styled.h1`
  color: ${theme.deepblue};
  font-size: 30px;
  margin: 0px;
  margin-bottom: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Container = styled.div`
  display: flex;
  width: 98%;
  border-bottom: 1px solid ${theme.lightgrey};
`;

const PostTitle = () => {
  return (
    <Container>
      <Title>Title :</Title>
      <Input placeholder="Write your title..." />
    </Container>
  );
};

export default PostTitle;
