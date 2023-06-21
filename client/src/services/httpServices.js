import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5080/api';

const toto = {
  id: 1,
  title: 'Espace bien-être',

  role: 'Administrateur',
  category: 'Bien-être',
  color: '--cerise-dark-color',
  city: 'Mexico',
  status: 'modération',
  delay: 5,

  users: [
    {
      user_id: 4,
      firstname: 'Olivier',
      lastname: 'GOMEZ',
      picture: '/images/profile-pictures/olive.jpg',
      role: 'Administrateur',
      is_owner: 0,
    },
  ],
};

export const getIdeadById = (id) => {
  return axios
    .get(`/ideas/${id}/?fields=id,title,locations,status,categories,users`)
    .then((res) => toto);
};
