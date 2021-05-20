import './OneMovieCard.css';

function OneMovieCard ({result, openModal}){
    return (
        <>
            <div className='individual-result-container' onClick={() => openModal(result.Title)}> 
                <img id='poster-img' src={result.Poster} alt={result.Title + ' Poster'}/>                   
                <h2 className='movie-title' >{result.Title}</h2>
            </div>
        </>
    );
};

export default OneMovieCard;