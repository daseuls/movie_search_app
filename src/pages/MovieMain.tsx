import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearcBar";
import { getMovieData } from "../utils/fetchData";

const MovieMain = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieData("doctor", 2);
      setMovieList(res?.data.Search);
    };
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default MovieMain;
