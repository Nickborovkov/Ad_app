import classes from './dialogs.module.css'
import User from './user/user';
import Dialog from './dialog/dialog';
import Photo from './photo/photo';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.users.map((d)=><User key={d.id} id={d.id} users={d.name}/>);
    let messagesElements = props.messages.map((m)=><Dialog key={m.id} id={m.id} message={m.message} />)

    
    let onUpdateMessageText =(e) =>{
        let text = e.target.value
        props.updateMessageText(text);
    };
    let onAddMessage = () =>{
        props.addMessage();
    }
    let onClearMessage = () =>{
        props.clearMessage();
    }
    


    return(
        <div className={classes.dialogs}>
            <h2 className={classes.dialogs__heading}>Dialogs</h2>
            <div className={classes.dialogs__inner}>
                <div className={classes.dialogs__holder}>
                    <h3 className={classes.dialogs__title}>Users</h3>
                    {dialogsElements}
                </div>
                <div className={classes.dialogs__holder}>
                    <h3 className={classes.dialogs__title}>Chats</h3>
                    {messagesElements}
                </div>
            </div>
            <textarea className={classes.temp__textarea}
                      value={props.newMessageText}
                      onChange={onUpdateMessageText}/>
            <div className={classes.temp__buttonHolder}>
                <button className={classes.temp__button}
                        onClick={onAddMessage}>Send</button>
                <button className={classes.temp__button}
                        onClick={onClearMessage}>Clear</button>
            </div>

        </div>
    );
};

export default Dialogs;