import styled from "styled-components";

const SearchBar = () => {
  return (
    <Container>
      <SearchBarForm>
        <SearchBarInput placeholder="Search" />
        <SearchBtn />
      </SearchBarForm>
    </Container>
  );
};

export default SearchBar;

const Container = styled.nav`
  margin: 3rem 0 2rem;
  position: "sticky";
`;

const SearchBarForm = styled.form``;

const SearchBarInput = styled.input`
  border: 1px solid black;
  border-radius: 3rem;
  width: 100%;
  padding: 0.7rem;
`;

const SearchBtn = styled.button``;
