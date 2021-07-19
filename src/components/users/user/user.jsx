import styles from "../users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../assets/images/defaultUser.png";
import React from "react";

let User = ({user, followingProgress, subscribeUser,unSubscribeUser}) => {
    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${user.id}`}>
                <img className={styles.avatar}
                     src={user.photos.small ? user.photos.small : defaultAvatar}
                     alt="avatar"/>
            </NavLink>
            <div className={styles.propery}>{user.name}</div>
            <div className={styles.propery}>{user.status}</div>
            <div className={styles.propery}>{user.id}</div>
            <div>
                {
                    !user.followed
                        ? <button disabled={followingProgress.some(id => id === user.id)}
                                  className={styles.followBtn}
                                  onClick={()=>{subscribeUser(user.id)} }>Follow</button>
                        : <button disabled={followingProgress.some(id => id === user.id)}
                                  className={styles.followBtn}
                                  onClick={()=>{unSubscribeUser(user.id)} }>Unfollow</button>
                }
            </div>
        </div>
    )
}

export default User