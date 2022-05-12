import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiTwotoneHeart } from "react-icons/ai";

const NavTab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <NavBtn onClick={() => navigate("/")}>
        <AiOutlineSearch size={25} color="9AD0EC" />
        {pathname === "/" ? <Dot /> : null}
      </NavBtn>
      <NavBtn onClick={() => navigate("/bookmark")}>
        <AiTwotoneHeart size={25} color="FFC7C7" />
        {pathname === "/bookmark" ? <LikeDot /> : null}
      </NavBtn>
    </Container>
  );
};

export default NavTab;

const Container = styled.footer`
  ${({ theme }) => theme.flexbox("row", "space-around", "center")}
  background-color: ${({ theme }) => theme.colors.navTabColor};
  width: 100%;
  padding: 3rem;
  border-radius: 5rem;
  position: absolute;
  bottom: 0;
`;

const NavBtn = styled.button`
  ${({ theme }) => theme.flexbox("column", "center", "center")}
  cursor: pointer;
`;

const Dot = styled.div`
  background-color: #9ad0ec;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin-top: 0.4rem;
`;

const LikeDot = styled(Dot)`
  background-color: #ffc7c7;
`;
