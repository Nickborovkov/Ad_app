const ADD_MESSAGE = `samuraiNetwork/dialogs/ADD_MESSAGE`
const DELETE_MESSAGE = `samuraiNetwork/dialogs/DELETE_MESSAGE`


const  initialState = {
    dialogs: [
        {id:1, user: `User1`, message: `DefaultMessage1`},
        {id:2, user: `User2`, message: `DefaultMessage2`},
        {id:3, user: `User3`, message: `DefaultMessage3`},
        {id:4, user: `User4`, message: `DefaultMessage4`},
    ]
}


let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogs: [...state.dialogs, {id: state.dialogs.length + 1, user: action.user, message: action.message}]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.filter(d => d.id !== action.messageId)
            }
        default:
            return state
    }
}


export default dialogsReducer


//AC
export const addMessage = (user, message) =>
    ( { type: ADD_MESSAGE, user, message } )

export const deleteMessage = (messageId) =>
    ( { type: DELETE_MESSAGE, messageId } )