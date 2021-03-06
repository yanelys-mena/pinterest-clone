import { useState, useEffect } from 'react';
import LogoutButton from '../auth/LogoutButton';

function AccountMenu(user) {
    // const username = Object.values(user)[0].username
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
        <div id="menuHolder">
            <button id="accountMenu" onClick={openMenu}>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            {showMenu && (
                <ul id="dropdownList">
                    <LogoutButton />
                </ul >)

            }
        </div>
    )
}

export default AccountMenu;
