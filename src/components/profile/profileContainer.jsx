import React from "react";
import Profile from "./profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addPost,
    deletePost,
    savePhoto, saveProfile, setUserProfile,
    setUserStatus,
    updateUserStatus
} from "../../redux/profileReducer";
import Preloader from "../../common/preloader/preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.PureComponent{
    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authUserId
            if(!userId){
                this.props.history.push('/users')
            }
        }
        this.props.setUserProfile(userId)
        this.props.setUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return <>
            {!this.props.profile ? <Preloader /> : <Profile {...this.props}
                                                            addNewPost={this.props.addPost}
                                                            updateUserStatus = {this.props.updateUserStatus}
                                                            authUserId = {this.props.authUserId}
                                                            deletePost = {this.props.deletePost}
                                                            isOwner = {!this.props.match.params.userId}
                                                            savePhoto={this.props.savePhoto}
                                                            saveProfile = {this.props.saveProfile}                                                            />}
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.userId,
    }
}

export default compose(
    connect(mapStateToProps, {addPost,
        deletePost,
        setUserProfile,
        setUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter,
)(ProfileContainer)