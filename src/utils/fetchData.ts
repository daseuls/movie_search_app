import axios from "axios";
import { IFetchConfig } from "../types/interface";

const BASE_URL = "http://www.omdbapi.com/";

const fetchData = async (config: IFetchConfig) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });
  try {
    const res = await instance.get(`?apikey=${process.env.REACT_APP_API_KEY}`, { params: config });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieData = (searchKeyword: string, pageIndex: number) =>
  fetchData({ s: searchKeyword, page: pageIndex });