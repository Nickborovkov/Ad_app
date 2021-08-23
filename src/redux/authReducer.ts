import {authAPI, profileAPI, securityAPI} from "../api/ajaxAPI";
import {stopSubmit} from "redux-form";


let GET_AUTH_USER_DATA = `samuraiNetwork/auth/GET_AUTH_USER_DATA`
let SET_CURRENT_USER = `samuraiNetwork/auth/SET_CURRENT_USER `
let GET_CAPTCHA_URL_SUCCESS = `samuraiNetwork/auth/GET_CAPTCHA_URL_SUCCESS `



let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    currentUser: undefined,
    captchaUrl: null as string | null,
}

export type initialStateType = typeof initialState

let authReducer = (state:initialStateType = initialState, action:any):initialStateType => {
    switch (action.type) {
        case GET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload
            }
        default:
            return state
    }
}


export default authReducer


//AC


type AuthUserDataACTypePayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}
type AuthUserDataACType = {
    type: typeof GET_AUTH_USER_DATA,
    payload: AuthUserDataACTypePayloadType
}


type CurrentUserACType = {
    type: typeof SET_CURRENT_USER
    payload: { currentUser: any }
}


type CaptchaUrlSuccessACType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captcha: string | null}
}


let getAuthUserData = (userId: number | null, email:string | null, login:string | null, isAuth:boolean):AuthUserDataACType =>
    ( { type: GET_AUTH_USER_DATA, payload: {userId, email, login, isAuth} } )

let setCurrentUser = (currentUser:any):CurrentUserACType =>
    ( { type: SET_CURRENT_USER, payload: currentUser } )

let getCaptchaUrlSuccess = (captcha:string | null):CaptchaUrlSuccessACType =>
    ( { type: GET_CAPTCHA_URL_SUCCESS, payload: {captcha} } )


//THUNK
export let setAuthUserData = () => async (dispatch:any) => {
    let response = await authAPI.authUser()
    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data
        dispatch(getAuthUserData(id, email, login, true))
    }
    let secondResponse = await profileAPI.getProfile(response.data.data.id)
       dispatch(setCurrentUser(secondResponse.data))
}

export let LoginNewUser = (email: string, password: string,rememberMe: boolean, captcha: string) =>
    async (dispatch:any) => {
    let response = await authAPI.loginUser(email, password, rememberMe, captcha)
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

export let getCapthaUrl = () => async (dispatch:any) => {
    let response = await securityAPI.getCaptchaUrl()
    const captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}

export let logOutUser = () => async (dispatch:any) => {
    let response = await authAPI.logoutUser()
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData(null, null, null, false))
    }
}