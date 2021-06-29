import {followAPI, usersAPI} from "../API/ajaxAPI";

let SET_USERS = `SET_USERS`
let FOLLOW = `FOLLOW`
let UNFOLLOW = `UNFOLLOW`
let SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
let SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
let TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`

let initialState = {
    users: [],
    pageSize: 18,
    totalUsersCount: undefined,
    currentPage: 1,
    isFetching : false,
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
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
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
        default:
            return state
    }
}

export default usersReducer

//AC
let setUsers = (users) => ( { type: SET_USERS, users} )
let follow = (userId) => ( { type: FOLLOW, userId} )
let unfollow = (userId) => ( { type: UNFOLLOW, userId} )
export let setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage} )
let setTotalUsersCount = (totalUsersCount) => ( { type: SET_TOTAL_USERS_COUNT, totalUsersCount} )
let toggleIsFetching = (isFetching) => ( { type: TOGGLE_IS_FETCHING, isFetching} )

//THUNK
 export let getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageSize, currentPage).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
    }
 }

 export let subscribeUser = (userId) => {
    return (dispatch) => {
        followAPI.followUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(follow(userId))
            }
        })
    }
 }
 export let unSubscribeUser = (userId) => {
    return (dispatch) => {
        followAPI.unfollowUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollow(userId))
            }
        })
    }
 }