import React from "react";
import Login from "./login";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginNewUser} from "../../redux/authReducer";

class LoginContainer extends React.Component{
    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {})
)(LoginContainer)