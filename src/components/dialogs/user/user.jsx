import { NavLink } from 'react-router-dom'
import classes from './../dialogs.module.css'

const User = (props) => {

    let path = `/dialogs/` + props.id

    return(
        <div className={classes.dialogs__user}>
            <NavLink className={classes.dialogs__userItem} to={path}>{props.users}</NavLink>
        </div>  
    );
};

export default User;