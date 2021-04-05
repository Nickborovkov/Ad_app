import classes from './dialogs.module.css'
import User from './user/user';
import Dialog from './dialog/dialog';
import Photo from './photo/photo';
import React from 'react';


import {addMessageActionCreator} from './../../redux/dialogsReducer'
import {updateMessageActionCreator} from './../../redux/dialogsReducer'
import {clearMessageActionCreator} from './../../redux/dialogsReducer'


const Dialogs = (props) => {

    let dialogsElements = props.state.users.map((d)=><User id={d.id} users={d.name}/>);
    let messagesElements = props.state.messages.map((m)=><Dialog id={m.id} message={m.message} />)
    let photosElements = props.photos.users.map((p)=><Photo avatar={p.avatar}/>)

    
    let updateMessageText =(event) =>{
        let text = event.target.value
        props.dispatch(updateMessageActionCreator(text));
    };
    let addMessage = () =>{
        props.dispatch(addMessageActionCreator());
    }
    let clearMessage = () =>{
        props.dispatch(clearMessageActionCreator());
    }
    


    return(
        <div className={classes.dialogs}>
            <h2 className={classes.dialogs__heading}>Dialogs</h2>
            <div className={classes.dialogs__inner}>
                <div className={classes.dialogs__holder}>
                    {photosElements}
                </div>
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
                      value={props.state.newMessageText}
                      onChange={updateMessageText}/>
            <div className={classes.temp__buttonHolder}>
                <button className={classes.temp__button}
                        onClick={addMessage}>Send</button>
                <button className={classes.temp__button}
                        onClick={clearMessage}>Clear</button>
            </div>

        </div>
    );
};

export default Dialogs;