import './OneMovieCard.css';

function OneMovieCard ({resultWithPoster, openModal}){
    return (
        <>
            <div className='individual-result-container' onClick={() => openModal(resultWithPoster.Title)}> 
                <img id='poster-img' src={resultWithPoster.Poster} alt={resultWithPoster.Title + ' Poster'}/>                   
                <h2 className='movie-title' >{resultWithPoster.Title}</h2>
            </div>
        </>
    );
};

export default OneMovieCard;