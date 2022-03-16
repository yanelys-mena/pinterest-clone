import { useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { load_pins } from '../store/pins';
import PinGrid from '../components/PinGrid'
import './Homepage.css'


export default function Homepage() {
    const user = useSelector((state) => state.session?.user);
    const pins = useSelector(state => Object.values(state?.pins));
    const dispatch = useDispatch();


    pins.sort(function (a, b) {
        return 0.5 - Math.random();
    });


    useEffect(() => {
        dispatch(load_pins())
    }, [dispatch]);


    return (
        <div id="Homepage">
            <PinGrid pins={pins} />
        </div>
    )
}