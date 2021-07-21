import React from "react";
import Users from "./users";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsers, subscribeUser, unSubscribeUser} from "../../redux/usersReducer";
import {
    //getAllUsers,
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber)
    }
    render() {
        return <Users {...this.props}
                      subscribeUser = {this.props.subscribeUser}
                      unSubscribeUser = {this.props.unSubscribeUser}
                      onPageChanged = {this.onPageChanged}/>}
    }

let mapStateToProps = (state) => {
    return {
       // users: getAllUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),

    }
}

export default compose(
    connect(mapStateToProps, {getUsers, subscribeUser, unSubscribeUser}),
)(UsersContainer)