import React from "react";
import Header from "./header";
import {compose} from "redux";
import {connect} from "react-redux";
import {logOutUser, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthUserData()
    }
    render() {
        return <Header {...this.props}
                       logOutUser = {this.props.logOutUser}/>
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
    connect(mapStateToProps, {setAuthUserData, logOutUser})
)(HeaderContainer)