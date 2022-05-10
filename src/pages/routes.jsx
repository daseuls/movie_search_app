import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Search from "./Search";
import styled from "styled-components";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Container>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </Container>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;

const Container = styled.section`
  height: 70vh;
  width: 27rem;
  background-color: white;
  border-radius: 4rem;
  border: 2px solid gray;
`;
