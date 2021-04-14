import classes from './users.module.css'
import userPhoto from './../../assets/images/user.jpg'


import * as axios from 'axios'


let Users = (props) => {
    let getUsers = () => {
        if(props.users.length === 0){

            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                props.setUsers(response.data.items)
            })
        };
    };

    return <div>
        <h2 className={classes.users__heading}>Users</h2>

        <button onClick={getUsers}>Get Users</button>
        <div className={classes.user__holder}>
            
        {
            props.users.map(u => <div className={classes.user__inner} key = {u.id}> 
                <img className={classes.user__avatar} src={u.photos.small != null ? u.photos.small: userPhoto} alt="1"/>
                <div className={classes.user__box}>
                    <p className={classes.user__property}>{u.name}</p>
                    <p className={classes.user__property}>{u.status}</p>
                </div>
                <div className={classes.user__box}>
                    <p className={classes.user__property}>{`u.location.country`}</p>
                    <p className={classes.user__property}>`{`u.location.city`}`</p>
                </div>
                <div>
                    {
                        u.followed 
                        ? <button className={classes.user__button_f} 
                        onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                        : <button className={classes.user__button_u} 
                        onClick={()=>{props.follow(u.id)}}>follow</button>
                    }
                </div>
            </div>)
        }
        </div>
    </div>
};

export default Users;