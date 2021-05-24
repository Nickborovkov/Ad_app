import classes from './profileinfo.module.css'
import defaultAvatar from './../../../assets/images/user.jpg'

const Profileinfo = (props) => {
    return(
        <div>
            <img className = {classes.avatar} src={!props.profile.photos.large ? defaultAvatar : props.profile.photos.large} alt="avatar" />
            <div className={classes.info__holder}>
                <p className={classes.info__property}>Samurai's name:</p>
                <p className={classes.info__property}>{props.profile.fullName}</p>
            </div>
            <div className={classes.info__holder}>
                <p className={classes.info__property}>Samurai's about:</p>
                <p className={classes.info__property}>{props.profile.aboutMe}</p>
            </div>
            <div className={classes.info__holder}>
                <p className={classes.info__property}>Samurai's ID:</p>
                <p className={classes.info__property}>{props.profile.userId}</p>
            </div>
            <div className={classes.info__holder}>
                <p className={classes.info__property}>Samurai's job:</p>
                <p className={classes.info__property}>{props.profile.lookingForAJob ? 'This samurai is looking for a job now' : 'This samurai is currently employed'}</p>
                <p className={classes.info__property}>{props.profile.lookingForAJobDescription}</p>
            </div>          
        </div>
    )                       

}

export default Profileinfo;