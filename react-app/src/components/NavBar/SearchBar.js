import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css'


function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchInput}`)
    };

    return (
        <form onSubmit={handleSubmit} id="searchInput">
            <input
                placeholder='Search'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                autoComplete='off'>
            </input>
        </form>
    )
}

export default SearchBar;