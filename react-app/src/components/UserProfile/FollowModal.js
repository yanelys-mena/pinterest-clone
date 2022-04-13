import './FollowModal.css';
import { Link } from 'react-router-dom';
import { update_profile, unfollow_user } from '../../store/profile_user'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


const FollowModal = ({ setShowModal, profile, user, handleFollow, handleUnfollow }) => {
    const [page, setPage] = useState(1);
    // const [activePage, setActivePage] = useState(`active_page_${page}`)
    const [activePage, setActivePage] = useState(`active_page`)
    // useEffect(() => {
    //     setActivePage(`active_page_${page}`)
    //     console.log(page)
    // }, [page])

    return (
        <>

            <div id="follow_modal_page">
                <div id="followers_count">
                    {page === 1
                        ? <> {`${profile?.followers.length} Followers`}  </>
                        : <>{`${profile?.following.length} Following`}</>}


                </div>
                <div id="switch_follow_modal">
                    <button id={page === 1 ? activePage : 'inactivePage'} className="switch_buttons" onClick={() => setPage(1)}>Followers</button>
                    <button id={page === 2 ? activePage : 'inactivePage'} className="switch_buttons" onClick={() => setPage(2)}>Following</button>
                </div>
                <div id="followers_div">
                    {page === 1 &&
                        <>

                            {profile?.followers.map(u => {
                                return (
                                    <div id="each_follower" key={u?.id}>
                                        <div id="followers_left">
                                            <Link target="_blank" to={`/profile/${u.id}`}>
                                                {u?.photo ?
                                                    <img id="followers_photo" src={u?.photo} alt="profile_photo"></img>
                                                    : <i className="fas fa-user-circle follower_faicon"></i>}
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
                        </>
                    }

                    {page === 2 &&
                        <>
                            {profile?.following.map(u => {
                                return (
                                    <div id="each_follower" key={u?.id}>
                                        <div id="followers_left">
                                            <Link target="_blank" to={`/profile/${u.id}`}>
                                                {u?.photo ?
                                                    <img id="followers_photo" src={u?.photo} alt="profile_photo"></img>
                                                    : <i className="fas fa-user-circle follower_faicon"></i>}
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


                        </>}
                </div>
            </div>
        </>
    )
};

export default FollowModal;