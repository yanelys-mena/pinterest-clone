import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

function AccountMenu(user) {
    const username = Object.values(user)[0].username
    console.log(username)
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    return (
        <div>


            <button id="accountMenu" onClick={openMenu}>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            {showMenu && (
                <ul id="dropdownList">
                    <li>Welcome, {username}!</li>
                    <li><Link to="/purchases" >Purchases and reviews</Link>  </li>
                    <LogoutButton />
                </ul >)

            }
        </div>
    )
}

export default AccountMenu;
