import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { usersAPI } from '../../api/api'
import Preloader from '../../common/preloader/preloader'
import { setUSerData } from '../../redux/profileReducer'
import Profile from './profile'

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }
        usersAPI.getProfile(userId).then(data => {
            this.props.setUSerData(data)
        })
    }
    render(){
        return <>
            {!this.props.profile ? <Preloader /> : <Profile profile = {this.props.profile}/>}
        </>
    }       
        
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let profileWithRouter = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUSerData}) (profileWithRouter)