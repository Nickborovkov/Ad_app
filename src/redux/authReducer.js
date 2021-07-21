import {authAPI, profileAPI, securityAPI} from "../api/ajaxAPI";
import {stopSubmit} from "redux-form";


let GET_AUTH_USER_DATA = `samuraiNetwork/auth/GET_AUTH_USER_DATA`
let SET_CURRENT_USER = `samuraiNetwork/auth/SET_CURRENT_USER `
let GET_CAPTCHA_URL_SUCCESS = `samuraiNetwork/auth/GET_CAPTCHA_URL_SUCCESS `


let initialState = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: false,
    currentUser: undefined,
    captchaUrl: null,
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captcha
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

let getCaptchaUrlSuccess = (captcha) =>
    ( { type: GET_CAPTCHA_URL_SUCCESS, captcha } )


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

export let LoginNewUser = (email, password,rememberMe, captcha) => async dispatch => {
    let response = await authAPI.loginUser(email, password,rememberMe, captcha)
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData())
    }else {
        if(response.data.resultCode === 10){
            dispatch(getCapthaUrl())
        }
        let errorMeaning = response.data.messages.length > 0 ? response.data.messages[0] : `Unknown error`
        let action = stopSubmit(`loginForm`, {_error : errorMeaning})
        dispatch(action)
    }
    dispatch(getCaptchaUrlSuccess(null))
}

export let getCapthaUrl = () => async dispatch => {
    let response = await securityAPI.getCaptchaUrl()
    const captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}

export let logOutUser = () => async dispatch => {
    let response = await authAPI.logoutUser()
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData(null, null, null, false))
    }
}