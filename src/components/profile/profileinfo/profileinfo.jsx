import classes from './profileinfo.module.css'
import PersonalData from './personalData/personalData'

const Profileinfo = (props) => {
    let personalDataElements = props.profile.map(d => <PersonalData key={d.id} title={d.title} subtitle={d.subtitle}/>)

    return(
        <div className={classes.profileinfo}>
            <div className={classes.profileinfo__avatarWrapper}>
                <img className={classes.profileinfo__avatar} src={props.avatar} alt="avatar"/>
            </div>            
            <div className={classes.profileinfo__info}>
                {personalDataElements}
            </div>
        </div>
    )                       

}

export default Profileinfo;