import './DisplaySingleMovie.css';

function DisplaySingleMovie ({selected, closeModal}){
    return (
        <>
            <div className='modal-page'>
                <div className='container'>
                    <h3>
                        {selected.Title} 
                        <span id='year'>({selected.Year})</span>
                    </h3>
                    <div id='rating'> 
                        <span id='rating-word'>Rating: </span> 
                        <span id='movie-rating'>{selected.imdbRating}</span>/10
                    </div>
                    <div className='plot'>
                        <img src={selected.Poster} />
                        <div>{selected.Plot}</div>
                    </div>
                    <button className='close-modal-button' onClick={closeModal}>X</button>
                </div>
            </div>
        </>
    );
};

export default DisplaySingleMovie;