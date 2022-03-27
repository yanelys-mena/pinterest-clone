import './BoardCard.css'
import './BoardGrid.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../context/Modal'
import CreateBoardForm from '../CreateBoardModal/CreateBoardForm'

export default function BoardCard({ board, profileId }) {
    const [style, setStyle] = useState({ display: 'none' })
    const [showModal, setShowModal] = useState(false)
    const user = useSelector(state => state?.session?.user)


    return (
        <div id="boardCard">



            <div
                id="boardContainer"
                onMouseEnter={e => {
                    setStyle({ display: 'inline' });
                }}
                onMouseLeave={e => {
                    setStyle({ display: 'none' });
                }}>
                <Link to={`/profile/${profileId}/boards/${board?.id}`} style={{ textDecoration: 'none' }}>
                    {board.pins.length > 0 ? <img src={board.pins[0].image} alt="board" id="boardimg"></img> : <img src="https://wallpaperaccess.com/full/1091550.jpg" alt="no_pins_in_board"></img>}
                </Link>
                {user?.id === profileId &&
                    <div style={style} onClick={() => setShowModal(true)}>
                        <i className="fa-solid fa-pen" id="editBoardBtn"  ></i>
                    </div>
                }


            </div>

            <div id="boardName">{board.name.length > 25 ? `${board.name.substring(0, 25)}...` : board.name}</div>


            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateBoardForm user={user} setShowModal={setShowModal} board={board} />
                    </Modal>
                )
            }
        </div>
    )
}