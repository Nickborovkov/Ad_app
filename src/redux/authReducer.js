import {authAPI, profileAPI} from "../api/ajaxAPI";

let GET_AUTH_USER_DATA = `GET_AUTH_USER_DATA`
let SET_CURRENT_USER = `SET_CURRENT_USER `

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
                ...action.data,
                isAuth: true,
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
let getAuthUserData = (userId, email, login) => ( { type: GET_AUTH_USER_DATA, data: {userId, email, login} } )
let setCurrentUser = (currentUser) => ( { type: SET_CURRENT_USER, currentUser } )

//THUNK
export let setAuthUserData = () => {
    return(dispatch) => {
        authAPI.authUser().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                dispatch(getAuthUserData(id, email, login))
            }
            profileAPI.getProfile(response.data.data.id).then(response => {
                dispatch(setCurrentUser(response.data))
            })
        })
    }
}