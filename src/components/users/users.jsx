import React from "react";
import styles from './users.module.css'
import defaultAvatar from '../../assets/images/defaultUser.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div className={styles.users}>
            <h2 className={styles.title}>Users</h2>
            <div className={styles.usersList}>
                {
                    props.users.map(u => {
                        return (
                            <div key={u.id}
                                 className={styles.user}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={styles.avatar}
                                         src={u.photos.small ? u.photos.small : defaultAvatar}
                                         alt="avatar"/>
                                </NavLink>
                                <div className={styles.propery}>{u.name}</div>
                                <div className={styles.propery}>{u.status}</div>
                                <div className={styles.propery}>{u.id}</div>
                                <div>
                                    {
                                        !u.followed
                                            ? <button className={styles.followBtn}
                                                onClick={()=>{props.subscribeUser(u.id)} }>Follow</button>
                                            : <button className={styles.followBtn}
                                                onClick={()=>{props.unSubscribeUser(u.id)} }>Unfollow</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.pages}>
                {
                    pages.map(p => {
                        return (
                            <div className={styles.page}>
                                <div className={props.currentPage === p && styles.activePage}
                                     onClick={ () => {props.onPageChanged(p)} }>
                                    {p}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users