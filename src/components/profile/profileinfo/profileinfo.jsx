import classes from './profileinfo.module.css'
import PersonalData from './personalData/personalData'
import storeContext from '../../../storeContext';

const Profileinfo = () => {
    return(
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let personalDataElements = state.profilePage.profile.map(d => <PersonalData title={d.title} subtitle={d.subtitle}/>)
                    return (
                        <div className={classes.profileinfo}>
                        <div className={classes.profileinfo__avatarWrapper}>
                            <img className={classes.profileinfo__avatar} src={state.profilePage.avatar} alt="avatar"/>
                        </div>            
                        <div className={classes.profileinfo__info}>
                            {personalDataElements}
                        </div>
                    </div>
                    )
                }
            }
        </storeContext.Consumer>
    );
}

export default Profileinfo;