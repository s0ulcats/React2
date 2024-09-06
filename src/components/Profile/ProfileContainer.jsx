import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profileReducer";
import { useParams, } from 'react-router-dom';
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
    const { userId } = useParams();

    useEffect(() => {
        if(!userId) {
            userId = this.props.authorizedUserId
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [userId]);



    return (
        <div>
            <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileContainer)
