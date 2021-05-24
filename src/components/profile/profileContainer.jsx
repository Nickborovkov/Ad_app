import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Preloader from '../../common/preloader/preloader'
import { setUserProfile } from '../../redux/profileReducer'
import Profile from './profile'

class ProfileContainer extends React.Component{
    componentDidMount(){

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9398
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render(){
        return <>
            {!this.props.profile ? <Preloader /> : < Profile profile = {this.props.profile}/>}
        </> 
         
        
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let profileComponentWithRouter = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile}) (profileComponentWithRouter)