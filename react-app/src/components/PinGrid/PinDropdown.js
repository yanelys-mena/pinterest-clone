import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CreateBoardModal from '../CreateBoardModal';

function PinDropdown({ boards, color }) {

    const [showMenu, setShowMenu] = useState(false);
    const { lastPage } = useParams();
    const [showModal, setShowModal] = useState(false);


    console.log(lastPage)
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };


    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            e.stopPropagation()
            setShowModal(true)

            setShowMenu(false)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    return (
        <div id="addPinDropdown" onClick={openMenu} style={color}>
            board <i className="fa-solid fa-chevron-down" style={color}></i>

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
                            {/* <CreateBoardModal setShowModal={setShowModal} showModal={showModal} /> */}
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
