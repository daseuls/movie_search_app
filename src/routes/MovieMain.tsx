import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AiOutlineUnorderedList } from "react-icons/ai";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { movieListState, bookmarkMovieListState } from "../recoil/state";
import NotFound from "../components/NotFound";

const MovieMain = () => {
  const movieList = useRecoilValue(movieListState);
  const setBookmarkMovieList = useSetRecoilState(bookmarkMovieListState);

  useEffect(() => {
    const localData = localStorage.getItem("bookmark");
    if (localData) {
      setBookmarkMovieList(JSON.parse(localData));
    }
  }, [setBookmarkMovieList]);

  return (
    <Container>
      <SearchBar />
      {movieList.Response === "True" ? (
        <MovieListContainer>
          <TotalContainer>
            <AiOutlineUnorderedList size={20} />
            <MovieTotal>Total {movieList.totalResults}</MovieTotal>
          </TotalContainer>
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
  margin: 8rem 0 10rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MovieListContainer = styled.ul``;

const MovieTotal = styled.p`
  font-size: 1.4rem;
  padding: 0.8rem 0.5rem;
`;

const TotalContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  margin-left:1rem;
`;
