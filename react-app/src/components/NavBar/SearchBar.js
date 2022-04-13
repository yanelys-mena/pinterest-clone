import { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css'


function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const history = useHistory();
    const inputField = useRef()
    const pins = useSelector(state => Object.values(state?.pins));
    const user = useSelector((state) => state.session?.user);
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

    }, [searchInput]);


    const handleSubmit = (e) => {
        e.preventDefault();
        inputField.current.style.display = 'none'
        setSearchInput('')
        history.push(`/search/${searchInput}`)
    };

    useEffect(() => {
        if (searchInput.length > 0) {
            inputField.current.style.display = 'flex';
        }
        // document.addEventListener('click', () => inputField.current.style.display = 'none');

        // return () => document.removeEventListener('click', (e) => setSearchInput(''));

    }, [searchInput])


    return (
        <form onSubmit={(e) => handleSubmit(e)} id="searchInput">
            <div id="searchIcon"><SearchIcon /> </div>
            <input
                onMouseLeave={e => {
                    inputField.current.style.display = 'none'
                }}
                onClick={e => inputField.current.style.display = 'flex'}
                placeholder='Search'
                value={searchInput}
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                autoComplete='on'>
            </input>
            <div id="suggestions" ref={inputField}>
                {suggestions?.map(pin => <Link to={`/pins/${pin?.id}`} target="_blank" key={pin?.id} className="suggested_pin"><SearchIcon id="search_pin" />  {pin?.title}</Link>)}
            </div>
        </form>
    )
}

export default SearchBar;