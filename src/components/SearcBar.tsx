import { useState, ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";
import { keywordState } from "../recoil/state";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const SearchBar = () => {
  const setKeyword = useSetRecoilState(keywordState);

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
        <SearchBarInput type="text" onChange={handleInputChange} value={inputValue} />
        <SearchBtn>
          <AiOutlineSearch size={16} color="gray" />
        </SearchBtn>
      </SearchBarForm>
    </Container>
  );
};

export default SearchBar;

const Container = styled.nav`
  margin: 3rem 0 2rem;
  position: absolute;
  width: 90%;
  top: 0;
`;

const SearchBarForm = styled.form`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.flexbox("row", "flex-end", "center")}
`;

const SearchBarInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 3rem;
  width: 100%;
  padding: 1rem;
  background-color: white;
  font-size: 1.2rem;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;
