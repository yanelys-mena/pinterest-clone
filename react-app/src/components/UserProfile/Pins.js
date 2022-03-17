import PinGrid from "../PinGrid"
import './UserProfile.css'


export default function Pins({ pins, boards }) {
    return (
        <div id="createdPins">
            <PinGrid pins={pins} boards={boards} />
        </div>
    )
}