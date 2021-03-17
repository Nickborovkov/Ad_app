import classes from './myposts.module.css'
import Post from './post/post'

const Myposts = (props) => {

    let postsElements = props.state.map((p)=><Post id={p.id} message={p.message} likescount={p.likescount} />)

    return(
        <div className={classes.myposts}>
            <h2 className={classes.myposts__title}>My posts</h2>
            <div className={classes.myposts__holder}>
                <textarea className={classes.myposts__textarea} placeholder='Write your thoughts...'></textarea>
                <div className={classes.myposts__buttonHolder}>
                    <button className={classes.myposts__button}>Send</button>
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