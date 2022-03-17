export default function BoardCard({ board }) {




    return (
        <div id="boardCard">

            <div id="boardImageDiv">
                {board.pins.length > 0 ? <img src={board.pins[0].image} alt="board"></img> : <img src="https://wallpaperaccess.com/full/1091550.jpg" alt="no_pins_in_board"></img>}
            </div>
            <div id="boardName">{board.name}</div>

        </div>
    )
}