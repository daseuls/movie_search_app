import { atom, selector } from "recoil";

export const keywordState = atom({
  key: "#searchKeywordState",
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
    const data = await get;
  },
});
