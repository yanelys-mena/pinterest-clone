import './SearchResults.css'
import { useSelector, } from 'react-redux';
import { useParams } from 'react-router-dom';
import PinGrid from '../PinGrid';


export default function SearchResults() {
    const { searchInput } = useParams();

    const pins = useSelector(state => Object.values(state?.pins));


    const results = pins.filter((pin) => {
        return (
            pin?.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
            pin?.description.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
        );
    });


    return (
        <div id="search_results_page">
            {results.length > 0 ? <PinGrid pins={results} /> : <div id="no_results">
                <div>
                    Your search does not match any results.
                    Try searching "eclectic" or "green".
                </div>
                <img src="https://i.gifer.com/AMCC.gif" alt="notFound"></img>


            </div>}

        </div>
    )
}