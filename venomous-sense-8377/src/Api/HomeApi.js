import axios from "axios";
export const getHomeApi = () => {
  return axios.get(
    "https://newsapi.org/v2/top-headlines?pageSize=100&country=in&apiKey=d752c77c80674c9193bbd2ef676a6294"
  );
};
