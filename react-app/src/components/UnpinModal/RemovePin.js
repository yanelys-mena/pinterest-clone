import { useSelector } from "react-redux";
import { useState } from "react";

export default function RemovePin({ pin }) {
    const boards = useSelector(state => Object.values(state?.boards))
    const pin_on_boards = boards?.filter(board =>
        pin?.boards.includes(board?.id)
    )
    const [isRemoved, setIsRemoved] = useState('')
    console.log(pin_on_boards)

    const removePin = (e) => {
        e.preventDefault();

    }

    return (
        <div id="removePin">
            <div id="removePin_title">Remove Pin</div>
            <div id="removePin_boards">
                {pin_on_boards.map(board => (
                    <div class="removePin_boardbtn">
                        <div class="close"></div>
                        <div class="removePin_name">
                            {board?.name}
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}