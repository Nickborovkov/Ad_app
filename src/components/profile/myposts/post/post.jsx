import classes from './post.module.css';
import avatar from './../../../../images/avatar.png';

const Post = (props) => {
    return(
        <div className={classes.post}>
            <img className={classes.post__avatar} src={avatar} alt="post__avatar"/>
            <p className={classes.post__text}>{props.message}</p>
            <div className={classes.post__likeSection}>
                <p className={classes.post__likesCount}>{props.likescount}</p>
                <button className={classes.post__likeButton}>Like</button>
            </div>
        </div>
    );
};

export default Post;