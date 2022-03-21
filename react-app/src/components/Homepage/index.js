import { useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { load_boards_by_user } from '../../store/boards';
import PinGrid from '../PinGrid'
import './Homepage.css'

export default function Homepage() {
    const user = useSelector((state) => state.session?.user);
    const pins = useSelector(state => Object.values(state?.pins));
    const boards = useSelector(state => Object.values(state?.boards))

    const dispatch = useDispatch();

    // NOTE random sorting removed because of dispatch on drop down menu. This causes a rerender and the user loosees the pin they just added because of the random sorting of pins.
    // pins.sort(function (a, b) {
    //     return 0.5 - Math.random();
    // });


    useEffect(() => {
        dispatch(load_boards_by_user(user?.id))
    }, [dispatch, user]);



    return (
        <div id="Homepage">

            <PinGrid pins={pins} boards={boards} />


        </div>
    )
}