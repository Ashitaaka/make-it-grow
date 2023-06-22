import axios from "axios";

//To get all locations
export const getAllLocations = () => {
  return axios
    .get("http://localhost:5080/api/locations")
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
    .post("http://localhost:5080/api/users/register", userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To Login
export const loginUser = (userDatas) => {
  return axios
    .post("http://localhost:5080/api/users/login", userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
