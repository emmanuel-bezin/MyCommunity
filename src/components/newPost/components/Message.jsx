import styled from "styled-components";

import theme from "/src/theme";

const Container = styled.textarea`
  display: flex;
  padding-top: 20px;
  font-size: 18px;
  border: none;
  outline: none;
  resize: none;
  height: 100%;
  width: 98%;
  color: ${theme.deepblue};
`;

const Message = () => {
  return <Container placeholder="message..."></Container>;
};

export default Message;
