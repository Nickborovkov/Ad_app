const ADD_MESSAGE = `samuraiNetwork/dialogs/ADD_MESSAGE`
const DELETE_MESSAGE = `samuraiNetwork/dialogs/DELETE_MESSAGE`

type DialogType = {
    id: number,
    user: string,
    message: string,
}

const initialState = {
    dialogs: [
        {id:1, user: `User1`, message: `DefaultMessage1`},
        {id:2, user: `User2`, message: `DefaultMessage2`},
        {id:3, user: `User3`, message: `DefaultMessage3`},
        {id:4, user: `User4`, message: `DefaultMessage4`},
    ] as Array<DialogType>
}

export type initialStateType = typeof initialState

let dialogsReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogs: [...state.dialogs, {id: state.dialogs.length + 1,
                    user: action.payload.user,
                    message: action.payload.message}]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.filter(d => d.id !== action.payload)
            }
        default:
            return state
    }
}


export default dialogsReducer


//AC


type addMessageACType = {
    type: typeof ADD_MESSAGE,
    payload: {
        user: string,
        message: string
    }
}
export const addMessage = (user: string, message: string):addMessageACType =>
    ( { type: ADD_MESSAGE, payload: {user, message} } )

type deleteMessageACType = {
    type: typeof DELETE_MESSAGE,
    payload: {
        messageId: number
    }
}
export const deleteMessage = (messageId: number):deleteMessageACType =>
    ( { type: DELETE_MESSAGE, payload: {messageId} } )