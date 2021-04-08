import { connect } from 'react-redux';
import Profileinfo from './profileinfo';

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        avatar: state.profilePage.avatar,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};

let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps) (Profileinfo)


export default ProfileInfoContainer;