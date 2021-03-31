import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App state={state} 
                 addPost={addPost} 
                 updateNewPostText={updateNewPostText} 
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
  );
};