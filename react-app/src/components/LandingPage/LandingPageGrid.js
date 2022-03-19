import { useEffect, useState } from "react";
import './LandingPage.css'


export default function LandingPageGrid({ pins }) {
    return (
        <div id="landingGrid">
            {pins.map((pin) =>
                <>
                    <div id="fadeIn" className="landing_card" key={pin?.id}>
                        <img id="landing_img" src={pin?.image}></img>
                    </div>
                </>
            )}

        </div>
    )
}