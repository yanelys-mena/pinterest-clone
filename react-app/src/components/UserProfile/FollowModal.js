import './FollowModal.css';
import { Link } from 'react-router-dom';
import { update_profile, unfollow_user } from '../../store/profile_user'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


const FollowModal = ({ setShowModal, profile, user }) => {
    const isFollowed = (profileId) => user?.followers.find(u => u?.id === profileId)
    const [isFollowing, setIsFollowing] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {

        setIsFollowing(user?.following.find(u => u?.id === user?.id))
        const isFollowed = (profileId) => console.log(user?.followers.find(u => u?.id === profileId))

        console.log('....', user?.following.find(u => u?.id === 5))
        console.log('....', isFollowed)

    }, [profile]);

    const handleFollow = (e) => {
        dispatch(update_profile(user?.id, profile?.id))
    };

    const handleUnfollow = (e) => {
        dispatch(unfollow_user(user?.id, profile?.id))
    };

    return (
        <div id="follow_modal_page">
            <div id="followers_count">{`${profile?.followers.length} Followers`}</div>
            <div id="followers_div">
                {profile?.followers.map(u => {
                    return (
                        <div id="each_follower">
                            <div id="followers_left">
                                <Link target="_blank" to={`/profile/${u.id}`}>
                                    <img id="followers_photo" src={u?.photo}></img>
                                    {u?.username}
                                </Link>

                            </div>
                            <div id="follower_right"> {user?.id === u?.id ? ''
                                : (isFollowed(u?.id)
                                    ? <div><button id="unfollow_button" onClick={handleUnfollow}>Following</button></div>
                                    : <div><button id="follow_button" onClick={handleFollow}>Follow</button></div>)}
                            </div>
                        </div>)

                })}
            </div>
        </div>
    )
};

export default FollowModal;