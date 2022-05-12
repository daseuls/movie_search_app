import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkMovieListState } from "../recoil/state";
import MovieItem from "../components/MovieItem";
import { AiOutlineSearch, AiTwotoneHeart } from "react-icons/ai";

const Bookmark = () => {
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);

  return (
    <Container>
      <TitleContainer>
        <AiTwotoneHeart size={30} color="FFC7C7" />
        <Title>My Bookmark ({bookMarkMovieList.length})</Title>
      </TitleContainer>

      {bookMarkMovieList.map((movie, i) => (
        <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
      ))}
    </Container>
  );
};

export default Bookmark;

const Container = styled.div`
  margin: 7rem 0 10rem;
  width: 90%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.p`
  font-size: 2.3rem;
  margin-left: 0.5rem;
  color: #22577e;
`;

const TitleContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  position:absolute;
  top: 0;
  margin-top: 3.5rem;
`;
