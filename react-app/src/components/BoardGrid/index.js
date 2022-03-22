import './BoardCard.css'
import './BoardGrid.css'
import BoardCard from './BoardCard';



export default function BoardGrid({ boards, profileId }) {

    return (
        <div id="board_page_grid">
            {boards?.length ? <>{boards.map(board => <BoardCard profileId={profileId} board={board} key={board?.id} />)}</> : 'No boards added. Create a new board to start adding pins!'}
        </div>
    )
}