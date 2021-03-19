import classes from './dialogs.module.css'
import User from './user/user';
import Dialog from './dialog/dialog';
import Photo from './photo/photo';


import nick from './../../images/users/nick.jpg';
import mike from './../../images/users/mike.jpg';
import tom from './../../images/users/tom.jpg';
import andrew from './../../images/users/andrew.jpg';
import desmond from './../../images/users/desmond.jpg';
import bob from './../../images/users/bob.jpg';
import keeanu from './../../images/users/keeanu.jpg';
import chris from './../../images/users/chris.jpg';
import walter from './../../images/users/walter.jpg';
import loko from './../../images/users/loko.jpg';

const Dialogs = (props) => {



          let  photos =  [
                 {nick},
                 {mike},
                 {tom},
                 {andrew},
                 {desmond},
                 {bob},
                 {keeanu},
                 {chris},
                 {walter},
                 {loko},
             ];


    let dialogsElements = props.state.users.map((d)=><User id={d.id} users={d.name}/>);
    let messagesElements = props.state.messages.map((m)=><Dialog id={m.id} message={m.message}/>)



    return(
        <div className={classes.dialogs}>
            <h2 className={classes.dialogs__heading}>Dialogs</h2>
            <div className={classes.dialogs__inner}>
                <div className={classes.dialogs__holder}>
                    {/* <Photo avatar={nick}/>
                    <Photo avatar={mike}/>
                    <Photo avatar={tom}/>
                    <Photo avatar={andrew}/>
                    <Photo avatar={desmond}/>
                    <Photo avatar={bob}/>
                    <Photo avatar={keeanu}/>
                    <Photo avatar={chris}/>
                    <Photo avatar={walter}/>
                    <Photo avatar={loko}/> */}



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
        </div>
    );
};

export default Dialogs;