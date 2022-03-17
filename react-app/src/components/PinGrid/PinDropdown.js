import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CreateBoardModal from '../CreateBoardModal';
import { Modal } from '../../context/Modal'
import BoardForm from '../CreateBoardModal/BoardForm'


function PinDropdown({ boards, color }) {

    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // const [style, setStyle] = useState({ display: 'flex' })

    // useEffect(() => {
    //     console.log('menu', showMenu)
    //     console.log('modal', showModal)
    //     if (showModal) {
    //         setStyle({ display: 'none' })
    //         // drop.style.display = 'none'
    //     }

    //     return () => setStyle({ display: 'flex' })
    // }, [showMenu, showModal])


    // const handleModal = (e) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     console.log('handleModalTarget', e.target)

    //     setShowMenu(false)
    //     setShowModal(true)
    // }

    const openMenu = () => {

        if (showMenu) return;
        setShowMenu(true);
        // setStyle({ display: 'flex' })
    };

    // const handleMenu = (e) => {
    //     console.log('handleMenuTarget', e.target)
    //     e.stopPropagation();
    //     e.preventDefault()
    //     setShowMenu(!showMenu)
    //     setShowModal(false)


    // }

    // const handleClose = (e) => {
    //     setShowModal(false)
    //     setStyle({ display: 'flex' })
    // }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            // e.stopPropagation()
            setShowMenu(false)
            // setShowModal(false)
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
                            <CreateBoardModal showModal={showModal} setShowModal={setShowModal} />

                            {
                                showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <BoardForm />
                                    </Modal>
                                )
                            }
                            {/* <div id="createBoardPlus"><i className="fa-solid fa-plus"></i></div> */}
                            {/* <div><Link to="/create-board" style={{ textDecoration: 'none' }}>Create Board</Link></div> */}
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}


export default PinDropdown;
