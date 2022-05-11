import { useState, ChangeEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordState, pageState } from "../recoil/state";
import styled from "styled-components";

const SearchBar = () => {
  const setKeyword = useSetRecoilState(keywordState);
  const setPage = useSetRecoilState(pageState);

  const [inputValue, setInputValue] = useState("");

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    setKeyword(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Container>
      <SearchBarForm onSubmit={handleSubmitForm}>
        <SearchBarInput type="text" placeholder="Search" onChange={handleInputChange} value={inputValue} />
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
