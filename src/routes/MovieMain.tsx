import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { IMovieResponse, IMovieItem } from "../types/interface";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieListState, keywordState, bookmarkMovieListState } from "../recoil/state";
import NotFound from "../components/NotFound";
import { getMovieData } from "../utils/fetchData";

const MovieMain = () => {
  // const movieList = useRecoilValue<IMovieResponse>(getMovieListSelector);
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);

  const keyword = useRecoilValue(keywordState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieData(keyword, 1);
      setMovieList(res?.data);
    };
    fetchData();
    const localData = localStorage.getItem("bookmark");
    if (localData) {
      setBookmarkMovieList(JSON.parse(localData));
    }
  }, [keyword, setBookmarkMovieList, setMovieList]);

  return (
    <Container>
      <SearchBar />
      {movieList.Response === "True" ? (
        <MovieListContainer>
          {movieList?.Search?.map((movie, i) => (
            <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
          ))}
        </MovieListContainer>
      ) : (
        <NotFound error={movieList.Error} />
      )}
    </Container>
  );
};

export default MovieMain;

const Container = styled.main`
  width: 90%;
  height: 100%;
  overflow: auto;
  margin: 7rem 0 6rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MovieListContainer = styled.ul``;
