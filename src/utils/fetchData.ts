import axios from "axios";
import { IFetchConfig } from "../types/interface";

const BASE_URL = "http://www.omdbapi.com/";

const fetchData = async (config: IFetchConfig) => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  try {
    const res = await instance.get(`?apikey=92e32667`, { params: config });

    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const getMovieData = (searchKeyword: string, pageIndex: number) =>
  fetchData({ s: searchKeyword, page: pageIndex });
