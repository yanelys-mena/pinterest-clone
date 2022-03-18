import './BoardGrid.css'
import BoardCard from './BoardCard';



export default function BoardGrid({ boards, profileId }) {

    return (
        <div id="boardGrid">
            {boards.map(board => <BoardCard profileId={profileId} board={board} key={board?.id} />)}
        </div>
    )
}