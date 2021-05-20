import OneMovieCard from '../OneMovieCard/index';
import './DisplayAllMovies.css';

function DisplayAllMovies ({results, openModal}){
    return (
        <>
            <div className='all-results-container'>
                {results && results.map(result => {
                    let resultWithPoster;
                    if (result.Poster){
                        resultWithPoster = result;
                    }
                    return <OneMovieCard resultWithPoster={resultWithPoster} key={resultWithPoster.imdbID} openModal={openModal}/>
                })}
            </div>
        </>
    );
};

export default DisplayAllMovies;