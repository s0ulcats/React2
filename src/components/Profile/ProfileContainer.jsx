import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from 'axios';
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from 'react-router-dom';

const ProfileContainer = (props) => {
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile {...props} profile={props.profile} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);