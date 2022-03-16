export default function PinCard({ pin }) {

    return (
        <div id="pinCard">
            <div id="cardImg">
                <img src={pin?.image}></img>
            </div>
            <div id="cardTitle">
                {pin?.title}
            </div>
            <div id="pinHeader">
                <div id="pinLeftHeader">
                    <div>board</div>
                    <div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>

                </div>
                <div id="savePinButtonDiv">
                    <button id="savePinButton">Save</button>
                </div>

            </div>
        </div>
    )
}