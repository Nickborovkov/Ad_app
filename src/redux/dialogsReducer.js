const addMessage= `ADD-MESSAGE`;
const updateMessageText= `UPDATE-MESSAGE-TEXT`;
const clearMessage= `CLEAR-MESSAGE`;


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
                let newMessage = {
                    id: 11,
                    message: state.newMessageText
                }
                state.messages.push(newMessage);
                state.newMessageText = ``;
                return state;
        case updateMessageText:
                state.newMessageText = action.newMessageText;
                return state;
        case clearMessage:
                state.newMessageText = ``;
                return state;
        default:
            return state
    }
};
export default dialogsReducer


export const addMessageActionCreator = () => ({type: addMessage});
export const updateMessageActionCreator = (text) => ({type: updateMessageText, newMessageText: text});
export const clearMessageActionCreator = () => ({type: clearMessage});