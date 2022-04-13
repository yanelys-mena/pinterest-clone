import { update_profile, unfollow_user } from '../../store/profile_user'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal'
import FollowModal from './FollowModal';
import { authenticate } from '../../store/session';

export default function Header({ user, profile }) {
    const [showModal, setShowModal] = useState(false);
    const [isFollowing, setIsFollowing] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setIsFollowing(profile?.followers.some(u => u?.id === user?.id))
    }, [profile]);

    const getClickableLink = (link) => {
        return link.startsWith("http://") || link.startsWith("https://") ?
            link
            : `http://${link}`;
    };

    const handleFollow = (e, profileId, currProfile) => {
        dispatch(update_profile(user?.id, profileId, currProfile))
        dispatch(authenticate())

    };

    const handleUnfollow = (e, profileId, currProfile) => {
        dispatch(unfollow_user(user?.id, profileId, currProfile))
        dispatch(authenticate())

    };


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
                <div onClick={() => setShowModal(true)}>{`${profile.followers.length} followers`}</div>
                <div>·</div>
                <div>{`${profile.following.length} following`}</div>

            </div>
            <div id="githubLink">
                {profile?.website ? <a href={getClickableLink(profile?.website)} target="_blank" rel="noreferrer">{profile?.website}

                </a> : ''}
            </div>
            <div>· {profile?.bio ? profile?.bio : 'add a bio coming soon'} ·</div>
            {user?.id === profile?.id ? ''
                : (isFollowing ? <div><button id="unfollow_button" onClick={(e) => handleUnfollow(e, profile?.id, profile?.id)}>Following</button></div> : <div><button id="follow_button" onClick={(e) => handleFollow(e, profile?.id, profile?.id)}>Follow</button></div>)}
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <FollowModal setShowModal={setShowModal} profile={profile} user={user} isFollowing={isFollowing} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />
                    </Modal>
                )
            }
        </div >
    )
}