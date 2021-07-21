import {profileAPI} from "../api/ajaxAPI";
import {stopSubmit} from "redux-form";


let ADD_POST = `samuraiNetwork/profile/ADD_POST`
let DELETE_POST = `samuraiNetwork/profile/DELETE_POST`
let SET_PROFILE = `samuraiNetwork/profile/SET_PROFILE`
let GET_USER_STATUS = `samuraiNetwork/profile/GET_USER_STATUS`
let SAVE_PHOTOS_SUCCESS = `samuraiNetwork/profile/SAVE_PHOTOS_SUCCESS`


let initialState = {
    posts: [
        {id: 1, post: `DefaultPostText1`, likesCount: `13`},
        {id: 2, post: `DefaultPostText2`, likesCount: `4`},
        {id: 3, post: `DefaultPostText3`, likesCount: `5`},
        {id: 4, post: `DefaultPostText4`, likesCount: `8`},
    ],
    profile: null,
    userStatus: undefined,
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, post: action.postText, likesCount: 0}]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case GET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        case SAVE_PHOTOS_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}


export default profileReducer


//AC
export let addPost = (postText) =>
    ( { type: ADD_POST, postText } )

export let deletePost = (postId) =>
    ( { type: DELETE_POST, postId } )

let setProfile = (profile) =>
    ( { type: SET_PROFILE, profile } )

let getUserStatus = (userStatus) =>
    ( { type: GET_USER_STATUS, userStatus } )

let savePhotoSuccess = (photos) =>
    ( { type: SAVE_PHOTOS_SUCCESS, photos} )


//THUNK
export let setUserProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response.data))
}

export let setUserStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(getUserStatus(response.data))
}

export let updateUserStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(getUserStatus(status))
    }
}

export let savePhoto = (file) => async dispatch => {
    let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export let saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0){
        dispatch(setUserProfile(userId))
    }else {
        let errorMeaning = response.data.messages.length > 0
            ? response.data.messages[0]
            : `unknown error`
        let action = stopSubmit(`profileEditForm`, {_error: errorMeaning})
        dispatch(action)
        return Promise.reject()
    }
}