import classes from './user.module.css'

const User = (props) => {
    return(
        <div className={classes.user}>
            <img className={classes.user__avatar} src={props.avatar} alt="avatar"/>
            <div className={classes.user__inner}>
                <p className={classes.user__property}>{props.name}</p>
                <p className={classes.user__property}>{props.status}</p>
            </div>
            <div className={classes.user__buttons}>
                <button className={classes.user__button}>Go to page</button>
                <button className={classes.user__button}>Write message</button>
            </div>
        </div>
    );
};

export default User;