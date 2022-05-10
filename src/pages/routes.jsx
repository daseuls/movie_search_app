import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MovieMain from "./MovieMain";
import styled from "styled-components";
import NavTab from "../components/NavTab";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Container>
          <Routes>
            <Route path="/" element={<MovieMain />} />
          </Routes>
          <NavTab />
        </Container>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;

const Container = styled.section`
  ${({ theme }) => theme.flexbox("column", "space-between", "center")}
  height: 55rem;
  width: 27rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3.5rem;
  border: 3px solid gray;
  overflow: auto;
`;
