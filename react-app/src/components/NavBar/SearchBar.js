// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './SearchBar.css'


function SearchBar() {
    // const [searchInput, setSearchInput] = useState('');
    // const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     history.push(`/search/${searchInput}`)
    // };

    return (
        <form onSubmit={(e) => e.preventDefault()} id="searchInput">
            <input
                placeholder='Search coming soon'
                // value={searchInput}
                // onChange={(e) => setSearchInput(e.target.value)}
                autoComplete='off'>
            </input>
        </form>
    )
}

export default SearchBar;