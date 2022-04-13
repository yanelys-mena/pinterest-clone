import './SearchResults.css'
import { useDispatch, useSelector, } from 'react-redux';
import { useParams } from 'react-router-dom';
import PinGrid from '../PinGrid';


export default function SearchResults() {
    const { searchInput } = useParams();

    const pins = useSelector(state => Object.values(state?.pins));


    const results = pins.filter((pin) => {
        return (
            pin?.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
            // pin.title.toLowerCase().indexOf(searchInput?.toLowerCase()) > -1
            // pin.description.toLowerCase().indexOf(searchInput?.toLowerCase())
        );
    });

    console.log('PINS', pins)
    console.log('results', results)
    console.log('searchinput', searchInput)


    return (
        <div id="search_results_page">

            <PinGrid pins={results} />
        </div>
    )
}