


export default function PinCardNotLoggedIn({ pin, boards }) {

    return (
        <div
            id="pinCard" >
            <div id="cardImg" className="fadeIn">
                <img id='pinImg' src={pin?.image} alt=''></img>
            </div>
        </div >
    )
}