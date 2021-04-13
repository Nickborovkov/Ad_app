import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./users";


let mapSetStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}
let mapSetDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
    }
}


let UsersContainer = connect(mapSetStateToProps, mapSetDispatchToProps) (Users);

export default UsersContainer;