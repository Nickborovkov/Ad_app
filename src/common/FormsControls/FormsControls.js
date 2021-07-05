import React from "react";
import styles from './FormsControls.module.css'
import { RiErrorWarningFill } from 'react-icons/ri';

export let TextArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.textareaHolder}>
            <div className={hasError ? styles.textAreaError : ``}>
                <textarea {...input} {...props}/>
                {
                    hasError &&  <span className={styles.spanError}>
                        <RiErrorWarningFill />{meta.error}
                    </span>
                }
            </div>
        </div>
    )
}

export let Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.inputHolder}>
            <div className={hasError ? styles.inputError : ``}>
                <input {...input} {...props}/>
                {
                    hasError &&  <span className={styles.spanInpError}>
                        <RiErrorWarningFill />{meta.error}
                    </span>
                }
            </div>

        </div>
    )
}