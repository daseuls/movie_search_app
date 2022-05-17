import { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { DragDropContext } from "react-beautiful-dnd";
import { movieListState, bookmarkMovieListState, keywordState, pageState } from "../recoil/state";
import SearchBar from "../components/SearcBar";
import NotFound from "../components/NotFound";
import { MovieList } from "../components/MovieList";
import { getMovieData } from "../utils/fetchData";

const MovieMain = () => {
  const movieList = useRecoilValue(movieListState);
  const setMovieList = useSetRecoilState(movieListState);
  const setBookmarkMovieList = useSetRecoilState(bookmarkMovieListState);
  const keyword = useRecoilValue(keywordState);
  const [page, setPage] = useRecoilState(pageState);

  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const parentObservedTarget = useRef<HTMLElement>(null);

  const getMoreMovieList = useCallback(async () => {
    setIsLoading(true);
    const res = await getMovieData(keyword, page);
    if (res?.data?.Response === "True") {
      setMovieList((prevList) => ({ ...prevList, Search: prevList?.Search?.concat(res?.data.Search) }));
      setIsLoading(false);
      setPage(page + 1);
    }
  }, [keyword, page, setMovieList, setPage]);

  const handleObserver: IntersectionObserverCallback = useCallback(
    (entry) => {
      if (entry[0].isIntersecting && !isLoading) {
        setTimeout(() => {
          getMoreMovieList();
        }, 1000);
      }
    },
    [getMoreMovieList, isLoading]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
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
    <DragDropContext onDragEnd={() => {}}>
      <Container ref={parentObservedTarget}>
        <SearchBar setIsLoading={setIsLoading} />
        {movieList.Response === "True" ? (
          <MovieList movieList={movieList} setTarget={setTarget} isLoading={isLoading} />
        ) : (
          <NotFound error={movieList.Error} />
        )}
      </Container>
    </DragDropContext>
  );
};

export default MovieMain;

const Container = styled.main`
  width: 90%;
  height: 100%;
  margin: 8rem 0 10rem;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
