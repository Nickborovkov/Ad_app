import storeContext from '../../storeContext';
import classes from './friends.module.css'
import User from './user/user'

const Friends = (props) => {



    return(
        <storeContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let usersElements = state.friendsPage.users.map((u)=><User name={u.name} status={u.status} avatar={u.avatar}/>)
                    return (
                        <div className={classes.friends}>
                        <h2 className={classes.friends__heading}>Friends</h2>
                        <div className={classes.users__holder}>
                        {usersElements}
                        </div>
                    </div>
                    )
                }
            }

        </storeContext.Consumer>
    );
};

export default Friends;