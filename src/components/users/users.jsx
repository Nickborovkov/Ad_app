import React from "react";
import styles from './users.module.css'
import User from "./user/user";
import Paginator from "../../common/Paginator/paginator";
import Preloader from "../../common/preloader/preloader";

let Users = ({totalUsersCount, pageSize, users,followingProgress,
                 subscribeUser, unSubscribeUser, onPageChanged, currentPage, isFetching}) => {
        return (
            <div>
                {isFetching
                    ? <Preloader />
                    :<div className={styles.users}>
                        <h2 className={styles.title}>Users</h2>
                        <div className={styles.usersList}>
                            {
                                users.map(u => <User key={u.id}
                                                     user={u}
                                                     followingProgress={followingProgress}
                                                     subscribeUser={subscribeUser}
                                                     unSubscribeUser={unSubscribeUser}/>)
                            }
                        </div>
                    </div>
                }
                <Paginator totalUsersCount = {totalUsersCount}
                           pageSize = {pageSize}
                           onPageChanged={onPageChanged}
                           currentPage = {currentPage}/>
            </div>

    )
}

export default Users