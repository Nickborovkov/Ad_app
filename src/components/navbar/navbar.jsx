import React from "react";
import {NavLink} from "react-router-dom";
import styles from './navbar.module.css'
import { FaIdCard } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

let Navbar = () => {
    return (
        <div className={styles.navbar}>
           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/profile'>
               <div className={styles.linkHolder}>
                   <FaIdCard className={styles.icon} />
                   <p>Profile</p>
               </div>
           </NavLink>

           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/dialogs'>
               <div className={styles.linkHolder}>
                   <FaEnvelope className={styles.icon} />
                   <p>Dialogs</p>
               </div>
           </NavLink>
           <NavLink className={styles.link}
                    activeClassName={styles.activeLink}
                    to='/users'>
               <div className={styles.linkHolder}>
                   <FaUsers className={styles.icon} />
                   <p>Users</p>
               </div>
           </NavLink>
        </div>
    )
}

export default Navbar