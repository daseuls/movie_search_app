import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AiTwotoneHeart } from "react-icons/ai";
import { useEffect } from "react";
import { bookmarkMovieListState } from "../recoil/state";
import MovieItem from "../components/MovieItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const Bookmark = () => {
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);

  useEffect(() => {
    const localData = localStorage.getItem("bookmark");
    if (localData) {
      setBookmarkMovieList(JSON.parse(localData));
    }
  }, [setBookmarkMovieList]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.index === source.index) return;
    const dragItemIndex = source.index;
    const dropDestinationIndex = destination.index;
    let add;
    const bookmarkList = [...bookMarkMovieList];
    add = bookmarkList[dragItemIndex];
    bookmarkList.splice(dragItemIndex, 1);
    bookmarkList.splice(dropDestinationIndex, 0, add);
    setBookmarkMovieList(bookmarkList);
    localStorage.setItem("bookmark", JSON.stringify(bookmarkList));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <TitleContainer>
          <AiTwotoneHeart size={30} color="FFC7C7" />
          <Title>My Bookmark ({bookMarkMovieList.length})</Title>
        </TitleContainer>
        <Droppable droppableId="bookmarkList">
          {(provided) => (
            <BookmarkContainer ref={provided.innerRef} {...provided.droppableProps}>
              {bookMarkMovieList.map((movie, i) => (
                <MovieItem key={`${i}${movie.imdbID}`} item={movie} index={i} />
              ))}
              {provided.placeholder}
            </BookmarkContainer>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
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

const BookmarkContainer = styled.div``;
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
