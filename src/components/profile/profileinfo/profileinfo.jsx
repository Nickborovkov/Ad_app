import classes from './profileinfo.module.css'
import avatar from './../../../images/avatar.png'
import PersonalData from './personalData/personalData'

const Profileinfo = (props) => {
    let personalDataElements = props.state.map(d => <PersonalData title={d.title} subtitle={d.subtitle}/>)

    return(
        <div className={classes.profileinfo}>
            <div className={classes.profileinfo__avatarWrapper}>
                <img className={classes.profileinfo__avatar} src={avatar} alt="avatar"/>
            </div>            
            <div className={classes.profileinfo__info}>
            {personalDataElements}
            </div>
        </div>
    );
}

export default Profileinfo;