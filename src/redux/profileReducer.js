import avatar from './../images/avatar.png'

const addPost = `ADD-POST`;
const updateNewPostText = `UPDATE-NEW-POST-TEXT`;
const deletePost = `DELETE-POST`;


let initialState = {
    profile: [
        {title: 'Name', subtitle:` Jonatan Parker`},
        {title: 'Age', subtitle:`29`},
        {title: 'Date of Birth', subtitle:`Dec 26 1992`},
        {title:'City', subtitle:`Bogisichborough`},
        {title:'Education', subtitle:`MIT`},
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

