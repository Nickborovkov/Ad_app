import React from 'react'
import { connect } from "react-redux";
import { getUsers, setCurrentPage, setToggleIsLoading, subscribeUser, unSubscribeUser, } from "../../redux/usersReducer";
import Users from './users';
import Preloader from './../../common/preloader/preloader'
import { compose } from 'redux';


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render(){
        return <>
            {this.props.isLoading ? <Preloader /> : <Users {...this.props}/>}            
               </>                
    }
}

let mapSetStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        totalUserCount:state.usersPage.totalUserCount,
        isLoading: state.usersPage.isLoading,
    }
}


export default compose(
    connect(mapSetStateToProps, {setCurrentPage, setToggleIsLoading, getUsers,subscribeUser, unSubscribeUser}) 
)(UsersContainer)