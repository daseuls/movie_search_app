import styled from "styled-components";
import { IMovieItem } from "../types/interface";

interface IProps {
  item: IMovieItem;
}

const MovieItem = ({ item }: IProps) => {
  return (
    <MovieItemContainer>
      <MoviePoster src={item.Poster} />
      <MovieDetailContainer>
        <MovieTitle>{item.Title}</MovieTitle>
        <MovieDetail>
          {item.Year} | {item.Type}
        </MovieDetail>
      </MovieDetailContainer>
    </MovieItemContainer>
  );
};

export default MovieItem;

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
