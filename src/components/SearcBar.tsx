import { useState, ChangeEvent, FormEvent } from "react";
import { useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { keywordState, movieListState, pageState } from "../recoil/state";
import { getMovieData } from "../utils/fetchData";

const SearchBar = ({ setIsLoading }: any) => {
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
  border: 2px solid ${({ theme }) => theme.colors.navTabColor};
  border-radius: 3rem;
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  font-size: 1.2em;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 1.5rem;
  cursor: pointer;
`;
