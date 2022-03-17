export default function Header({ user }) {
    return (
        <div id="profileHeader">
            <div>
                <img src={user?.photo} alt="profilePhoto" id="profilePhoto"></img>
            </div>

            <div id="bigUsername">{user?.username}</div>
            <div id="smallUsername">@{user?.username.toLowerCase()}</div>
            <div >{user?.link}</div>
            <div>{user?.bio}</div>

        </div >
    )
}