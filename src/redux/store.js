import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store