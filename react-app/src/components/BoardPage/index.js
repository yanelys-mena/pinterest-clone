import './BoardPage.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { load_boards_by_user } from '../../store/boards'
import PinGrid from '../PinGrid'

export default function BoardPage() {
    const { boardId } = useParams()
    console.log()
    const user = useSelector(state => state?.session?.user)
    const board = useSelector(state => state?.boards[boardId])
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))


    }, [user?.id, dispatch])

    return (
        <div id='boardPage'>
            <PinGrid pins={board?.pins} />
        </div>
    )
}