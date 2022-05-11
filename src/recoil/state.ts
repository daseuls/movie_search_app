import { atom, selector } from "recoil";
import { getMovieData } from "../utils/fetchData";
import { v4 } from "uuid";

export const keywordState = atom({
  key: `#keywordState/${v4()}`,
  default: "",
});

export const pageState = atom({
  key: `#pageState/${v4()}`,
  default: 1,
});

export const movieListState = atom({
  key: `#movieListState/${v4()}`,
  default: [],
});

export const getMovieListSelector = selector({
  key: `movieList/get/${v4()}`,
  get: async ({ get }) => {
    const keyword = get(keywordState);
    const page = get(pageState);

    if (keyword) {
      const data = await getMovieData(keyword, page);
      return data?.data;
    }
    return { Response: "False", Error: "Movie not found!" };
  },
});
