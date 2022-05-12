import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkMovieListState } from "../recoil/state";
import MovieItem from "../components/MovieItem";

const Bookmark = () => {
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);

  return (
    <Container>
      {bookMarkMovieList.map((movie, i) => (
        <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
      ))}
    </Container>
  );
};

export default Bookmark;

const Container = styled.div``;
