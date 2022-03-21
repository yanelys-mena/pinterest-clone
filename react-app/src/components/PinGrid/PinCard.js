import PinDropdown from "./PinDropdown";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { load_boards_by_user } from '../../store/boards';
import { useSelector, useDispatch } from 'react-redux';

export default function PinCard({ pin, boards }) {
    const [style, setStyle] = useState({ display: 'none' })
    const [imageStyle, setImageStyle] = useState({})
    const [color, setColor] = useState({ color: 'black' })
    const [isPinned, setIsPinned] = useState('')
    const user = useSelector(state => state?.session?.user)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(load_boards_by_user(user?.id))


    // }, []);

    console.log('PIN CARD', boards)
    console.log('PIN CARD', pin)



    return (
        <div
            id="pinCard"
            onMouseEnter={e => {
                setStyle({ display: 'flex' });
                setImageStyle({ filter: 'brightness(0.5)' })
                setColor({ color: 'white' })
            }}
            onMouseLeave={e => {
                setStyle({ display: 'none' });
                setImageStyle({})
                setColor({ color: 'black' })
            }}>
            <div id="cardImg" style={imageStyle}>
                <Link to={`/pins/${pin.id}`}>
                    <img id='pinImg' src={pin?.image} alt='pin'></img>

                </Link>

            </div>
            <div id="cardTitle">
                {pin?.title}
            </div>

            <div id="pinHeader">
                <div id="pinLeftHeader" style={style}>
                    <PinDropdown boards={boards} pin={pin} color={color} setIsPinned={setIsPinned} isPinned={isPinned} />
                </div>


                <div id="savePinButtonDiv" >
                    <button id="savePinButton" style={style}> {isPinned ? isPinned : 'Save'}</button>
                </div>
            </div>
        </div >
    )
}