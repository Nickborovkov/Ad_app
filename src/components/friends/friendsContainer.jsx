import { connect } from 'react-redux';
import Friends from './friends';

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
     return {

     }
 };
         


let FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends)

export default FriendsContainer;