import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-newwwwws.herokuapp.com/api",
});


export const fetchAllArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return myApi.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};

