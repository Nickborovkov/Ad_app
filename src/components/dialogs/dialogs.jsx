import React from "react";
import styles from './dialogs.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


let maxLength200 = maxLengthCreator(200)

let maxLength50 = maxLengthCreator(50)


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
        <Field className={styles.userName}
               component={Input}
               name='userName'
               validate={[requiredField, maxLength50]}/>
        <Field className={styles.userMessage}
               component={TextArea}
               name='userMessage'
               placeholder='Enter your message...'
               validate={[requiredField, maxLength200]}/>
        <button className={styles.submitBtn}>Send</button>
    </form>
}

let DialogsFromRedux = reduxForm({
    form: `newMessageForm`
})(DialogsForm)