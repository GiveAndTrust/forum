let forumItemCount = 0
export const addForumItem = text => ({
  type: 'ADD_FORUM_ITEM',
  id: forumItemCount++,
  text
})

export const receiveForumItems = items => {
       console.log('receiving...' + JSON.stringify(items))

  return ({
  type: 'RECEIVE_FORUM_ITEMS',
  items
})
}

export const signalError = error => ({
  type: 'SIGNAL_ERROR',
  error
})

export function fetchForumItems() {
  return function (dispatch) {
    return fetch('http://localhost:8088/posts').then(
      response => response.json().then(json => dispatch(receiveForumItems(json))),
      error => dispatch(signalError(error))
    );
  };
}