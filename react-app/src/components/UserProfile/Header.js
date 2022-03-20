
export default function Header({ user, profile }) {
    return (
        <div id="profileHeader">
            <div>
                {user?.photo ?
                    <img src={profile?.photo} alt="profilePhoto" id="profilePhoto"></img>
                    : <i style={{ fontSize: '50px' }} className="fas fa-user-circle bigger-profile"></i>}
            </div>

            <div id="bigUsername">{profile?.username}</div>
            <div id="smallUsername">@{profile?.username.toLowerCase()}</div>
            <div id="githubLink"><a href={`${profile?.website}`} target="_blank" rel="noreferrer">{profile?.website}</a></div>
            <div>· {profile?.bio} ·</div>
        </div >
    )
}