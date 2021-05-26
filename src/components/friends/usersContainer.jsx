import React from 'react'
import { connect } from "react-redux";
import { usersAPI } from '../../api/api';
import { follow, setCurrentPage, setToggleIsLoading, setTotalUserCount, setUsers, unFollow } from "../../redux/usersReducer";
import Users from './users';
import Preloader from './../../common/preloader/preloader'


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.setToggleIsLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsLoading(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setToggleIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setToggleIsLoading(false)
            this.props.setUsers(data.items)
        })
    }
    render(){
        return <>
            {this.props.isLoading ? <Preloader /> : <Users follow = {this.props.follow}
                                unFollow = {this.props.unFollow}
                                users = {this.props.users}
                                pageSize = {this.props.pageSize}
                                currentPage = {this.props.currentPage}
                                totalUserCount = {this.props.totalUserCount}
                                onPageChanged = {this.onPageChanged}/>}
            
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



export default connect(mapSetStateToProps, {follow, setUsers, unFollow, setCurrentPage, setTotalUserCount, setToggleIsLoading}) (UsersContainer);