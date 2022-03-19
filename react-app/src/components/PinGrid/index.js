import PinCard from './PinCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
import './PinGrid.css';
import { useSelector } from 'react-redux';
import PinCardNotLoggedIn from '../LandingPage/PinCardNotLoggedIn'

export default function PinGrid({ pins, boards }) {

    const user = useSelector((state) => state.session?.user);


    return (

        <>
            <div id="pinGrid">
                {user && <>
                    {pins?.map(pin => (
                        <PinCard pin={pin} boards={boards} key={pin.id} />
                    ))}
                </>
                }

                {!user && <>
                    {pins?.map(pin => (
                        <PinCardNotLoggedIn pin={pin} key={pin.id} />
                    ))}
                </>
                }

            </div >
        </>

    )
}