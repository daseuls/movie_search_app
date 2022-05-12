import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { IMovieResponse, IMovieItem } from "../types/interface";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieListState, keywordState } from "../recoil/state";
import NotFound from "../components/NotFound";
import { getMovieData } from "../utils/fetchData";

const MovieMain = () => {
  // const movieList = useRecoilValue<IMovieResponse>(getMovieListSelector);
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const keyword = useRecoilValue(keywordState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieData(keyword, 1);
      setMovieList(res?.data);
    };
    fetchData();
  }, [keyword, setMovieList]);

  return (
    <Container>
      <SearchBar />
      {movieList.Response === "True" ? (
        <MovieListContainer>
          {movieList?.Search?.map((movie, i) => (
            <>
              <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
              {movie.isSelected ? <div>좋아요</div> : null}
            </>
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
  height: 100%;
  overflow: auto;
`;

const MovieListContainer = styled.ul``;
