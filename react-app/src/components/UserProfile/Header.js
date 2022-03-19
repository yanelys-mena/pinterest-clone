
export default function Header({ user, profile }) {
    return (
        <div id="profileHeader">
            <div>
                <img src={profile?.photo} alt="profilePhoto" id="profilePhoto"></img>
            </div>

            <div id="bigUsername">{profile?.username}</div>
            <div id="smallUsername">@{profile?.username.toLowerCase()}</div>
            <div id="githubLink"><a href={`${profile?.website}`} target="_blank" rel="noreferrer">{profile?.website}</a></div>
            <div>· {profile?.bio}</div>
        </div >
    )
}