import classes from './../dialogs.module.css'

const Dialog = (props) => {
    return(
        <div className={classes.dialogs__message}>
            <p className={classes.dialogs__messageItem}>{props.message}</p>
        </div>
    );
};

export default Dialog;