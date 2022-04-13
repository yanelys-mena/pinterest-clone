import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { load_pins } from '../../store/pins';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css'


function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();
    const user = useSelector((state) => state.session?.user);
    const pins = useSelector(state => Object.values(state?.pins));
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchInput.length > 0) {
            const results = pins.filter((pin) => {
                return (
                    pin?.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
                    pin?.description.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
                );
            });
            setSuggestions(results)
        }

    }, [dispatch, searchInput]);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchInput}`)
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} id="searchInput">
            <div id="searchIcon"><SearchIcon /> </div>
            <input
                placeholder='      Search'
                value={searchInput}
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                autoComplete='on'>
            </input>
            <div id="suggestions">
                {suggestions?.map(pin => <Link to={`/pins/${pin?.id}`} target="_blank" key={pin?.id}>{pin?.title}</Link>)}
            </div>
        </form>
    )
}

export default SearchBar;