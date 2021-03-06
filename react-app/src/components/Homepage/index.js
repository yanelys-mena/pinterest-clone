import { useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { load_boards_by_user } from '../../store/boards';
import PinGrid from '../PinGrid'
import './Homepage.css'
import { load_pins } from '../../store/pins';


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
        dispatch(load_pins())
        dispatch(load_boards_by_user(user?.id))
        window.scrollTo(0, 0);

    }, [dispatch, user]);



    return (

        <div id="Homepage">
            {pins && boards && <PinGrid pins={pins} boards={boards} />}
        </div>
    )
}