import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import CreateBoardForm from '../CreateBoardModal/CreateBoardForm'


function PinDropdown({ boards, color }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state?.session?.user)


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
                        <div id="createBoardDiv" onClick={() => setShowModal(true)}>

                            <div id="createBoardPlus"><i className="fa-solid fa-plus"></i></div>
                            <div>Create Board</div>
                        </div>
                    </div>
                </>
            )
            }
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateBoardForm user={user} setShowModal={setShowModal} />
                    </Modal>
                )
            }
        </div >
    )
}


export default PinDropdown;
