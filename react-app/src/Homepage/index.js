import { useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { load_pins } from '../store/pins';
import { load_boards_by_user } from '../store/boards';
import PinGrid from '../components/PinGrid'
import './Homepage.css'

export default function Homepage() {
    const user = useSelector((state) => state.session?.user);
    const pins = useSelector(state => Object.values(state?.pins));
    const boards = useSelector(state => Object.values(state?.boards))

    const dispatch = useDispatch();


    pins.sort(function (a, b) {
        return 0.5 - Math.random();
    });


    useEffect(() => {
        dispatch(load_pins())
        dispatch(load_boards_by_user(user?.id))
    }, [dispatch, user]);



    return (
        <div id="Homepage">



            <PinGrid pins={pins} boards={boards} />
        </div>
    )
}