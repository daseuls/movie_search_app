import { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BsFillReplyFill } from "react-icons/bs";
import { bookmarkMovieListState } from "../recoil/state";
import { IMovieItem } from "../types/interface";

interface IProps {
  item: IMovieItem;
}

const NO_IMAGE_URL = "https://i-shop.link/assets/images/no-image.png";

const MovieItem = ({ item }: IProps) => {
  const [bookMarkMovieList, setBookmarkMovieList] = useRecoilState(bookmarkMovieListState);
  const [isOpened, setIsOpened] = useState(false);

  const isBookmarked = bookMarkMovieList.map((el) => el.imdbID).includes(item.imdbID);

  const handleItemOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const setLocalStorageValue = (key: string, value: IMovieItem[]) => {
    setBookmarkMovieList(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleAddBookmark = (id: string) => {
    if (isBookmarked) {
      const newItem = bookMarkMovieList.filter((el) => el.imdbID !== id);
      setLocalStorageValue("bookmark", newItem);
    } else {
      const newItem = [...bookMarkMovieList, item];
      setLocalStorageValue("bookmark", newItem);
    }
  };

  return (
    <Container>
      <MovieItemContainer onClick={handleItemOpen}>
        <MoviePoster src={item.Poster === "N/A" ? NO_IMAGE_URL : item.Poster} />
        <MovieDetailContainer>
          <MovieTitle>{item.Title}</MovieTitle>
          <MovieDetail>
            {item.Year} | {item.Type}
          </MovieDetail>
        </MovieDetailContainer>
        {isBookmarked ? (
          <HeartIcon>
            <AiTwotoneHeart size={30} color="EDA1C1" />
          </HeartIcon>
        ) : null}
      </MovieItemContainer>
      {isOpened ? (
        <DropdownContainer isOpened={isOpened}>
          <BookmarkBtn onClick={() => handleAddBookmark(item.imdbID)} type="button">
            {isBookmarked ? <AiTwotoneHeart size={20} color="EDA1C1" /> : <AiOutlineHeart size={20} color="EDA1C1" />}
          </BookmarkBtn>
          <CloseBtn onClick={handleItemOpen} type="button">
            <BsFillReplyFill size={20} color="EDA1C1" />
          </CloseBtn>
        </DropdownContainer>
      ) : null}
    </Container>
  );
};

export default MovieItem;

const Container = styled.ul`
  width: 100%;
  margin-bottom: 1rem;
`;

const MovieItemContainer = styled.li`
  ${({ theme }) => theme.flexbox("row", "flex-start", "center")}
  position: relative;
  padding: 1rem 2rem;
  margin-bottom: 0.7rem;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 3px -1px, rgba(0, 0, 0, 0.06) 0px 1px 4px -1px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    ${({ theme }) => theme.colors.backGroundColor};
    background-color: ${({ theme }) => theme.colors.movieItemBackGroundColor};
    transform: scale(1.02);
  }
`;

const MoviePoster = styled.img`
  width: 5rem;
  height: 6.5rem;
  border-radius: 0.7rem;
`;

const MovieDetailContainer = styled.div`
  width: 70%;
  margin-left: 1rem;
`;

const MovieTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const MovieDetail = styled.p`
  color: ${({ theme }) => theme.colors.textGray};
`;

const DropdownContainer = styled.div<{ isOpened: boolean }>`
  width: 100%;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.dropDownItemBackGroundColor};
`;

const BookmarkBtn = styled.button`
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.heartIconColor}; ;
`;

const CloseBtn = styled.button`
  width: 50%;
`;

const HeartIcon = styled.div`
  position: absolute;
  right: 3rem;
`;
