const FOLLOW = `FOLLOW`
const UNFOLLOW = `UNFOLLOW`
const SET_USERS = `SET_USERS`
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
const TOGGLE_IS_LOADING = `TOGGLE_IS_LOADING`


let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 100,
    pageSize: 18,
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
                users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }        
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }        
        default:
            return state 
    }
};

export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers})
export const setToggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})

export default usersReducer;