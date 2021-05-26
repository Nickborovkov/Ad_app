import classes from './header.module.css'
import logo from './../../images/logo.jpg'
import PreloaderSmall from '../../common/preloaderSmall/preloaderSmall';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={classes.header}>
            <div className={classes.header__logoWrapper}>
                <img className={classes.header__logo} src={logo} alt="logo"/>
            </div>
            <div className={classes.header__companyWrapper}>
                <p className={classes.header__company}>Samurai's Network</p>
            </div>
            <div className={classes.header__login}>
                {!props.isAuthorised || !props.currentUser ? <NavLink className = {classes.login__link} to={`/login`}>Login</NavLink> : <div className={classes.header__login}>
                    <div className={classes.login__avatarWrapper}>
                         <img className={classes.login__avatar} src={!props.currentUser.photos.small ? logo : props.currentUser.photos.small} alt="avatarSmall" />
                    </div>                   
                    {props.login}
                    </div>}
            </div>
            
                
            </div>
    );
};

export default Header;