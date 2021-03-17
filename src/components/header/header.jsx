import classes from './header.module.css'
import logo from './../../images/logo.jpg'

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.header__logoWrapper}>
                <img className={classes.header__logo} src={logo} alt="logo"/>
            </div>
            <div className={classes.header__companyWrapper}>
                <p className={classes.header__company}>Samurai's Network</p>
            </div>
        </div>
    );
};

export default Header;