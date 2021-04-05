const addPost = `ADD-POST`;
const updateNewPostText = `UPDATE-NEW-POST-TEXT`;
const deletePost = `DELETE-POST`;


const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost: let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 1
            };
            state.posts.push(newPost);
            state.newPostText = ``
            return state
        case updateNewPostText: 
                state.newPostText = action.newText;
                return state
        case deletePost:
                state.newPostText = ``;
                return state
        default:
            
            return state
    }
};
export default profileReducer;


export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export const deletePostActionCreator = () => ({type: deletePost});

