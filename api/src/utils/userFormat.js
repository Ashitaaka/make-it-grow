module.exports = function (usersFromDb) {
  return usersFromDb.reduce(
    (acc, { user_id, firstname, lastname, picture, user_id_categories }) => {
      const allCategories = acc.user_id_categories;

      if (!allCategories.includes(user_id_categories)) {
        allCategories.push(user_id_categories);
      }

      return {
        user_id,
        firstname,
        lastname,
        picture,
        user_id_categories: allCategories,
      };
    },
    { user_id_categories: [] }
  );
};
