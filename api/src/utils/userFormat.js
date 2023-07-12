module.exports = function (usersFromDb) {
  return usersFromDb.reduce(
    (
      acc,
      {
        user_id,
        firstname,
        lastname,
        picture,
        user_id_categories,
        occupation,
        service,
      }
    ) => {
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
        occupation,
        service,
      };
    },
    { user_id_categories: [], users: [], comment: [] }
  );
};
