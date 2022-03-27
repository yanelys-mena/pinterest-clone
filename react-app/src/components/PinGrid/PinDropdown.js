import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal'
import CreateBoardForm from '../CreateBoardModal/CreateBoardForm'
import { add_pin_to_board } from '../../store/boards'
import { load_pins } from '../../store/pins';
import { load_boards_by_user } from '../../store/boards';


function PinDropdown({ boards, color, pin, setIsPinned, isPinned }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state?.session?.user)
    const dispatch = useDispatch();

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


    const addToBoard = async (e, boardId) => {
        const pinned = await dispatch(add_pin_to_board(pin?.id, parseInt(boardId))).then((d) => dispatch(load_pins()))
        dispatch(load_boards_by_user(user?.id))

        if (pinned) {
            setIsPinned('saved')
        }
    }

    return (
        <div id="addPinDropdown" style={color}>

            <div onClick={openMenu}> board <i className="fa-solid fa-chevron-down" style={color}></i></div>

            {showMenu && (
                <>
                    <div id="dropDownDiv"
                        onMouseLeave={e => {
                            setShowMenu(false);
                        }}>
                        <div id="dropDownDivHead" >
                            Save
                        </div>
                        <div>
                            <ul id="dropBoard">
                                {boards?.map(board =>
                                    <li
                                        onClick={(e) => addToBoard(e, board?.id)}
                                        key={board?.id}>
                                        {
                                            <>
                                                {board?.name}
                                                {pin?.boards.includes(board?.id) ? '  - saved' : ''}
                                            </>
                                        }
                                    </li>)}
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
