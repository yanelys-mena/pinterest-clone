import './BoardPage.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PinGrid from '../PinGrid'
import { boards_by_profile } from '../../store/profile_boards'
import { load_boards_by_user } from '../../store/boards';

export default function BoardPage() {
    let { boardId, profileId } = useParams()
    profileId = parseInt(profileId)
    boardId = parseInt(boardId)

    const user = useSelector(state => state?.session?.user)
    const profileBoard = useSelector(state => state?.profileBoards[boardId])
    const dispatch = useDispatch();
    const board = useSelector(state => state?.boards[boardId])
    const isCurrentUser = profileId === user?.id

    useEffect(() => {
        dispatch(boards_by_profile(profileId))
        dispatch(load_boards_by_user(user?.id))

    }, [dispatch, profileId, user?.id])


    return (
        <div id='boardPage'>
            <div id="boardPageTitle">{isCurrentUser ? board?.name : profileBoard?.name}</div>

            <PinGrid pins={isCurrentUser ? board?.pins : profileBoard?.pins} />
            {/* {isCurrentUser ? (board?.pins.length > 0
                ? <PinGrid pins={board?.pins} />
                : 'No Pins assigned to this board')
                : (profileBoard?.pins.length > 0)
                    ? <PinGrid pins={profileBoard?.pins} />
                    : 'No Pins assigned to this board'} */}
        </div>
    )
}