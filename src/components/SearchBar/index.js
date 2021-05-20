import './SearchBar.css';

function SearchBar ({setSearchInput, handleSubmit}){
    return (
        <>
            <form onSubmit={handleSubmit} id='search-box-form'>
                <input
                id='search-box-input'
                placeholder='Search for a movie here!'
                onChange={setSearchInput}/>
            </form>
        </>
    );
};

export default SearchBar;