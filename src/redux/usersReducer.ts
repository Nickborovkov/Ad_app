import {followAPI, usersAPI} from "../api/ajaxAPI";
import {reducerHelper} from "../utils/helpers/followReducerHelper";


let SET_USERS = `SET_USERS`
let FOLLOW = `FOLLOW`
let UNFOLLOW = `UNFOLLOW`
let SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
let SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
let TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`
let TOGGLE_IS_FOLLOWING_PROGRESS = `TOGGLE_IS_FOLLOWING_PROGRESS`

type photosType = {
    small: string | null,
    large: string | null,
}

type itemType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    "photos": photosType,
    status: string | null,
    followed: boolean
}

type userType = {
    items: itemType
}

let initialState = {
    users: [] as Array<userType>,
    pageSize: 18,
    totalUsersCount: undefined,
    currentPage: 1,
    isFetching : false,
    followingProgress: [] as Array<number>,
}

type initialStateType = typeof initialState

let usersReducer = (state = initialState, action:any):initialStateType => {
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
type setUsersACType = {
    type: typeof SET_USERS,
    users: userType
}
let setUsers = (users: userType):setUsersACType =>
    ( { type: SET_USERS, users} )


type followACType = {
    type: typeof FOLLOW,
    userId: number
}
let follow = (userId: number):followACType =>
    ( { type: FOLLOW, userId} )


type unfollowACType = {
    type: typeof UNFOLLOW,
    userId: number
}
let unfollow = (userId:number):unfollowACType =>
    ( { type: UNFOLLOW, userId} )


type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
let setCurrentPage = (currentPage: number):setCurrentPageACType =>
    ( { type: SET_CURRENT_PAGE, currentPage} )


type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
let setTotalUsersCount = (totalUsersCount:number):setTotalUsersCountACType =>
    ( { type: SET_TOTAL_USERS_COUNT, totalUsersCount} )


type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
let toggleIsFetching = (isFetching: boolean):toggleIsFetchingACType =>
    ( { type: TOGGLE_IS_FETCHING, isFetching} )

type togglFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    followingProgress: boolean,
    userId: number
}
let togglFollowingProgress = (followingProgress:boolean, userId:number):togglFollowingProgressACType =>
    ( { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingProgress, userId } )


//THUNK
 export let getUsers = (pageSize: number, currentPage: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
     dispatch(setCurrentPage(currentPage))
     let response = await usersAPI.getUsers(pageSize, currentPage)
     dispatch(toggleIsFetching(false))
     dispatch(setUsers(response.data.items))
     dispatch(setTotalUsersCount(response.data.totalCount))
 }

 export let toggleFollow = async (dispatch:any, userId:number, apiType:any, dispatchType:any) => {
     dispatch(togglFollowingProgress(true, userId))
     let response = await apiType(userId)
     if(response.data.resultCode === 0){
         dispatch(dispatchType(userId))
     }
     dispatch(togglFollowingProgress(false, userId))
 }

 export let subscribeUser = (userId: number) => async (dispatch:any) => {
    await toggleFollow(dispatch, userId, followAPI.followUser, follow)
 }

export let unSubscribeUser = (userId: number) => async (dispatch: any) => {
    await toggleFollow(dispatch, userId, followAPI.unfollowUser, unfollow)
}