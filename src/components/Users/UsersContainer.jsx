import React from "react";
import { connect } from "react-redux";
import Users from "./Users"
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers } from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsers } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize}= this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
        connect(mapStateToProps,
            {
                follow,
                unfollow,
                setCurrentPage,
                toggleFollowingProgress,
                requestUsers,
            })
    )(UsersContainer)