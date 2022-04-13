import './FollowModal.css';
import { Link } from 'react-router-dom';
import { update_profile, unfollow_user } from '../../store/profile_user'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


const FollowModal = ({ setShowModal, profile, user, handleFollow, handleUnfollow }) => {
    const isFollowed = (profileId) => user?.followers.find(u => u?.id === profileId)
    const [followed, setFollowing] = useState([]);

    const dispatch = useDispatch();


    // const checkingFollowed = (profileId) => {
    //     const followedArray = [];
    //     for (let i = 0; i < user?.following.length; i++) {
    //         if (user?.following[i].id === profileId) {
    //             followedArray.push(user?.following[i])
    //         }
    //     }
    //     setFollowing(followedArray)
    //     return followedArray
    // }
    // console.log('followedarray', followed)

    // const handleFollow = (e, profileId) => {
    //     dispatch(update_profile(user?.id, profileId))
    // };

    // const handleUnfollow = (e, profileId) => {
    //     dispatch(unfollow_user(user?.id, profileId))
    // };

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
                                : (user?.id_of_following?.includes(u?.id)
                                    ? <div><button id="unfollow_button" onClick={(e) => handleUnfollow(e, u?.id, profile?.id)}>Following</button></div>
                                    : <div><button id="follow_button" onClick={(e) => handleFollow(e, u?.id, profile?.id)}>Follow</button></div>)}
                            </div>
                        </div>)

                })}
            </div>
        </div>
    )
};

export default FollowModal;