const forumReducer = (state = {items:[]}, action) => {
    switch (action.type) {
      case 'ADD_FORUM_ITEM':
        return {
            items: [
                    ...state.items,
                    {
                        id: action.id,
                        text: action.text
                    }
                    ]
        }
      default:
        return state
    }
  }
  
  export default forumReducer