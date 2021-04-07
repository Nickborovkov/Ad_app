import MypostsContainer from './myposts/mypostsContainer'
import classes from './profile.module.css'
import Profileinfo from './profileinfo/profileinfo'

const Profile = (props) => {
    return(
        <div className={classes.profile}>
            <h2 className={classes.profile__title}>Profile</h2>
            <Profileinfo /> {/**store={props.store} */}
            <MypostsContainer /> {/**store={props.store} */}
        </div>
    );
};

export default Profile;