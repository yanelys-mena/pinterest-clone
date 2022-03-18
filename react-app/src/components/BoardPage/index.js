import './BoardPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PinGrid from '../PinGrid'
import { boards_by_profile } from '../../store/profile_boards'

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
        // dispatch(load_profile(profileId))
        dispatch(boards_by_profile(parseInt(profileId)))
    }, [dispatch, profileId])




    return (
        <div id='boardPage'>
            <div id="boardPageTitle">{isCurrentUser ? board?.name : profileBoard?.name}</div>
            <PinGrid pins={isCurrentUser ? board?.pins : profileBoard?.pins} />
        </div>
    )
}