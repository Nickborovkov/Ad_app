import { connect } from 'react-redux';
import {addPostActionCreator} from '../../../redux/profileReducer'
import {updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import {deletePostActionCreator} from '../../../redux/profileReducer'
import Myposts from './myposts'

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts, 
    }
};

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        deletePost: () => {dispatch(deletePostActionCreator())},
    }
}

let MypostsContainer = connect(mapStateToProps,mapDispatchToProps) (Myposts)


export default MypostsContainer;