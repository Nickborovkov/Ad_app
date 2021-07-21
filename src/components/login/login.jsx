import React from "react";
import styles from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

let Login = (props) => {

    let onLoginSubmit = (values) => {
        props.LoginNewUser(values.userLogin, values.userPassword, values.isRemember, values.captchaEnter)
    }

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h2 className={styles.title}>Login</h2>
           <LoginFormRedux onSubmit={onLoginSubmit} {...props}/>
        </div>
    )
}

export default Login

let LoginForm = (props) => {
    return <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field className={styles.input} component = {Input}
               name = 'userLogin'
               type='text'
               placeholder = 'Login'
               validate={[requiredField]}/>
        <Field className={styles.input} component = {Input}
               name = 'userPassword'
               type='password'
               placeholder = 'Password'
               validate={[requiredField]}/>
        <label className={styles.label}>
            <Field className={styles.checkbox} component = 'input'
                   type='checkbox'
                   name='isRemember'/>
                   Remember me?
        </label>

        {
            props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Field component={`input`}
                           type={`text`}
                           placeholder={`Enter captcha`}
                           name={`captchaEnter`}
                           validate={[requiredField]}/>
                </div>

        }

        {
            !props.error
                ? null
                : <div className={styles.errorDiv}>
                    {props.error}
                </div>
        }

        <button className={styles.button}>Login</button>
    </form>
}

let LoginFormRedux = reduxForm({
    form: `loginForm`
})(LoginForm)