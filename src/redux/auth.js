import { authAPI, usersAPI } from "../api/api"

const SET_AUTH_USER_DATA = `SET_AUTH_USER_DATA`
const SET_CURRENT_USER = `SET_CURRENT_USER`

const SET_AUTH = `SET_AUTH`

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthorised: false,
    currentUser: null,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case SET_AUTH:
            return {
                ...state,
                isAuthorised: action.isAuthorised
            }
        default:
            return state;
    }
}

export default authReducer

//action creators

export const setAuthUserData = (userId, email, login) => ( {type: SET_AUTH_USER_DATA, data: {userId, email, login}} )
export const setCurrentUser = (currentUser) => ( {type: SET_CURRENT_USER, currentUser} )

export const authorisation = (isAuthorised) => ( {type: SET_AUTH, isAuthorised} )

//thunks

export const setAuthUSer = (props) => {
    return (dispatch) => {
        authAPI.authUser().then(data => {
            if(data.resultCode === 0){
                dispatch(authorisation(true))
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
                usersAPI.getProfile(data.data.id).then(data => {
                    dispatch(setCurrentUser(data))
                }) 
            }

        })
    }
}