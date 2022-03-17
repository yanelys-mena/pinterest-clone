import './UserProfile.css'
import Header from './Header'
import BoardGrid from '../BoardGrid'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { load_boards_by_user } from '../../store/boards'
import Pins from './Pins'
import { Modal } from '../../context/Modal'
import CreateBoardForm from '../CreateBoardModal/CreateBoardForm'


export default function UserProfile() {
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))
    }, [user?.id, dispatch])


    const [page, setPage] = useState(1)

    return (
        <div id="userProfile">

            <Header user={user} />

            <div id="pageChanger">
                <div id="pageChangeBtn">
                    <div onClick={() => setPage(2)} className={page === 2 ? 'active_page' : 'inactive'}>Created</div>
                    <div onClick={() => setPage(1)} className={page === 1 ? 'active_page' : 'inactive'}>Saved</div>
                </div>
            </div>

            <div id="boardBtnDiv" onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-plus plus_board"></i>
            </div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateBoardForm user={user} setShowModal={setShowModal} />
                    </Modal>
                )
            }

            {page === 1 && <BoardGrid boards={boards} />}
            {page === 2 && <Pins />}

        </div>

    )
}