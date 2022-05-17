import React, { SetStateAction } from "react";
import styled from "styled-components";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Droppable } from "react-beautiful-dnd";
import { IMovieResponse } from "../types/interface";
import MovieItem from "./MovieItem";
import Loading from "./Loading";

interface IProps {
  movieList: IMovieResponse;
  setTarget: React.Dispatch<SetStateAction<HTMLDivElement | null>>;
  isLoading: boolean;
}

export const MovieList = ({ movieList, setTarget, isLoading }: IProps) => {
  return (
    <ul>
      <TotalContainer>
        <AiOutlineUnorderedList size={20} />
        <MovieTotal>Total {movieList.totalResults}</MovieTotal>
      </TotalContainer>
      <Droppable droppableId="bookmarkLi" isDropDisabled>
        {(provided) => (
          <MovieListSubContainer ref={provided.innerRef}>
            {movieList?.Search?.map((movie, i) => (
              <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
            ))}
            <div ref={setTarget}>{!isLoading && <Loading />}</div>
            {provided.placeholder}
          </MovieListSubContainer>
        )}
      </Droppable>
    </ul>
  );
};

const MovieListSubContainer = styled.div`
  ${({ theme }) => theme.flexbox("column", "flex-start", "center")}
`;

const MovieTotal = styled.p`
  padding: 0.8rem 0.5rem;
  font-size: 1.4rem;
`;

const TotalContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  margin-left:1rem;
`;
