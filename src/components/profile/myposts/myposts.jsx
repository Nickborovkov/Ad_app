import classes from './myposts.module.css'
import Post from './post/post'

const Myposts = (props) => {

    let postsElements = props.posts.map((p)=><Post id={p.id} key={p.id} message={p.message} likescount={p.likescount} />)

    let onAddPost = () =>{ 
        props.addPost()
    };

    let onPostChange = (e) => {
        let text = e.target.value; 
        props.updateNewPostText(text)      
    };

    let onDeletePost = () =>{
        props.deletePost()
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
                            onClick={onAddPost}>Add post</button>
                    <button className={classes.myposts__button}
                            onClick={onDeletePost}>Cancel</button>
                </div>
            </div>
            <div className={classes.myposts__postList}>
                {postsElements}
            </div>
        </div>
    );
}

export default Myposts;