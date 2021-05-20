import OneMovieCard from '../OneMovieCard/index';
import './DisplayAllMovies.css';

function DisplayAllMovies ({results, openModal}){
    return (
        <>
            <div className='all-results-container'>
                {results && results.map(result => {
                    return <OneMovieCard result={result} key={result.imdbID} openModal={openModal}/>
                })}
            </div>
        </>
    );
};

export default DisplayAllMovies;