import './UserProfile.css'
import Header from './Header'
import BoardGrid from '../BoardGrid'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { load_boards_by_user } from '../../store/boards'
import { load_profile } from '../../store/profile_user'
import { boards_by_profile } from '../../store/profile_boards'
import Pins from './Pins'
import { Modal } from '../../context/Modal'
import CreateBoardForm from '../CreateBoardModal/CreateBoardForm'


export default function UserProfile() {
    let { profileId } = useParams()
    profileId = parseInt(profileId)
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))
    const profileBoards = useSelector(state => Object.values(state?.profileBoards))
    const pins = useSelector(state => state?.pins)
    const profile = useSelector(state => state?.profile?.user)
    const [page, setPage] = useState(1);
    const userPins = Object.values(pins).filter(pin => pin.user.id === profile?.id)
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);


    const isCurrentUser = profileId === user?.id
    console.log(isCurrentUser)

    useEffect(() => {
        dispatch(boards_by_profile(profileId))
        dispatch(load_boards_by_user(profileId?.id))
    }, [user?.id, dispatch, profileId])

    console.log(user?.id, profileId)
    useEffect(() => {
        dispatch(load_profile(profileId))
    }, [dispatch, profileId])

    return (
        <div id="userProfile">

            <Header user={user} profile={profile} />

            <div id="pageChanger">
                <div id="pageChangeBtn">
                    <div onClick={() => setPage(2)} className={page === 2 ? 'active_page' : 'inactive'}>Created</div>
                    <div onClick={() => setPage(1)} className={page === 1 ? 'active_page' : 'inactive'}>Saved</div>
                </div>
            </div>

            <div id="boardBtnDiv" >
                {isCurrentUser &&
                    <i onClick={() => setShowModal(true)} className="fa-solid fa-plus plus_board"></i>
                }
            </div>

            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateBoardForm user={isCurrentUser ? user : profile} setShowModal={setShowModal} />
                    </Modal>
                )
            }

            {page === 1 && <BoardGrid boards={isCurrentUser ? boards : profileBoards} profileId={profileId} />}
            {page === 2 && <Pins pins={userPins} boards={isCurrentUser ? boards : profileBoards} />}

        </div>

    )
}