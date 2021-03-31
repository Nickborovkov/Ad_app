import react from 'react';
import classes from './../dialogs.module.css'

const Dialog = (props) => {

    let newMessageElement = react.createRef();

    let messageSend = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    };

    return(
        <div className={classes.dialogs__message}>
            <textarea ref={newMessageElement} onChange={onMessageChange}></textarea>
            <button onClick={messageSend}>send</button>
            <p className={classes.dialogs__messageItem}>{props.message}</p>
        </div>
    );
};

export default Dialog;