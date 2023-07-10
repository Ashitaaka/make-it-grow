module.exports = function (ideasFromDb) {
  console.log(ideasFromDb);
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
        comment_id,
        id_user_comment,
        deadline,
        id_status,
        is_closed,
        is_rejected,
        location_id,
        ...user
      }
    ) => {
      const allComments = acc.comments;
      const allCategories = acc.categories;
      const allUsers = acc.users;

      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
      if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
        allUsers.push(user);
      }
      if (!allComments.includes(comment)) {
        allComments.push({ id : comment_id, content : comment, id_user : id_user_comment})
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
        comments: allComments,
        id_user_comment,
        deadline,
        id_status,
        is_closed,
        is_rejected,
        location_id,
        users: allUsers,
      };
    },
    { categories: [], users: [], comments: [] }
  );
};
