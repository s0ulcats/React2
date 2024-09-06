import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import { NavLink } from 'react-router-dom'
import loginIMG from '../../../assets/images/unknownUser.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/842/306/567/cool-pictures-of-mountains-1920x1080-wallpaper-preview.jpg' alt="" />
            </div>
            <div className={classes.descriptionBlock}>
                {!profile.photos.large 
                ? <img className={classes.unLoginImg} alt="" src={loginIMG} />
                : <img alt="" src={profile.photos.large} />}
                <div className={classes.fullName}>
                    {profile.fullName}
                </div>
                {profile.aboutMe && (
                    <div className={classes.aboutMe}>
                        <div className={classes.aboutMeHead} >
                        About Me
                        </div>
                        {profile.aboutMe}
                    </div>
                )}
                <div className={classes.myContacts}>
                    {Object.values(profile.contacts).some(contact => contact) && (
                        <>
                            My Contacts
                            {profile.contacts.facebook && (
                                <NavLink to={profile.contacts.facebook}>facebook</NavLink>
                            )}
                            {profile.contacts.website && (
                                <NavLink to={profile.contacts.website}>website</NavLink>
                            )}
                            {profile.contacts.vk && (
                                <NavLink to={profile.contacts.vk}>vk</NavLink>
                            )}
                            {profile.contacts.twitter && (
                                <NavLink to={profile.contacts.twitter}>twitter</NavLink>
                            )}
                            {profile.contacts.instagram && (
                                <NavLink to={profile.contacts.instagram}>instagram</NavLink>
                            )}
                            {profile.contacts.youtube && (
                                <NavLink to={profile.contacts.youtube}>youtube</NavLink>
                            )}
                            {profile.contacts.github && (
                                <NavLink to={profile.contacts.github}>github</NavLink>
                            )}
                            {profile.contacts.mainLink && (
                                <NavLink to={profile.contacts.mainLink}>mainLink</NavLink>
                            )}
                        </>
                    )}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;