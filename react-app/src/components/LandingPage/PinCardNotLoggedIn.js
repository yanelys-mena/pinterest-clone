import { useState } from "react";
import { Link } from 'react-router-dom';


export default function PinCardNotLoggedIn({ pin, boards }) {

    return (
        <div
            id="pinCard" >
            <div id="cardImg" className="fadeIn">
                <img id='pinImg' src={pin?.image} alt='pin'></img>
            </div>
        </div >
    )
}