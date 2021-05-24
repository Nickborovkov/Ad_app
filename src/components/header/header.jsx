import classes from './header.module.css'
import logo from './../../images/logo.jpg'
import { NavLink } from 'react-router-dom'
import PreloaderSmall from '../../common/preloaderSmall/preloaderSmall';

const Header = (props) => {
    return(
        <div className={classes.header}>
            <div className={classes.header__logoWrapper}>
                <img className={classes.header__logo} src={logo} alt="logo"/>
            </div>
            <div className={classes.header__companyWrapper}>
                <p className={classes.header__company}>Samurai's Network</p>
            </div>
            {!props.currentUser ? <PreloaderSmall /> : <div className = {classes.header__login}>
                
                <div className={classes.login__avatarWrapper}>
                    <img className={classes.login__avatar} src={!props.currentUser.photos.small ? logo : props.currentUser.photos.small} alt="avatar" />
                </div>
                <div>
                    {!props.login ? <NavLink to='/login'>Login</NavLink>: props.login}
                </div>
                
                
            </div>}
            
        </div>
    );
};

export default Header;