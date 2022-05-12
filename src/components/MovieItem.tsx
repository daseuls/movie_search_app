import { useState } from "react";
import styled from "styled-components";
import { IMovieItem } from "../types/interface";
import { useRecoilState } from "recoil";
import { movieListState } from "../recoil/state";

interface IProps {
  item: IMovieItem;
}

const MovieItem = ({ item }: IProps) => {
  const [movieList, setMovieList] = useRecoilState(movieListState);
  const [isOpened, setIsOpened] = useState(false);

  const handleItemOpen = () => {
    setIsOpened((prev) => !prev);
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
          <button type="button">즐겨찾기 추가</button>
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
