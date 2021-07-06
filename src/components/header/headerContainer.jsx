import React from "react";
import Header from "./header";
import {compose} from "redux";
import {connect} from "react-redux";
import {logOutUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    state = {
        hoverStatus: false
    }
    activateHover = () => {
        this.setState({
            hoverStatus: true
        })
    }
    deActivateHover = () => {
        this.setState({
            hoverStatus: false
        })
    }
    render() {
        return <Header {...this.props}
                       logOutUser = {this.props.logOutUser}
                       activateHover = {this.activateHover}
                       deActivateHover = {this.deActivateHover}
                       hoverStatus = {this.state.hoverStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        currentUser: state.auth.currentUser,
    }
}

export default compose(
    connect(mapStateToProps, {logOutUser})
)(HeaderContainer)