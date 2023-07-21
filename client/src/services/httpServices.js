import axios from "axios";
axios.defaults.baseURL = "http://localhost:5080/api";

//To get Idea by ID

export const getIdeaById = (id) => {
  return axios
    .get(
      `/ideas/${id}/?fields=id,title,locations,status,categories,users,detail,risk,impact,benefit,comments,delay_date`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To post a comment
export const postComment = (newComment) => {
  return axios
    .post(`/comments`, newComment)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To get all locations
export const getAllLocations = () => {
  return axios
    .get("/locations")
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
    .post("/users/login", userDatas)
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
    .post("/users/register", userDatas)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//To upload a picture
export const importNewPicture = (formData, userid) => {
  for (const value of formData.values()) {
    if (!value.name) {
      return;
    }

    return axios
      .put(`/users/${userid}`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  }
};

//To delete user
export const deleteUser = (userid) => {
  return axios
    .delete(`/users/${userid}`)
    .then((res) => {
      setError(false);
    })
    .catch((error) => {
      setError(true);
    });
};

//To archive idea

export const archiveIdea = (ideaid, archiveIdeaForm) => {
  return axios
    .put(`/ideas/${ideaid}`, archiveIdeaForm)
    .then((res) => {
      setError(false);
    })
    .catch((error) => {
      setError(true);
    });
};

//To change user role

export const userRoleSwitch = (userid, role) => {
  return axios.put(`/users/${userid}`, role);
};
