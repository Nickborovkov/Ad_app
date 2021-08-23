import {profileAPI} from "../api/ajaxAPI";
import {stopSubmit} from "redux-form";


let ADD_POST = `samuraiNetwork/profile/ADD_POST`
let DELETE_POST = `samuraiNetwork/profile/DELETE_POST`
let SET_PROFILE = `samuraiNetwork/profile/SET_PROFILE`
let GET_USER_STATUS = `samuraiNetwork/profile/GET_USER_STATUS`
let SAVE_PHOTOS_SUCCESS = `samuraiNetwork/profile/SAVE_PHOTOS_SUCCESS`

type profilePostType = {
    id: number,
    post: string,
    likesCount: number,
}

type contactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}

type photosType = {
    small: string | null,
    large: string | null,
}

type profileType = {
    aboutMe: string | null,
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: photosType
}

let initialState = {
    posts: [
        {id: 1, post: `DefaultPostText1`, likesCount: 13},
        {id: 2, post: `DefaultPostText2`, likesCount: 4},
        {id: 3, post: `DefaultPostText3`, likesCount: 5},
        {id: 4, post: `DefaultPostText4`, likesCount: 8},
    ] as Array<profilePostType>,
    profile: null as profileType | null,
    userStatus: ``,
}

type initialStateType = typeof initialState

let profileReducer = (state = initialState, action:any):initialStateType => {
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
                profile: {...state.profile, photos: action.photos} as profileType
            }
        default:
            return state
    }
}


export default profileReducer


//AC
type addPostACType = {
    type: typeof ADD_POST,
    postText: string
}
export let addPost = (postText: string):addPostACType =>
    ( { type: ADD_POST, postText } )


type deletePostACType = {
    type: typeof DELETE_POST,
    postId: number
}
export let deletePost = (postId: number):deletePostACType =>
    ( { type: DELETE_POST, postId } )


type setProfileACType = {
    type: typeof SET_PROFILE,
    profile: profileType
}
export let setProfile = (profile: profileType):setProfileACType =>
    ( { type: SET_PROFILE, profile } )


type getUserStatusACType = {
    type: typeof GET_USER_STATUS,
    userStatus: string
}
export let getUserStatus = (userStatus: string):getUserStatusACType =>
    ( { type: GET_USER_STATUS, userStatus } )


type savePhotoSuccessACType = {
    type: typeof SAVE_PHOTOS_SUCCESS,
    photos: photosType
}
export let savePhotoSuccess = (photos: any):savePhotoSuccessACType =>
    ( { type: SAVE_PHOTOS_SUCCESS, photos} )


//THUNK
export let setUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setProfile(response.data))
}

export let setUserStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(getUserStatus(response.data))
}

export let updateUserStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(getUserStatus(status))
    }
}

export let savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export let saveProfile = (profile:profileType) => async (dispatch:any, getState:any) => {
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