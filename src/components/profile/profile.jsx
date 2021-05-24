import MypostsContainer from './myposts/mypostsContainer'
import classes from './profile.module.css'
import ProfileinfoContainer from './profileinfo/profileinfoContainer'

const Profile = (props) => {
    return(
        <div className={classes.profile}>
            <h2 className={classes.profile__title}>Profile</h2>
            <ProfileinfoContainer profile = {props.profile}/>
            <MypostsContainer />
        </div>
    );
};

export default Profile;