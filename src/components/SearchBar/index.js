import './SearchBar.css';

function SearchBar ({setSearchInput, handleSubmit, errors}){
    return (
        <>
            <form onSubmit={handleSubmit} id='search-box-form'>
                <input
                id='search-box-input'
                placeholder='Search for a movie here!'
                onChange={setSearchInput}/>
            </form>
            <div id='errors'>
                {errors && errors.map((error, idx) => <div key={idx}>{error}</div>)}
            </div>
        </>
    );
};

export default SearchBar;