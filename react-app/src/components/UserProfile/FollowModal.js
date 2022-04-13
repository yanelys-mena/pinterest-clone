import './FollowModal.css';
import { Link } from 'react-router-dom';


const FollowModal = ({ profile, user, handleFollow, handleUnfollow, page, setPage }) => {

    return (
        <>

            <div id="follow_modal_page">
                <div id="followers_count">
                    {page === 1
                        ? (profile?.followers.length === 1 ? '1 Follower' : <> {`${profile?.followers.length} Followers`}  </>)
                        : <>{`${profile?.following.length} Following`}</>}
                </div>
                <div id="switch_follow_modal">
                    <button id={page === 1 ? 'active_page' : 'inactivePage'} className="switch_buttons" onClick={() => setPage(1)}>Followers</button>
                    <button id={page === 2 ? 'active_page' : 'inactivePage'} className="switch_buttons" onClick={() => setPage(2)}>Following</button>
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
                                                ? <div onClick={(e) => handleUnfollow(e, u?.id, profile?.id)}><button id="unfollow_button" >Following</button></div>
                                                : <div onClick={(e) => handleFollow(e, u?.id, profile?.id)}><button id="follow_button" >Follow</button></div>)}
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
                                                ? <div onClick={(e) => handleUnfollow(e, u?.id, profile?.id)}><button id="unfollow_button" >Following</button></div>
                                                : <div onClick={(e) => handleFollow(e, u?.id, profile?.id)}><button id="follow_button" >Follow</button></div>)}
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