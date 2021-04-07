import {addMessageActionCreator} from '../../redux/dialogsReducer'
import {updateMessageActionCreator} from '../../redux/dialogsReducer'
import {clearMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './dialogs';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        avatars: state.friendsPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())} ,
        clearMessage: () => {dispatch(clearMessageActionCreator())} ,
        updateMessageText: (text) => {dispatch(updateMessageActionCreator(text))},
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)


export default DialogsContainer;