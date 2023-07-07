module.exports = function (ideasFromDb) {
  return ideasFromDb.reduce(
    (
      acc,
      {
        category,
        city,
        color,
        delay,
        idea_id,
        cat_id,
        status,
        title,
        detail,
        impact,
        risk,
        benefit,
        comment,
        id_user_comment,
        deadline,
        id_status,
        is_closed,
        is_rejected,
        location_id,
        ...user
      }
    ) => {
      const allComments = acc.comment;

      const allCategories = acc.categories;
      const allUsers = acc.users;

      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
      if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
        allUsers.push(user);
      }
      if (!allComments.some(({ user_id }) => user_id === id_user_comment)) {
        allComments.push({
          user_id: id_user_comment,
          content: comment,
        });
      }

      return {
        categories: allCategories,
        city,
        color,
        delay,
        idea_id,
        cat_id,
        status,
        title,
        detail,
        impact,
        risk,
        benefit,
        comment: allComments,
        deadline,
        id_status,
        is_closed,
        is_rejected,
        location_id,
        users: allUsers,
      };
    },
    { categories: [], users: [], comment: [] }
  );
};
