import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { movieListState, bookmarkMovieListState, keywordState, pageState } from "../recoil/state";
import SearchBar from "../components/SearcBar";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";
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

  const parentObservedTarget = useRef<HTMLElement>(null);

  const getMoreMovieList = async () => {
    setIsLoading(true);
    const res = await getMovieData(keyword, page);
    if (res?.data?.Response === "True") {
      setMovieList((prevList) => ({ ...prevList, Search: prevList?.Search?.concat(res?.data.Search) }));
      setIsLoading(false);
      setPage(page + 1);
    }
  };

  const handleObserver: IntersectionObserverCallback = (entry) => {
    if (entry[0].isIntersecting && !isLoading) {
      setTimeout(() => {
        getMoreMovieList();
      }, 1000);
    }
  };

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
