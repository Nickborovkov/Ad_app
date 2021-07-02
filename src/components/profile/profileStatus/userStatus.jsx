import React from "react";
import styles from './userStatus.module.css'
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onEnterPress = (event) => {
        if(event.key == `Enter`){
            this.deActivateEditMode()
        }
    }
    closeStatus = () => {
        this.setState({
            editMode: false,
            status: this.props.status,
        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        if(prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <p className={styles.statusHint}
                           onClick={this.activateEditMode}>Change status</p>
                        <p className={styles.status}>{this.props.status}</p>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <div className={styles.buttonsHolder}>
                            <FaCheck onClick={this.deActivateEditMode} className={styles.okButton}/>
                            <FaTimes onClick={this.closeStatus} className={styles.cancelButton}/>
                        </div>

                        <input onChange={this.onStatusChange}
                               className={styles.statusEdit}
                               autoFocus
                               onKeyDown={this.onEnterPress}
                               value={this.state.status}
                               maxLength={300}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus