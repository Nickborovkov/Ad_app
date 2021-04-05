import './index.css';
import store from './redux/reduxStore';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
  rerenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
