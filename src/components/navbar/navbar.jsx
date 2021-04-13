import { NavLink } from 'react-router-dom'
import classes from './navbar.module.css'

const Navbar = () =>{
    return(
        <div className={classes.navbar}>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/profile'>Profile</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/dialogs'>Dialogs</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/users'>Users</NavLink>
        </div>
    );
};

export default Navbar