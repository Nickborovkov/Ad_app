import classes from './../profileinfo.module.css'

const PersonalData = (props) => {
    return(
        <div className={classes.profileinfo__infoholder}>
            <p className={classes.profileinfo__title}>{props.title + `:`}</p>
            <p className={classes.profileinfo__subtitle}>{props.subtitle}</p>
        </div>
    );
};

export default PersonalData;