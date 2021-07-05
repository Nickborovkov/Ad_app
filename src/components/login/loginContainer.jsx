import React from "react";
import Login from "./login";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginNewUser} from "../../redux/authReducer";

class LoginContainer extends React.Component{
    render() {
        return <Login {...this.props}
                      LoginNewUser = {this.props.LoginNewUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {LoginNewUser})
)(LoginContainer)