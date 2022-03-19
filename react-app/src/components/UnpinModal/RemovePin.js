import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { remove_pin_from_board } from '../../store/boards';
import { load_pins } from "../../store/pins";


export default function RemovePin({ pin }) {
    const boards = useSelector(state => Object.values(state?.boards))
    const pin_on_boards = boards?.filter(board => pin?.boards.includes(board?.id))
    const [isRemoved, setIsRemoved] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(load_pins(pin.id))
    }, [isRemoved, dispatch, pin.id])

    const removePin = (e, boardId) => {
        e.preventDefault();
        setIsRemoved(boardId);
        dispatch(remove_pin_from_board(pin.id, boardId))
    }

    return (
        <div id="removePin">
            <div id="removePin_title">Remove Pin</div>
            <div id="removePin_boards">
                {pin_on_boards.map(board => (
                    <div className="removePin_boardbtn" key={board?.id}>
                        <div className="close" onClick={(e) => removePin(e, board.id)}></div>
                        <div className="removePin_name">
                            {isRemoved === board.id ? 'removed' : board?.name}
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}