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
        comment_id,
        id_user_comment,
        deadline,
        id_status,
        is_closed,
        location_id,
        delay_date,
        ...user
      }
    ) => {
      const allComments = acc.comment;
      const allCategories = acc.categories;
      const allUsers = acc.users;
      const uniqueCommentIds = acc.uniqueCommentIds;

      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
      if (!allUsers.some(({ user_id }) => user_id === user.user_id)) {
        allUsers.push(user);
      }

      // Check if the comment_id is not in the set of uniqueCommentIds
      if (!uniqueCommentIds.has(comment_id)) {
        // If the comment_id does not exist, add the comment to the dictionary
        allComments.push({
          id: comment_id,
          id_user: id_user_comment,
          content: comment,
        });

        // Add the comment_id to the set of uniqueCommentIds
        uniqueCommentIds.add(comment_id);
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
        location_id,
        delay_date,
        users: allUsers,
        uniqueCommentIds,
      };
    },
    { categories: [], users: [], comment: [], uniqueCommentIds: new Set() }
  );
};
