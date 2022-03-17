import './UserProfile.css'
import Header from './Header'
import BoardGrid from '../BoardGrid'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { load_boards_by_user } from '../../store/boards'
import Pins from './Pins'

export default function UserProfile() {
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))
    const dispatch = useDispatch();


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
            {page === 1 && <BoardGrid boards={boards} />}
            {page === 2 && <Pins />}

        </div>

    )
}