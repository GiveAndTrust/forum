import { addForumItem } from '../actions/forumActions'
import { connect } from 'react-redux'
import AddItemButton from '../components/AddItemButton'

const mapDispatchToProps = dispatch => {
    return {
      onAddClick: (text) => {
        dispatch(addForumItem(text))
      }
    }
  }

const AddItemContainer = connect(state => {}, mapDispatchToProps)(AddItemButton)

export default AddItemContainer
