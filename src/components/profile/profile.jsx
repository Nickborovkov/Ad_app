import Myposts from './myposts/myposts'
import classes from './profile.module.css'
import Profileinfo from './profileinfo/profileinfo'

const Profile = (props) => {
    return(
        <div className={classes.profile}>
            <h2 className={classes.profile__title}>Profile</h2>
            <Profileinfo state={props.state.profile} avatar={props.state.avatar}/>
            <Myposts state={props.state.posts} 
                     addPost={props.addPost} 
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;