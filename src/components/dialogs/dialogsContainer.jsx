import React from "react";
import Dialogs from "./dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMessage, deleteMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

class DialogsContainer extends React.Component{
    render() {
        return <Dialogs {...this.props}
                        addNewMessage = {this.props.addMessage}
                        deleteMessage = {this.props.deleteMessage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, deleteMessage}),
    withAuthRedirect,
)(DialogsContainer)