import React from 'react'
import { connect } from 'react-redux'
import { usersAPI } from '../../api/api'
import { setAuthUserData, setCurrentUser } from '../../redux/auth'
import Header from './header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        usersAPI.authUser().then(data => {
            let {id, email, login} = data.data
            this.props.setAuthUserData(id, email, login)
            usersAPI.getProfile(data.data.id).then(data => {
                this.props.setCurrentUser(data)
            })
        })
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

export default connect(mapStateToProps, {setAuthUserData, setCurrentUser}) (HeaderContainer)