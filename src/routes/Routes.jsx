import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MovieMain from "./MovieMain";
import styled from "styled-components";
import NavTab from "../components/NavTab";
import { Suspense } from "react";
import Loading from "../components/Loading";
import Bookmark from "./Bookmark";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Container>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<MovieMain />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Routes>
            <NavTab />
          </Suspense>
        </Container>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;

const Container = styled.section`
  ${({ theme }) => theme.flexbox("column", "space-between", "center")}
  height: 80rem;
  width: 40rem;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  border-radius: 5rem;
  border: 3px solid gray;
  overflow: auto;
  position: relative;
`;
