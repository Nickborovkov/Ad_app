import {setAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = `INITIALIZED_SUCCESS`

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer

//AC
const setInitializingSuccess = () => ( { type: INITIALIZED_SUCCESS } )

//THUNK

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthUserData())
        Promise.all([promise]).then(() => {
            dispatch(setInitializingSuccess())
        })


    }
}