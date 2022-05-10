import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import { getMovieData } from "../utils/fetchData";
import MovieItem from "../components/MovieItem";
import { IMovieItem } from "../types/interface";

const MovieMain = () => {
  const [movieList, setMovieList] = useState<IMovieItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieData("doctor", 2);
      setMovieList(res?.data.Search);
    };
    fetchData();
  }, []);

  console.log(movieList);

  return (
    <Container>
      <SearchBar />
      <MovieListContainer>
        {movieList.map((movie) => (
          <MovieItem key={movie.imdbID} item={movie} />
        ))}
      </MovieListContainer>
    </Container>
  );
};

export default MovieMain;

const Container = styled.main``;

const MovieListContainer = styled.ul``;
