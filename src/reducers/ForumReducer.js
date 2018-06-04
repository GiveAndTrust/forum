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
        case 'RECEIVE_FORUM_ITEMS':
        return {
          items: action.items
        }
      default:
        return state
    }
  }
  
  export default forumReducer