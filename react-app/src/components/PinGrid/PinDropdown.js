import { useState, useEffect } from 'react';

function PinDropdown({ boards, color }) {

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
        <div id="addPinDropdown" onClick={openMenu} style={color}>
            board   <i className="fa-solid fa-chevron-down" style={color}></i>

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
                            <div id="createBoardPlus"><i class="fa-solid fa-plus"></i></div>
                            <div>Create Board</div>

                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}

export default PinDropdown;
