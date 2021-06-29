import React from "react";
import Dialogs from "./dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewMessage} from "../../redux/dialogsReducer";

class DialogsContainer extends React.Component{
    render() {
        return <Dialogs {...this.props}
                        addNewMessage = {this.props.addNewMessage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage})
)(DialogsContainer)