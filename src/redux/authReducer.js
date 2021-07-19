import {authAPI, profileAPI} from "../api/ajaxAPI";
import {stopSubmit} from "redux-form";


let GET_AUTH_USER_DATA = `samuraiNetwork/auth/GET_AUTH_USER_DATA`
let SET_CURRENT_USER = `samuraiNetwork/auth/SET_CURRENT_USER `


let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    currentUser: undefined,
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state
    }
}


export default authReducer


//AC
let getAuthUserData = (userId, email, login, isAuth) =>
    ( { type: GET_AUTH_USER_DATA, payload: {userId, email, login, isAuth} } )

let setCurrentUser = (currentUser) =>
    ( { type: SET_CURRENT_USER, currentUser } )


//THUNK
export let setAuthUserData = () => async dispatch => {
    let response = await authAPI.authUser()
    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data
        dispatch(getAuthUserData(id, email, login, true))
    }
    let secondResponse = await profileAPI.getProfile(response.data.data.id)
       dispatch(setCurrentUser(secondResponse.data))
}

export let LoginNewUser = (email, password,rememberMe) => async dispatch => {
    let response = await authAPI.loginUser(email, password,rememberMe)
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData())
    }else {
        let errorMeaning = response.data.messages.length > 0 ? response.data.messages[0] : `Unknown error`
        let action = stopSubmit(`loginForm`, {_error : errorMeaning})
        dispatch(action)
    }
}

export let logOutUser = () => async dispatch => {
    let response = await authAPI.logoutUser()
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData(null, null, null, false))
    }
}