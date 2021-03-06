import './UserProfile.css'
import Header from './Header'
import BoardGrid from '../BoardGrid'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { load_boards_by_user } from '../../store/boards'
import { load_profile } from '../../store/profile_user'
import { boards_by_profile } from '../../store/profile_boards'
import { load_all_users } from '../../store/all_users'

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
    const history = useHistory();

    const isCurrentUser = profileId === user?.id


    useEffect(() => {
        dispatch(boards_by_profile(profileId))
        dispatch(load_boards_by_user(profileId?.id))

    }, [user?.id, dispatch, profileId])

    useEffect(() => {
        dispatch(load_profile(profileId))
    }, [dispatch, profileId])


    useEffect(() => {
        dispatch(load_all_users()).then(data => {
            if (!data.includes(profileId)) {
                history.push('/not-found')
            }
        })

    }, [profileId, dispatch, history]);



    return (
        <>
            {profile?.username &&
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
                    {/* changed this code >> user passed in is current user */}
                    {
                        showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <CreateBoardForm user={user} setShowModal={setShowModal} />
                            </Modal>
                        )
                    }

                    {page === 1 && <BoardGrid boards={isCurrentUser ? boards : profileBoards} profileId={profileId} />}
                    {page === 2 && <Pins pins={userPins} boards={isCurrentUser ? boards : profileBoards} />}

                </div>
            }
        </>
    )
}