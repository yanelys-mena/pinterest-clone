import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PinDropdown({ boards, color }) {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            setShowMenu(false)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    return (
        <div id="addPinDropdown" style={color}>
            <div onClick={openMenu}> board <i className="fa-solid fa-chevron-down" style={color}></i></div>
            {showMenu && (
                <>
                    <div id="dropDownDiv">
                        <div id="dropDownDivHead" >
                            Save
                        </div>
                        <div>
                            <ul id="dropBoard">
                                {boards.map(board => <li>{board?.name}</li>)}
                            </ul >
                        </div>
                        <div id="createBoardDiv">
                            <div id="createBoardPlus"><i className="fa-solid fa-plus"></i></div>
                            <div><Link to="/create-board" style={{ textDecoration: 'none' }}>Create Board</Link></div>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}


export default PinDropdown;
