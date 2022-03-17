import PinDropdown from "./PinDropdown";
import { useState } from "react";


export default function PinCard({ pin, boards }) {
    const [style, setStyle] = useState({ display: 'none' })
    const [imageStyle, setImageStyle] = useState({})
    const [color, setColor] = useState({ color: 'black' })
    // 
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
                <img src={pin?.image}></img>
            </div>
            <div id="cardTitle">
                {pin?.title}
            </div>
            <div id="pinHeader">
                <div id="pinLeftHeader">
                    <PinDropdown boards={boards} color={color} />
                </div>


                <div id="savePinButtonDiv" >
                    <button id="savePinButton" style={style}>Save</button>
                </div>
            </div>
        </div >
    )
}