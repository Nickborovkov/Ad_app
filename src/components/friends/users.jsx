import classes from './users.module.css'


import user1 from './../../images/users/user1.jpg'
import user2 from './../../images/users/user2.jpg'
import user3 from './../../images/users/user3.jpg'
import user4 from './../../images/users/user4.jpg'
// import user5 from './../../images/users/user5.jpg'
// import user6 from './../../images/users/user6.jpg'
// import user7 from './../../images/users/user7.jpg'
// import user8 from './../../images/users/user8.jpg'
// import user9 from './../../images/users/user9.jpg'
// import user10 from './../../images/users/user10.jpg'


let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers(
            [
                {id: 1,followed: true, fullName: `Mike Torp`, status: `Squares`,
                    avatar: user1, location: {country: `Russia`,city: `New Eino`}},
                {id: 2, followed: true, fullName: `Joe Bartell`, status: `bluetooth`,
                    avatar: user2, location: {country: `Russia`, city: `Port Jessicaport`}},
                {id: 3, followed: false, fullName: `Sam Troy`, status: `Gorgeous Savings`,
                    avatar: user3, location: {country: `Netherlands`, city: `Kirlinport`}},
                {id: 4, followed: false, fullName: `Jason Prok`, status: `mobile Intelligent white`,
                    avatar: user4, location: {country: `Zimbabwe`, city: `South Leola`}},
            ]
        )
    }

    return <div>
        <h2 className={classes.users__heading}>Users</h2>
        <div className={classes.user__holder}>
        {
            props.users.map(u => <div className={classes.user__inner} key = {u.id}> 
                <img className={classes.user__avatar} src={u.avatar} alt="1"/>
                <div className={classes.user__box}>
                    <p className={classes.user__property}>{u.fullName}</p>
                    <p className={classes.user__property}>{u.status}</p>
                </div>
                <div className={classes.user__box}>
                    <p className={classes.user__property}>{u.location.country}</p>
                    <p className={classes.user__property}>{u.location.city}</p>
                </div>
                <div>
                    {
                        u.followed 
                        ? <button className={classes.user__button} onClick={()=>{props.unfollow(u.id)}}>unfollow</button>
                        : <button className={classes.user__button} onClick={()=>{props.follow(u.id)}}>follow</button>
                    }
                </div>
            </div>)
        }
        </div>
    </div>
};

export default Users;