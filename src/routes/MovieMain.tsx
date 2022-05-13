import { useEffect, useState, useRef, RefObject, MutableRefObject } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { AiOutlineUnorderedList } from "react-icons/ai";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import { movieListState, bookmarkMovieListState, keywordState, pageState } from "../recoil/state";
import NotFound from "../components/NotFound";
import { getMovieData } from "../utils/fetchData";

const MovieMain = () => {
  const movieList = useRecoilValue(movieListState);
  const setMovieList = useSetRecoilState(movieListState);
  const setBookmarkMovieList = useSetRecoilState(bookmarkMovieListState);
  const keyword = useRecoilValue(keywordState);
  const [page, setPage] = useRecoilState(pageState);

  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const parentObservedTarget = useRef<any>(null);

  console.log("", movieList);

  const getMoreMovieList = async () => {
    setIsLoading(true);
    const res = await getMovieData(keyword, page);
    if (res?.data?.Response === "True") {
      setMovieList((prevList) => ({ ...prevList, Search: prevList?.Search?.concat(res?.data.Search) }));
      setIsLoading(false);
      setPage(page + 1);
    }
  };

  const handleObserver = (entry: any) => {
    if (entry[0].isIntersecting && !isLoading) {
      setTimeout(() => {
        getMoreMovieList();
      }, 1000);
    }
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      observer = new IntersectionObserver(handleObserver, {
        root: parentObservedTarget.current,
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [handleObserver, target]);

  useEffect(() => {
    const localData = localStorage.getItem("bookmark");
    if (localData) {
      setBookmarkMovieList(JSON.parse(localData));
    }
  }, [setBookmarkMovieList]);

  return (
    <Container ref={parentObservedTarget}>
      <SearchBar setIsLoading={setIsLoading} />
      {movieList.Response === "True" ? (
        <MovieListContainer>
          <TotalContainer>
            <AiOutlineUnorderedList size={20} />
            <MovieTotal>Total {movieList.totalResults}</MovieTotal>
          </TotalContainer>
          <MovieListSubContainer>
            {movieList?.Search?.map((movie, i) => (
              <MovieItem key={`${i}${movie.imdbID}`} item={movie} />
            ))}
            <div ref={setTarget}>{!isLoading && <div>로딩중...</div>}</div>
          </MovieListSubContainer>
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

const MovieListSubContainer = styled.div``;
const MovieTotal = styled.p`
  font-size: 1.4rem;
  padding: 0.8rem 0.5rem;
`;

const TotalContainer = styled.div`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  margin-left:1rem;
`;
