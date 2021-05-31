import classes from './users.module.css'
import userPhoto from './../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
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
                    <p className={classes.user__property}>{u.id}</p>
                </div>
                <div>
                    {
                        !u.followed 
                        ? <button disabled = {props.followingInProgress.some(id => id === u.id)} className={classes.user__button_f} 
                        onClick={ () => { props.subscribeUser(u.id) } }
                        >Follow</button>
                        : <button disabled = {props.followingInProgress.some(id => id === u.id)} className={classes.user__button_u} 
                        onClick={ () => { props.unSubscribeUser(u.id) } }
                        >Unfollow</button>
                    }
                </div>
            </div>)
        }              
        </div>
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
    )
}

export default Users