import './DisplayAllMovies.css';

function DisplayAllMovies ({results}){
    return (
        <>
            <div className='all-results-container'>
            {results && results.map(result => {
                return(
                <div className='individual-result-container'> 
                    <img src={result.Poster} alt='' />
                    <h3 className='movie-title' key={result.imdbID}>{result.Title}</h3>
                </div>
                )
            })}
            </div>
        </>
    );
}

export default DisplayAllMovies;