import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavTab = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <NavBtn onClick={() => navigate("/")}>Search</NavBtn>
      <NavBtn onClick={() => navigate("/bookmark")}>Bookmark</NavBtn>
    </Container>
  );
};

export default NavTab;

const Container = styled.footer`
  ${({ theme }) => theme.flexbox("row", "space-around", "center")}
  background-color: skyblue;
  width: 100%;
  padding: 2rem;
  border-radius: 3rem;
  position: absolute;
  bottom: 0;
`;

const NavBtn = styled.button`
  cursor: pointer;
`;
