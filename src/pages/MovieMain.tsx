import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { IMovieItem } from "../types/interface";
import { useRecoilValue } from "recoil";
import { getMovieListSelector } from "../recoil/state";

const MovieMain = () => {
  const movieList = useRecoilValue<IMovieItem[] | []>(getMovieListSelector);

  return (
    <Container>
      <SearchBar />
      <MovieListContainer>
        {movieList.map((movie, i) => (
          <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
        ))}
      </MovieListContainer>
    </Container>
  );
};

export default MovieMain;

const Container = styled.main``;

const MovieListContainer = styled.ul``;
