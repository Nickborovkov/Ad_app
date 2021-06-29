import React from "react";
import styles from './dialogs.module.css'
import {Field, reduxForm} from "redux-form";

let Dialogs = (props) => {

    let onAddMessage = (values) => {
        props.addNewMessage(values.userName, values.userMessage)
    }

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.title}>Dialogs</h2>
            <div className={styles.dialogsHolder}>
                {
                    props.dialogs.map(d => {
                        return (
                            <div key={d.id} className={styles.dialogsItem}>
                                <div className={styles.name}>{d.user}</div>
                                <div className={styles.message}>{d.message}</div>
                            </div>
                        )
                    })
                }
            </div>
            <DialogsFromRedux onSubmit={onAddMessage}/>
        </div>
    )
}

export default Dialogs

let DialogsForm = (props) => {
    return <form className={styles.dialogsForm} onSubmit={props.handleSubmit}>
        <Field className={styles.userName} component='input' name='userName'/>
        <Field className={styles.userMessage} component='textarea' name='userMessage'/>
        <button className={styles.submitBtn}>Send</button>
    </form>
}

let DialogsFromRedux = reduxForm({
    form: `newMessageForm`
})(DialogsForm)