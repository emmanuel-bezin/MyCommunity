import styled from "styled-components";

import theme from "/src/theme";

import Account from "./components/Account";
import Info from "./components/Info";
import Categories from "./components/Categories";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100%;
  max-height: 800px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  @media (max-width: 314px) {
    margin-top: 0px;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Account />
      <Info />
      <Categories />
    </Container>
  );
};

export default Sidebar;
