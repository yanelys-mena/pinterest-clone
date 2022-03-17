import './BoardGrid.css'
import BoardCard from './BoardCard';



export default function BoardGrid({ boards }) {

    return (
        <div id="boardGrid">
            {boards.map(board => <BoardCard board={board} />)}
        </div>
    )
}