import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setAuthUSer } from '../../redux/auth'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setAuthUSer()
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuthorised: state.auth.isAuthorised,
        currentUser: state.auth.currentUser,
    }
}

export default compose(
    connect(mapStateToProps, { setAuthUSer})
)(HeaderContainer)