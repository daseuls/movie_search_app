import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { keywordState, movieListState, pageState } from "../recoil/state";
import { getMovieData } from "../utils/fetchData";

interface ISearchBarProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ setIsLoading }: ISearchBarProps) => {
  const setKeyword = useSetRecoilState(keywordState);
  const setMovieList = useSetRecoilState(movieListState);
  const setPageReset = useResetRecoilState(pageState);

  const [inputValue, setInputValue] = useState("");

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const fetchData = async () => {
      const res = await getMovieData(inputValue, 1);
      setMovieList(res?.data);
    };
    fetchData();
    setKeyword(inputValue);
    setInputValue("");
    setPageReset();
    setIsLoading(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Container>
      <SearchBarForm onSubmit={handleSubmitForm}>
        <SearchBarInput type="text" onChange={handleInputChange} value={inputValue} />
        <SearchBtn>
          <AiOutlineSearch size={20} color="gray" />
        </SearchBtn>
      </SearchBarForm>
    </Container>
  );
};

export default SearchBar;

const Container = styled.nav`
  position: absolute;
  top: 0;
  width: 90%;
  margin: 3rem 0 2rem;
`;

const SearchBarForm = styled.form`
  ${({ theme }) => theme.flexbox("row", "flex-end", "center")}
  position: relative;
  width: 100%;
`;

const SearchBarInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.2em;
  border: 2px solid ${({ theme }) => theme.colors.navTabColor};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 1.5rem;
  cursor: pointer;
`;
