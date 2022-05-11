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
    if (keyword) {
      const data = await getMovieData(keyword, page);
      if (data?.data.Response === "True") {
        return data.data.Search;
      }
      return [];
    }
    return [];
  },
});
