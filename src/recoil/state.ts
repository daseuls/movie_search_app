import { atom } from "recoil";
import { v4 } from "uuid";
import { IMovieItem, IMovieResponse } from "../types/interface";

export const keywordState = atom({
  key: `#keywordState/${v4()}`,
  default: "",
});

export const pageState = atom({
  key: `#pageState/${v4()}`,
  default: 2,
});

export const movieListState = atom<IMovieResponse>({
  key: `#movieListState/${v4()}`,
  default: { Response: "False", Error: "Search movie!" },
});

export const bookmarkMovieListState = atom<IMovieItem[] | []>({
  key: `#bookmarkMovieListState/${v4()}`,
  default: [],
});
