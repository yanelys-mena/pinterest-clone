import PinCard from './PinCard';
import './PinGrid.css';

export default function PinGrid({ pins, boards }) {

    return (
        <div id="pinGrid">
            {pins?.map(pin => (
                <PinCard pin={pin} boards={boards} key={pin.id} />
            ))}
        </div >
    )
}