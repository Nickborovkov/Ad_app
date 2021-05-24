import classes from './header.module.css'
import logo from './../../images/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return(
        <div className={classes.header}>
            <div className={classes.header__logoWrapper}>
                <img className={classes.header__logo} src={logo} alt="logo"/>
            </div>
            <div className={classes.header__companyWrapper}>
                <p className={classes.header__company}>Samurai's Network</p>
            </div>
            <div>
                <img className={classes.defAvatar} src={!props.currentUser.photos.small ? logo : props.currentUser.photos.small} alt="avatar" />
                <NavLink className={classes.login} to={`/login`}>{props.isAuth ? props.email : `Sign in`}</NavLink>
            </div>
        </div>
    );
};

export default Header;