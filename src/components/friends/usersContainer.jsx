import React from 'react'
import axios from "axios";
import { connect } from "react-redux";
import { follow, setCurrentPage, setToggleIsLoading, setTotalUsersCount, setUsers, unFollow } from "../../redux/usersReducer";
import Users from './users';
import Preloader from '../../common/preloader/preloader';


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.setToggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsLoading(false)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsLoading(false)
            this.props.setUsers(response.data.items)
        })
    }
    render(){
        return <>
                {this.props.isLoading ? <Preloader /> : <Users follow = {this.props.follow}
                                                               unFollow = {this.props.unFollow}
                                                               users = {this.props.users}
                                                               currentPage = {this.props.currentPage}
                                                               totalUsersCount = {this.props.totalUsersCount}
                                                               pageSize = {this.props.pageSize}
                                                               onPageChanged = {this.onPageChanged}/>}
                
                </>
        
    }
}

let mapSetStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
    }
}



export default connect(mapSetStateToProps, {follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, setToggleIsLoading}) (UsersContainer);