import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { useParams, useNavigate } from 'react-router-dom';
import { compose } from "redux";

const ProfileContainer = (props) => {
    const { userId: paramUserId } = useParams();
    const navigate = useNavigate();

    const refreshProfile = () => {
        let userId = paramUserId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                navigate('/login');
            }
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
    };

    useEffect(() => {
        refreshProfile();
    }, [paramUserId, props.authorizedUserId]);

    return (
        <div>
            <Profile {...props} 
            isOwner={!props.userId}
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId, // Убедитесь, что authorizedUserId правильно передается
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile })
)(ProfileContainer);
