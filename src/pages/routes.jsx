import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MovieMain from "./MovieMain";
import styled from "styled-components";
import NavTab from "../components/NavTab";
import { Suspense } from "react";
import Loading from "../components/Loading";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Container>
            <Routes>
              <Route path="/" element={<MovieMain />} />
            </Routes>
            <NavTab />
          </Container>
        </Suspense>
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
