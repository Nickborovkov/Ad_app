import styles from './header.module.css'
import React from "react";
import logo from '../../assets/images/logo2.png'
import {NavLink} from "react-router-dom";
import PreloaderSmall from "../../common/preloaderSmall/preloaderSmall";
import defaultAvatar from '../../assets/images/defaultUser.png'

let Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <p className={styles.name}>SamuraiNetwork</p>
            <div>
                {
                    !props.isAuth
                        ? <NavLink className={styles.login} to='/login'>Sign in &#9094;</NavLink>
                        : <div>
                            {
                                !props.currentUser
                                    ? <PreloaderSmall />
                                    : <NavLink className={styles.loginLink}
                                               to={`/profile/${props.userId}`}>
                                        <div className={styles.userHolder}>
                                            <img className={styles.loginAvatar}
                                                 src={props.currentUser.photos.small
                                                ? props.currentUser.photos.small
                                                : defaultAvatar} alt="avatar"/>
                                            <p className={styles.loginUser}>{props.login}</p>
                                        </div>
                                    </NavLink>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Header