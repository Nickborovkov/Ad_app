import React from "react";
import {NavLink} from "react-router-dom";
import styles from './navbar.module.css'

let Navbar = () => {
    return (
        <div className={styles.navbar}>
           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/profile'>Profile</NavLink>
           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/dialogs'>Dialogs</NavLink>
           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/users'>Users</NavLink>
        </div>
    )
}

export default Navbar