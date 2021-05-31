import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import Preloader from '../../common/preloader/preloader'
import { setUserProfile } from '../../redux/profileReducer'
import Profile from './profile'

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        this.props.setUserProfile(userId)
    }
    render(){
        return <>
            {!this.props.profile ? <Preloader /> : <Profile {...this.props}/>}
        </>
    }   
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect (mapStateToProps, {setUserProfile}),
    withRouter,
) (ProfileContainer)