import React from "react";
import styles from './login.module.css'
import {Field, reduxForm} from "redux-form";

let Login = (props) => {

    let onLoginSubmit = (values) => {
        alert(values)
    }

    return (
        <div>
            <h2 className={styles.title}>Login</h2>
           <LoginFormRedux onSubmit={onLoginSubmit}/>
        </div>
    )
}

export default Login

let LoginForm = (props) => {
    return <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field className={styles.input} component = 'input'
               name = 'userLogin'
               type='text'
               placeholder = 'Login'/>
        <Field className={styles.input} component = 'input'
               name = 'userPassword'
               type='password'
               placeholder = 'Password'/>
        <label className={styles.label}>
            <Field className={styles.checkbox} component = 'input'
                   type='checkbox'
                   name='isRemember'/>
                   Remember me?
        </label>
        <button className={styles.button}>Login</button>
    </form>
}

let LoginFormRedux = reduxForm({
    form: `loginForm`
})(LoginForm)