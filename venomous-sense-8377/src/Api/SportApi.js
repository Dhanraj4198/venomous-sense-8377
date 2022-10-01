import axios from "axios";
export const getSportsApi = (params = {}) => {
  return axios.get(
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d752c77c80674c9193bbd2ef676a6294",
    {
      params: {
        page: params.page,
        pageSize: params.limit,
      },
    }
  );
};
