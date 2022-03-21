import PinCard from './PinCard';
import './PinGrid.css';
import { load_boards_by_user } from '../../store/boards';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function PinGrid({ pins }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.session?.user)
    const boards = useSelector(state => Object.values(state?.boards))


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))

    }, [dispatch])


    return (
        <div id="pinGrid">
            {pins?.map(pin => (
                <PinCard pin={pin} boards={boards} key={pin.id} />
            ))}
        </div >
    )
}