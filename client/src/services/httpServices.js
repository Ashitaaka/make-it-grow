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

// section create idea

export const getCategories = () => {
  return axios
    .get("/categories")
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

export const getLocations = () => {
  return axios
    .get("/locations")
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// post idea 

export const createIdea = (newIdea) => {
  return axios.post('/ideas', newIdea).then((response) => {
    if (response.status === 201) {
      return true;
    }
    return false;
  });
};

// modify idea 
export const modifyIdea = (idea, ideaV2) => {
  return axios.put(`/ideas/${idea.idea_id}`, ideaV2)
  .then((response) => {
    if (response.status === 201) {
      return true;
    }
    return false;
  });
};
//TO get ideas by id title status
export const getIdeasbyIdTitleStatus = () => {
  return axios.get("/ideas/?fields=id,title,status");
};

//To get users by role
export const getUsersByRole = () => {
  return axios.get("/users/?fields=users,role");
};

//To delete user
export const deleteUser = (userid) => {
  return axios.delete(`/users/${userid}`);
};

//To archive idea
export const archiveIdea = (ideaid, archiveIdeaForm) => {
  return axios.put(`/ideas/${ideaid}`, archiveIdeaForm);
};

//To change user role
export const userRoleSwitch = (userid, role) => {
  return axios.put(`/users/${userid}`, role);
};

// TO add location or category
export const addLocorCat = (param, newCategory, newLocation) => {
  return axios.post(
    `/${param}`,
    param === "categories" ? newCategory : newLocation
  );
};

//update idea status to 2
export const goToState2 = (idea, deadline) => {
  return axios.put(`ideas/${idea.idea_id}`, { id_status: 2, delay_date: deadline });
};

export const goToState3 = (idea, deadline) => {
  return axios.put(`ideas/${idea.idea_id}`, { id_status: 2, delay_date: deadline });
};

export const goToState5 = (idea, deadline) => {
  return axios.put(`ideas/${idea.idea_id}`, { id_status: 5, delay_date: deadline });
};

//reject idea
export const goToStateRejected = (idea) => {
  return axios.put(`ideas/${idea.idea_id}`, { is_closed: 1, id_status: 8})
};

export const goToStateRejectedByExpert = (idea) => {
  return  axios.put(`ideas/${idea.idea_id}`, { id_status: 3})};

// modify idea 
export const comfirmModifyIdea = (idea) => {

  return axios.put(`ideas/${idea.idea_id}`, { id_status: 4 })

  .then((response) => {
    if (response.status === 200) {
      return true;
    }
    return false;
  });
};

