import './BoardCard.css'
import { Link } from 'react-router-dom'

export default function BoardCard({ board }) {




    return (
        <div id="boardCard">
            <Link to={`/boards/${board?.id}`} style={{ textDecoration: 'none' }}>
                <div id="boardContainer">

                    {/* <div> */}
                    {board.pins.length > 0 ? <img src={board.pins[0].image} alt="board" id="boardimg"></img> : <img src="https://wallpaperaccess.com/full/1091550.jpg" alt="no_pins_in_board"></img>}
                    {/* </div> */}

                </div>
                <div id="boardName">{board.name}</div>
            </Link>
        </div>
    )
}