import classes from './../dialogs.module.css'

const Photo = (props) => {
    return(
        <div className={classes.dialogs__avatarWrapper}>
            <img className={classes.dialogs__avatar} src={props.avatar}/>
        </div>
    );
};

export default Photo;