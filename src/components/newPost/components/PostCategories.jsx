import styled from "styled-components";

import theme from "/src/theme";

import Select from "./Select";

const Title = styled.h1`
  color: ${theme.deepblue};
  font-size: 28px;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  width: 98%;
  border-bottom: 1px solid ${theme.lightgrey};
`;

const PostCategories = () => {
  return (
    <Container>
      <Title>Categories :</Title>
      <Select />
    </Container>
  );
};

export default PostCategories;
