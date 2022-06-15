import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-newwwwws.herokuapp.com/api",
});


//allitems

export const fetchAllArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};
