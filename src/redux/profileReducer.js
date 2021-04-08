import avatar from './../images/avatar.png'

const addPost = `ADD-POST`;
const updateNewPostText = `UPDATE-NEW-POST-TEXT`;
const deletePost = `DELETE-POST`;

let initialState = {
    profile: [
        {id: 1, title: 'Name', subtitle:` Jonatan Parker`},
        {id: 2, title: 'Age', subtitle:`29`},
        {id: 3, title: 'Date of Birth', subtitle:`Dec 26 1992`},
        {id: 4, title:'City', subtitle:`Bogisichborough`},
        {id: 5, title:'Education', subtitle:`MIT`},
    ],
    avatar: avatar,
    posts: [
        {id:1, message:`Hi`, likescount: 6},
        {id:2, message:`Konichiva`, likescount: 3},
        {id:3, message:`Good Evening`, likescount: 11},
        {id:4, message:`Fuck you all`, likescount: 1},
    ],
    newPostText: ``
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
        default:            
            return state
    }
};
export default profileReducer;

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPostText, newText: text});
export const deletePostActionCreator = () => ({type: deletePost});

