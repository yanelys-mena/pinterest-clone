import PinCard from './PinCard';
import './PinGrid.css';
import { useSelector } from 'react-redux';

export default function PinGrid({ pins, boards }) {

    const user = useSelector((state) => state.session?.user);


    return (
        <div id="pinGrid">
            {pins?.map(pin => (
                <PinCard pin={pin} boards={boards} key={pin.id} />
            ))}
        </div >
    )
}