import React from "react";
import Users from "./users";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsers, setCurrentPage, subscribeUser, unSubscribeUser} from "../../redux/usersReducer";
import Preloader from "../../common/preloader/preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.pageSize, pageNumber)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users {...this.props}
                                                            subscribeUser = {this.props.subscribeUser}
                                                            unSubscribeUser = {this.props.unSubscribeUser}
                                                            onPageChanged = {this.onPageChanged}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,

    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, subscribeUser, unSubscribeUser}),
    //withAuthRedirect,
)(UsersContainer)