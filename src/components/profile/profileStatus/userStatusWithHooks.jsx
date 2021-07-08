import React, {useEffect, useState} from "react";
import styles from './userStatus.module.css'

let ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] =  useState(false)
    let [status, setStatus] =  useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <p className={styles.status}
                       onDoubleClick={activateEditMode}>{props.status}</p>
                </div>
            }
            {
                editMode &&
                <div>
                    <input className={styles.statusEdit}
                           autoFocus
                           onBlur={deActivateEditMode}
                           value={status}
                           onChange={onStatusChange}/>
                </div>
            }

        </div>
    )
}



export default ProfileStatusWithHooks