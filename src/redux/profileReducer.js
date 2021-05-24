const addPost = `ADD-POST`;
const updateNewPostText = `UPDATE-NEW-POST-TEXT`;
const deletePost = `DELETE-POST`;
const SET_USER_PROFILE = `SET_USER_PROFILE`

let initialState = {
    posts: [
        {id:1, message:`Hi`, likescount: 6},
        {id:2, message:`Konichiva`, likescount: 3},
        {id:3, message:`Good Evening`, likescount: 11},
        {id:4, message:`Fuck you all`, likescount: 1},
    ],
    newPostText: ``,
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likescount: 1}],
                newPostText: ``,
            }
        case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText,
            }
        case deletePost:
            return {
                ...state,
                newPostText: ``,
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:            
            return state
    }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export const deletePostActionCreator = () => ({type: deletePost});
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} )

