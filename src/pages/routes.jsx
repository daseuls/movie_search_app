import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
