import { atom, selector } from "recoil";
import { getMovieData } from "../utils/fetchData";
import { v4 } from "uuid";
import { IMovieItem, IMovieResponse } from "../types/interface";

export const keywordState = atom({
  key: `#keywordState/${v4()}`,
  default: "",
});

export const pageState = atom({
  key: `#pageState/${v4()}`,
  default: 1,
});

export const movieListState = atom<IMovieResponse>({
  key: `#movieListState/${v4()}`,
  default: { Response: "False", Error: "hi" },
});

// export const getMovieListSelector = selector({
//   key: `movieList/get/${v4()}`,
//   get: async ({ get }) => {
//     const keyword = get(keywordState);

//     if (keyword) {
//       const data = await getMovieData(keyword, 1);
//       return data?.data;
//     }
//     return { Response: "False", Error: "Movie not found!" };
//   },
// });
