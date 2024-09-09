import React, { useState } from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import loginIMG from '../../../assets/images/unknownUser.png';
import ProfileDataForm from "./ProfileDataForm";
import lookingAJob from '../../../assets/images/lookingForAjob.jpg'
import employed from '../../../assets/images/employed.jpg'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            {!profile.photos.large
                ? <img className={classes.unLoginImg} alt="" src={loginIMG} />
                : <img alt="" src={profile.photos.large} />}
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

            {editMode
                ? <ProfileDataForm
                    profile={profile}
                    handleReset={() => setEditMode(false)}
                    saveProfile={saveProfile}
                    setEditMode={setEditMode}
                />
                : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner} />}


            <div className={classes.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                ava + description
            </div>
        </div>
    );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div className={classes.job} >
                {profile.lookingForAJob
                    ? <img src={lookingAJob} alt="" />
                    : <img src={employed} alt="" />}
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "none"}
                </div>
            </div>
            <div className={classes.fullName}>
                {profile.fullName}
            </div>
            {
                profile.aboutMe && (
                    <div className={classes.aboutMe}>
                        <div className={classes.aboutMeHead} >
                            About Me
                        </div>
                        {profile.aboutMe}
                    </div>
                )
            }
            <div className={classes.myContacts}>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitles={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
