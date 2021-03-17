import { NavLink } from 'react-router-dom'
import classes from './navbar.module.css'

const Navbar = () =>{
    return(
        <div className={classes.navbar}>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/profile'>Profile</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/dialogs'>Dialogs</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/friends'>Friends</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/news'>News</NavLink>            
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/photos'>Photos</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/music'>Music</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/videos'>Videos</NavLink>
            <NavLink className={classes.navbar__link} activeClassName={classes.navbar__active} to='/settings'>Settings</NavLink>
        </div>
    );
};

export default Navbar