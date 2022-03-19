import { useEffect, useState } from "react";


export default function LandingPageGrid() {
    return (
        <div id="landingGrid">
            {[...Array(8)].map((i, idx) =>
                <>

                    <div id="fadeIn">
                        <img style={{ height: '100px' }} src="https://www.creativelive.com/blog/wp-content/uploads/2018/08/Stocksy_txp3af6e914r0u000_Medium_896968-1.jpg"></img>
                    </div>
                </>
            )}

        </div>
    )
}