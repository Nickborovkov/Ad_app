const SET_AUTH_USER_DATA = `SET_AUTH_USER_DATA`
const SET_CURRENT_USER = `SET_CURRENT_USER`

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
                isAuthorised: true,
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state;
    }
}

export default authReducer

export const setAuthUserData = (userId, email, login) => ( {type: SET_AUTH_USER_DATA, data: {userId, email, login}} )
export const setCurrentUser = (currentUser) => ( {type: SET_CURRENT_USER, currentUser} )