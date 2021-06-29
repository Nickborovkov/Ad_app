const ADD_MESSAGE = `ADD_MESSAGE`

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
                dialogs: [...state.dialogs, {id: 5, user: action.user, message: action.message}]
            }
        default:
            return state
    }
}

export default dialogsReducer

//AC
const addMessage = (user, message) => ( { type: ADD_MESSAGE, user, message } )

//THUNK
export const addNewMessage = (user, message) => {
    return(dispatch) => {
        dispatch(addMessage(user, message))
    }
}