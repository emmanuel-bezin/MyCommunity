import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import NewPost from "./components/newPost/NewPost";
import CommentsPage from "./components/commentsPage/CommentsPage";
import Sidebar from "./components/sidebar/Sidebar";

const SidebarContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  width: calc(100% - 320px);
  height: 100%;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 1400px;
  overflow: hidden;
`;

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/newPost",
    element: <NewPost />,
  },
  { path: "/*", element: <CommentsPage /> },
];

const Views = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map((route, idx) => {
        return <Route key={idx} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <NavContainer>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Views />} />
          </Routes>
        </NavContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </Container>
    </BrowserRouter>
  );
};

export default App;
