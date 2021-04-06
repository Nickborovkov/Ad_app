import {addPostActionCreator} from '../../../redux/profileReducer'
import {updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import {deletePostActionCreator} from '../../../redux/profileReducer'
import store from '../../../redux/reduxStore'
import Myposts from './myposts'


const MypostsContainer = (props) => {

    let state = props.store.getState();

     let addPost = () =>{ 
        store.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text))        
    };

    let deletePost = () =>{
        store.dispatch(deletePostActionCreator())
    };

    return(
        <Myposts addPost={addPost}
                 updateNewPostText={onPostChange}
                 deletePost={deletePost}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>
        );
}

export default MypostsContainer;