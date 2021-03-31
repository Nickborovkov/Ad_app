import react from 'react'
import classes from './myposts.module.css'
import Post from './post/post'

const Myposts = (props) => {

    let postsElements = props.state.map((p)=><Post id={p.id} message={p.message} likescount={p.likescount} />)


    let newPostElement = react.createRef()

    let addPost = () =>{ 
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value; 
        props.updateNewPostText(text)        
    };




    return(
        <div className={classes.myposts}>
            <h2 className={classes.myposts__title}>My posts</h2>
            <div className={classes.myposts__holder}>
                <textarea className={classes.myposts__textarea} 
                ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <div className={classes.myposts__buttonHolder}>
                    <button className={classes.myposts__button} onClick={addPost}>Add post</button>
                    <button className={classes.myposts__button}>Cancel</button>
                </div>
            </div>
            <div className={classes.myposts__postList}>
                {postsElements}
            </div>
        </div>
    );
}

export default Myposts;