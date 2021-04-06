import {addMessageActionCreator} from '../../redux/dialogsReducer'
import {updateMessageActionCreator} from '../../redux/dialogsReducer'
import {clearMessageActionCreator} from '../../redux/dialogsReducer'
import store from '../../redux/reduxStore';
import Dialogs from './dialogs';


const DialogsContainer = (props) => {
   
    let state = props.store.getState();

    let updateMessageText = (text) =>{
        store.dispatch(updateMessageActionCreator(text));
    };
    let addMessage = () =>{
        store.dispatch(addMessageActionCreator());
    }
    let clearMessage = () =>{
        store.dispatch(clearMessageActionCreator());
    }
    


    return(
        <Dialogs addMessage={addMessage}
                 clearMessage={clearMessage}
                 updateMessageText={updateMessageText}
                 newMessageText={state.dialogsPage.newMessageText}
                 users={state.dialogsPage.users}
                 messages={state.dialogsPage.messages}
                 avatars={state.friendsPage.users}/>
    );
};

export default DialogsContainer;