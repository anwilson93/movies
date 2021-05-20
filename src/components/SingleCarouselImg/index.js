import './SingleCarouselImg.css';

function SingleCarouselImg ({result}){
    return (
        <>
            <img id='carousel-img' src={result.Poster} />
        </>
    );
}

export default SingleCarouselImg;