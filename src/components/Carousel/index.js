import './Carousel.css';
import SingleCarouselImg from '../SingleCarouselImg';
import { useState } from 'react';

function Carousel ({carouselResults}){
    const [centerImg, setCenterImg] = useState(0);

    const toggleRight = () => {
        if (centerImg === carouselResults.length - 1){
            setCenterImg(0)
        } else {
            setCenterImg(centerImg + 1)
        }
    }

    const toggleLeft = () => {
        if (centerImg === 0){
            setCenterImg(carouselResults.length - 1)
        } else {
            setCenterImg(centerImg - 1)
        }
    }

    console.log(centerImg, 'image index test')
    return (
        <>
            <button onClick={toggleLeft}>Left</button>
            <button onClick={toggleRight}>Right</button>
            <div id='carousel-container'>
                {carouselResults && carouselResults.map((result, index) => {
                    return (
                        <>
                            {index === centerImg && (
                                <SingleCarouselImg result={result} key={result.imdbID}/>
                            )}
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Carousel;