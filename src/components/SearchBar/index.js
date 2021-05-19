import { useState } from "react";
import './SearchBar.css';
function SearchBar (){

    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchInput)
    };
    return (
        <>
            <form onSubmit={handleSearch} id='search-box-form'>
                <input
                id='search-box-input'
                placeholder='Search for a movie here!'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}/>
            </form>
        </>
    );
}

export default SearchBar