import { connect } from 'react-redux'
import ForumList from '../components/ForumList'

const mapStateToProps = state => {
    return {
      items: state.items
      }
  }

const ForumListContainer = connect(mapStateToProps)(ForumList)

export default ForumListContainer
