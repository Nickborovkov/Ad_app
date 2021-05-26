const FOLLOW = `FOLLOW`
const UNFOLLOW = `UNFOLLOW`
const SET_USERS = `SET_USERS`
const SET_TOTAL_USER_COUNT = `SET_TOTAL_USER_COUNT`
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
const TOGGLE_IS_LOADING = `TOGGLE_IS_LOADING`

let initialState = {
    users: [],
    pageSize: 18,
    currentPage: 1,
    totalUserCount: 0,
    isLoading: false,
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.loadingStatus
            }       
        default:
            return state 
    }
};

export default usersReducer;

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const setToggleIsLoading = (loadingStatus) => ({type: TOGGLE_IS_LOADING, loadingStatus})