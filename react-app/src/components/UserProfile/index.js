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
    const pins = useSelector(state => state?.pins)
    const [page, setPage] = useState(1);

    const userPins = Object.values(pins).filter(pin => pin.user.id === user.id)

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))
    }, [user?.id, dispatch])



    return (
        <div id="userProfile">

            <Header user={user} />

            <div id="pageChanger">
                <div id="pageChangeBtn">
                    <div onClick={() => setPage(2)} className={page === 2 ? 'active_page' : 'inactive'}>Created</div>
                    <div onClick={() => setPage(1)} className={page === 1 ? 'active_page' : 'inactive'}>Saved</div>
                </div>
            </div>

            <div id="boardBtnDiv" >
                <i onClick={() => setShowModal(true)} className="fa-solid fa-plus plus_board"></i>
            </div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateBoardForm user={user} setShowModal={setShowModal} />
                    </Modal>
                )
            }

            {page === 1 && <BoardGrid boards={boards} />}
            {page === 2 && <Pins pins={userPins} boards={boards} />}

        </div>

    )
}