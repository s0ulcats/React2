import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import { NavLink } from 'react-router-dom'
import loginIMG from '../../../assets/images/unknownUser.png'
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/842/306/567/cool-pictures-of-mountains-1920x1080-wallpaper-preview.jpg' alt="" />
            </div>
            <div className={classes.descriptionBlock}>
                {!props.profile.photos.large 
                ? <img className={classes.unLoginImg} alt="" src={loginIMG} />
                : <img alt="" src={props.profile.photos.large} />}
                <div className={classes.fullName}>
                    {props.profile.fullName}
                </div>
                {props.profile.aboutMe && (
                    <div className={classes.aboutMe}>
                        <div className={classes.aboutMeHead} >
                        About Me
                        </div>
                        {props.profile.aboutMe}
                    </div>
                )}
                <div className={classes.myContacts}>
                    {Object.values(props.profile.contacts).some(contact => contact) && (
                        <>
                            My Contacts
                            {props.profile.contacts.facebook && (
                                <NavLink to={props.profile.contacts.facebook}>facebook</NavLink>
                            )}
                            {props.profile.contacts.website && (
                                <NavLink to={props.profile.contacts.website}>website</NavLink>
                            )}
                            {props.profile.contacts.vk && (
                                <NavLink to={props.profile.contacts.vk}>vk</NavLink>
                            )}
                            {props.profile.contacts.twitter && (
                                <NavLink to={props.profile.contacts.twitter}>twitter</NavLink>
                            )}
                            {props.profile.contacts.instagram && (
                                <NavLink to={props.profile.contacts.instagram}>instagram</NavLink>
                            )}
                            {props.profile.contacts.youtube && (
                                <NavLink to={props.profile.contacts.youtube}>youtube</NavLink>
                            )}
                            {props.profile.contacts.github && (
                                <NavLink to={props.profile.contacts.github}>github</NavLink>
                            )}
                            {props.profile.contacts.mainLink && (
                                <NavLink to={props.profile.contacts.mainLink}>mainLink</NavLink>
                            )}
                        </>
                    )}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;