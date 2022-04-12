import { update_profile } from '../../store/profile_user'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Header({ user, profile }) {
    console.log('USER', user)
    console.log('PROFILE', profile)

    const dispatch = useDispatch();
    const [isFollowing, setIsFollowing] = useState('');

    useEffect(() => {
        console.log('fff', profile.followers)
        setIsFollowing(profile?.followers.some(u => u?.id === user?.id))

    }, [profile])

    const getClickableLink = (link) => {
        return link.startsWith("http://") || link.startsWith("https://") ?
            link
            : `http://${link}`;
    }

    const handleFollow = (e) => {
        dispatch(update_profile(user?.id, profile?.id))
    }

    const handleUnfollow = (e) => {
        dispatch(update_profile(user?.id, profile?.id))
    }


    return (
        <div id="profileHeader">
            <div>
                {profile?.photo ?
                    <img src={profile?.photo} alt="profilePhoto" id="profilePhoto"></img>
                    : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
            </div>

            <div id="bigUsername">{profile?.username}</div>
            <div id="smallUsername">@{profile?.username.toLowerCase()}</div>
            <div id="profile_follows">
                <div>{`${profile.followers.length} followers`}</div>
                <div>·</div>
                <div>{`${profile.following.length} following`}</div>

            </div>
            <div id="githubLink">
                {profile?.website ? <a href={getClickableLink(profile?.website)} target="_blank" rel="noreferrer">{profile?.website}

                </a> : ''}
            </div>
            <div>· {profile?.bio ? profile?.bio : 'add a bio coming soon'} ·</div>
            {user?.id === profile?.id ? ''
                : (isFollowing ? <div><button id="unfollow_button" onClick={handleUnfollow}>Following</button></div> : <div><button id="follow_button" onClick={handleFollow}>Follow</button></div>)}

        </div >
    )
}