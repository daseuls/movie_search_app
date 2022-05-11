import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { IMovieResponse } from "../types/interface";
import { useRecoilValue } from "recoil";
import { getMovieListSelector } from "../recoil/state";
import NotFound from "../components/NotFound";

const MovieMain = () => {
  const movieList = useRecoilValue<IMovieResponse>(getMovieListSelector);
  console.log(movieList);
  return (
    <Container>
      <SearchBar />
      {movieList.Response === "True" ? (
        <MovieListContainer>
          {movieList.Search?.map((movie, i) => (
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
  height: 100%;
  overflow: auto;
`;

const MovieListContainer = styled.ul``;
