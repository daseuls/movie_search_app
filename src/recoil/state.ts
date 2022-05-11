import { atom, selector } from "recoil";
import { getMovieData } from "../utils/fetchData";

export const keywordState = atom({
  key: "#keywordState",
  default: "",
});

export const pageState = atom({
  key: "#pageState",
  default: 1,
});

export const movieListState = atom({
  key: "#movieListState",
  default: [],
});

export const getMovieListSelector = selector({
  key: "movieList/get",
  get: async ({ get }) => {
    const keyword = get(keywordState);
    const page = get(pageState);
    const data = await getMovieData("doctor", page);
    return data?.data.Search;
  },
});
