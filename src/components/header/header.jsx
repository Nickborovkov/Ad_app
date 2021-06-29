import styles from './header.module.css'
import React from "react";
import logo from '../../assets/images/logo2.png'

let Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <p className={styles.name}>SamuraiNetwork</p>
            <div className={styles.login}>
                Login
            </div>
        </div>
    )
}

export default Header