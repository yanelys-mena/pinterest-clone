import PinCard from './PinCard';
import './PinGrid.css';

export default function PinGrid({ pins }) {
    console.log('fromgrid', pins)
    return (
        <div id="pinGrid">
            {pins.map(pin => (
                <PinCard pin={pin} key={pin.id} />
            ))}

        </div>
    )
}