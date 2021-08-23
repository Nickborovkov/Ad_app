import {setAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = `samuraiNetwork/app/INITIALIZED_SUCCESS`

export type initialStateType = {
    initialized: boolean,
}

const initialState:initialStateType = {
    initialized: false
}


const appReducer = (state:initialStateType = initialState, action:any):initialStateType => {
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

type initialACType = {
    type: typeof INITIALIZED_SUCCESS
}

const setInitializingSuccess = ():initialACType => ( { type: INITIALIZED_SUCCESS } )


//THUNK
export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(setAuthUserData())
        Promise.all([promise]).then(() => {
            dispatch(setInitializingSuccess())
        })
    }
}