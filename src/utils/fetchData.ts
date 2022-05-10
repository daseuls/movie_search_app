import axios from "axios";

export const fetchData = async (method: string, url: string, config: string) => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER,
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  try {
    const res = await instance[method](url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
