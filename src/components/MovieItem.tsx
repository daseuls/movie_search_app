import { useState } from "react";
import styled from "styled-components";
import { IMovieItem } from "../types/interface";
import { useRecoilState } from "recoil";
import { movieListState, bookmarkMovieListState } from "../recoil/state";

interface IProps {
  item: IMovieItem;
}

const MovieItem = ({ item }: IProps) => {
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);
  const [isOpened, setIsOpened] = useState(false);

  const handleItemOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const handleAddBookmark = (id: string) => {
    if (bookMarkMovieList.map((el) => el.imdbID).includes(item.imdbID)) {
      const newItem = bookMarkMovieList.filter((el) => el.imdbID !== item.imdbID);
      setBookmarkMovieList(newItem);
      localStorage.setItem("bookmark", JSON.stringify(newItem));
    } else {
      const newItem = [...bookMarkMovieList, item];
      setBookmarkMovieList(newItem);
      localStorage.setItem("bookmark", JSON.stringify(newItem));
    }
  };

  return (
    <Container>
      <MovieItemContainer onClick={handleItemOpen}>
        <MoviePoster src={item.Poster} />
        <MovieDetailContainer>
          <MovieTitle>{item.Title}</MovieTitle>
          <MovieDetail>
            {item.Year} | {item.Type}
          </MovieDetail>
        </MovieDetailContainer>
      </MovieItemContainer>
      {isOpened ? (
        <div>
          <button onClick={() => handleAddBookmark(item.imdbID)} type="button">
            {bookMarkMovieList.map((el) => el.imdbID).includes(item.imdbID) ? "즐겨찾기 삭제" : "즐겨찾기 추가"}
          </button>
          <button onClick={handleItemOpen} type="button">
            닫힘
          </button>
        </div>
      ) : null}
    </Container>
  );
};

export default MovieItem;

const Container = styled.div``;

const MovieItemContainer = styled.li`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  padding:1rem;
  border: 1px solid gray;
  margin-bottom: 0.5rem;
  border-radius: 2rem;
`;

const MoviePoster = styled.img`
  width: 4rem;
  border-radius: 0.7rem;
`;

const MovieDetailContainer = styled.div`
  margin-left: 1rem;
`;

const MovieTitle = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;
const MovieDetail = styled.p`
  color: gray;
`;
