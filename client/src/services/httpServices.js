import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5080/api';

//

export const getIdeaById = (id) => {
  return axios
    .get(`/ideas/${id}/?fields=id,title,locations,status,categories,users`)
    .then((res) => res.data);
};
