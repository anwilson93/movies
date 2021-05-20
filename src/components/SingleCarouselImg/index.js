import './SingleCarouselImg.css';

function SingleCarouselImg ({result, openModal}){
    return (
        <>
            <img id='carousel-img' src={result.Poster} alt={result.Title} onClick={() => openModal(result.Title)} />
        </>
    );
};

export default SingleCarouselImg;