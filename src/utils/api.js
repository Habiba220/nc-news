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

export const fetchUsers = () => {
  return myApi.get('/users').then((res) => {
    return res.data.users;
  });
};

export const fetchArticle = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticle = (article_id, inc_votes) => {
  return myApi.patch(`/articles/${article_id}`, {inc_votes}).then((res) => {
    return res.data;
  });
};

export const fetchArticleComments = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchComment = (comments_id, inc_votes) => {
  return myApi.patch(`/comments/${comments_id}`, {inc_votes}).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, body, username) => {
  return myApi.post(`/articles/${article_id}/comments`, {body, username}).then((res) => {
    return res.data.comment;
  });
};




