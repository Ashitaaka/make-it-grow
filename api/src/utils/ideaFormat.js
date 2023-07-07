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
      const allIdUsers = acc.id_user_comment;

      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
      if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
        allUsers.push(user);
      }
      if (!allComments.includes(comment)) {
        allComments.push(comment);
      }
      if (!allIdUsers.includes(id_user_comment)) {
        allIdUsers.push(id_user_comment);
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
        id_user_comment: allIdUsers,
        deadline,
        id_status,
        is_closed,
        is_rejected,
        location_id,
        users: allUsers,
      };
    },
    { categories: [], users: [], comment: [], id_user_comment: [] }
  );
};
