import {profileAPI} from "../api/ajaxAPI";

let ADD_POST = `ADD_POST`
let SET_PROFILE = `SET_PROFILE`
let GET_USER_STATUS = `GET_USER_STATUS`

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
                posts: [...state.posts, {id: 5, post: action.postText, likesCount: 111}]
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
        default:
            return state
    }
}

export default profileReducer

//AC
let addPost = (postText) => ( { type: ADD_POST, postText } )
let setProfile = (profile) => ( { type: SET_PROFILE, profile } )
let getUserStatus = (userStatus) => ( { type: GET_USER_STATUS, userStatus } )

//THUNK
export let addNewPost = (postText) => {
    return (dispatch) => {
        dispatch(addPost(postText))
    }
}

export let setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfile(response.data))
        })
    }
}

export let setUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(getUserStatus(response.data))
        })
    }
}

export let updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            dispatch(getUserStatus(status))
        })
    }
}