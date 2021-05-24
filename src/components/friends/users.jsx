import classes from './users.module.css'
import userPhoto from './../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)        
    }
    return (
        <div>
        <h2 className={classes.users__heading}>Users</h2>
        <div className={classes.user__holder}>            
        {
            props.users.map(u => <div className={classes.user__inner} key = {u.id}>
                <NavLink to = {`/profile/` + u.id}>
                    <img className={classes.user__avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="1"/>
                </NavLink>
                
                <div className={classes.user__box}>
                    <p className={classes.user__property}>{u.name}</p>
                    <p className={classes.user__property}>{u.status}</p>
                </div>
                <div>
                    {
                        !u.followed 
                        ? <button className={classes.user__button_f} 
                        onClick={()=>{
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials:true
,                                headers: {
                                    "API-KEY": "634816f8-105c-4a9b-ae6b-0aaab45555f9"
                                }
                            }).then(response => {
                                props.follow(u.id)
                            })                           
                            }
                        }>Follow</button>
                        : <button className={classes.user__button_u} 
                        onClick={()=>{
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "634816f8-105c-4a9b-ae6b-0aaab45555f9"
                                }
                            }).then(response => {
                                props.unFollow(u.id)
                            })
                            }
                        }>Unfollow</button>
                    }
                </div>
            </div>)
        }
        <div className={classes.users__pages}>
            {
            pages.map(p => {
                return (
                    <div className={classes.users__page}>
                        <div className={props.currentPage === p && classes.selectedPage} onClick = { () => {props.onPageChanged(p)} }>
                            {p}
                        </div>
                    </div>
                )
            })
            }
        </div>
        
        </div>
    </div>
    )
}

export default Users