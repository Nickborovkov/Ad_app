import classes from './friends.module.css'
import User from './user/user'

const Friends = (props) => {
    let usersElements = props.users.map((u)=><User name={u.name} status={u.status} avatar={u.avatar}/>)
    return (
        <div className={classes.friends}>
        <h2 className={classes.friends__heading}>Friends</h2>
        <div className={classes.users__holder}>
        {usersElements}
        </div>
    </div>
    )
};

export default Friends;