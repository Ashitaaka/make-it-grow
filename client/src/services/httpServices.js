import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5080/api';
//
export const getIdeaById = (id) => {
  return axios
    .get(
      `/ideas/${id}/?fields=id,title,locations,status,categories,users,detail, risk, impact, benefit`
    )
    .then((res) => res.data);
};
//To get all locations
export const getAllLocations = () => {
  return axios
    .get('/locations')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
//To register
export const registerUser = (userDatas) => {
  return axios
    .post('/users/register', userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
