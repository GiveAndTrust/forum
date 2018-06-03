let forumItemCount = 0
export const addForumItem = text => ({
  type: 'ADD_FORUM_ITEM',
  id: forumItemCount++,
  text
})

