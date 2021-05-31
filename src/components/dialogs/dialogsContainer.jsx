import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {addMessageActionCreator} from '../../redux/dialogsReducer'
import {updateMessageActionCreator} from '../../redux/dialogsReducer'
import {clearMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './dialogs';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())} ,
        clearMessage: () => {dispatch(clearMessageActionCreator())} ,
        updateMessageText: (text) => {dispatch(updateMessageActionCreator(text))},
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);