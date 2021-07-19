import styles from "../dialogs.module.css";
import React from "react";

let Dialog = ({dialog, deleteMessage}) => {
    return (
        <div className={styles.dialogsItem}>
            <div className={styles.name}>{dialog.user}</div>
            <div className={styles.message}>{dialog.message}</div>
            <button className={styles.deleteButton} onClick={deleteMessage}>Delete</button>
        </div>
    )
}

export default Dialog