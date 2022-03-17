import { Link } from 'react-router-dom';

export default function Header({ user }) {
    return (
        <div id="profileHeader">
            <div>
                <img src={user?.photo} alt="profilePhoto" id="profilePhoto"></img>
            </div>

            <div id="bigUsername">{user?.username}</div>
            <div id="smallUsername">@{user?.username.toLowerCase()}</div>
            <div id="githubLink"><a href={`${user?.website}`} target="_blank">{user?.website}</a></div>
            <div>· {user?.bio}</div>
        </div >
    )
}