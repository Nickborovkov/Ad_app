import classes from './footer.module.css'

const Footer = () => {
    return(
        <div className={classes.footer}>
            <p className={classes.footer__copyright}>Made by Nick Borovkov ©</p>
        </div>
    );
};

export default Footer;