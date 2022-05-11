import styled from "styled-components";

const NavTab = () => {
  return (
    <Container>
      <NavBtn>Search</NavBtn>
      <NavBtn>Bookmark</NavBtn>
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
