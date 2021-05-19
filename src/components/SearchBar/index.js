import './SearchBar.css';


function SearchBar ({setSearchInput, search}){
    return (
        <>
            <form onSubmit={search} id='search-box-form'>
                <input
                id='search-box-input'
                placeholder='Search for a movie here!'
                onChange={setSearchInput}/>
            </form>
        </>
    );
}

export default SearchBar