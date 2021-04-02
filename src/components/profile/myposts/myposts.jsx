import react from 'react'
import classes from './myposts.module.css'
import Post from './post/post'


import {addPostActionCreator} from './../../../redux/state'
import {updateNewPostTextActionCreator} from './../../../redux/state'
import {deletePostActionCreator} from './../../../redux/state'


const Myposts = (props) => {

    let postsElements = props.state.map((p)=><Post id={p.id} message={p.message} likescount={p.likescount} />)


    let addPost = () =>{ 
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = (event) => {
        let text = event.target.value; 
        props.dispatch(updateNewPostTextActionCreator(text))        
    };

    let deletePost = () =>{
        props.dispatch(deletePostActionCreator())
    };

    return(
        <div className={classes.myposts}>
            <h2 className={classes.myposts__title}>My posts</h2>
            <div className={classes.myposts__holder}>
                <textarea className={classes.myposts__textarea} 
                          onChange={onPostChange} 
                          value={props.newPostText}/>
                <div className={classes.myposts__buttonHolder}>
                    <button className={classes.myposts__button}
                            onClick={addPost}>Add post</button>
                    <button className={classes.myposts__button}
                            onClick={deletePost}>Cancel</button>
                </div>
            </div>
            <div className={classes.myposts__postList}>
                {postsElements}
            </div>
        </div>
    );
}

export default Myposts;