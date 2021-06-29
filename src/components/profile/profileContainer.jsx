import React from "react";
import Profile from "./profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewPost, setUserProfile} from "../../redux/profileReducer";
import Preloader from "../../common/preloader/preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        this.props.setUserProfile(userId)
    }
    render() {
        return <>
            {!this.props.profile ? <Preloader /> : <Profile {...this.props}
                                                            addNewPost={this.props.addNewPost}/>}
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {addNewPost, setUserProfile}),
    withRouter,
)(ProfileContainer)