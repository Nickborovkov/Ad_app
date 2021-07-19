import {followAPI, usersAPI} from "../api/ajaxAPI";
import {reducerHelper} from "../utils/helpers/followReducerHelper";


let SET_USERS = `SET_USERS`
let FOLLOW = `FOLLOW`
let UNFOLLOW = `UNFOLLOW`
let SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
let SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
let TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`
let TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`


let initialState = {
    users: [],
    pageSize: 18,
    totalUsersCount: undefined,
    currentPage: 1,
    isFetching : false,
    followingProgress: [],
}


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                users: reducerHelper(state.users, action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: reducerHelper(state.users, action.userId, {followed: false})
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export default usersReducer


//AC
let setUsers = (users) =>
    ( { type: SET_USERS, users} )

let follow = (userId) =>
    ( { type: FOLLOW, userId} )

let unfollow = (userId) =>
    ( { type: UNFOLLOW, userId} )

let setCurrentPage = (currentPage) =>
    ( { type: SET_CURRENT_PAGE, currentPage} )

let setTotalUsersCount =
    (totalUsersCount) => ( { type: SET_TOTAL_USERS_COUNT, totalUsersCount} )

let toggleIsFetching =
    (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching} )

let togglFollowingProgress = (followingProgress, userId) =>
    ( { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingProgress, userId } )


//THUNK
 export let getUsers = (pageSize, currentPage) => async dispatch => {
    dispatch(toggleIsFetching(true))
     dispatch(setCurrentPage(currentPage))
     let response = await usersAPI.getUsers(pageSize, currentPage)
     dispatch(toggleIsFetching(false))
     dispatch(setUsers(response.data.items))
     dispatch(setTotalUsersCount(response.data.totalCount))
 }

 export let toggleFollow = async (dispatch, userId, apiType, dispatchType) => {
     dispatch(togglFollowingProgress(true, userId))
     let response = await apiType(userId)
     if(response.data.resultCode === 0){
         dispatch(dispatchType(userId))
     }
     dispatch(togglFollowingProgress(false, userId))
 }

 export let subscribeUser = (userId) => async dispatch => {
    await toggleFollow(dispatch, userId, followAPI.followUser, follow)
 }

export let unSubscribeUser = (userId) => async dispatch => {
    await toggleFollow(dispatch, userId, followAPI.unfollowUser, unfollow)
}