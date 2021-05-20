import { useState } from 'react';

import SingleCarouselImg from '../SingleCarouselImg';
import './Carousel.css';

function Carousel ({carouselResults, openModal}){
    const [centerImg, setCenterImg] = useState(0);

    const toggleRight = () => {
        if (centerImg === carouselResults.length - 1){
            setCenterImg(0)
        } else {
            setCenterImg(centerImg + 1)
        }
    };

    const toggleLeft = () => {
        if (centerImg === 0){
            setCenterImg(carouselResults.length - 1)
        } else {
            setCenterImg(centerImg - 1)
        }
    };

    return (
        <div id='carousel-outer-div'>
            <div id='carousel-container'>
                {carouselResults && carouselResults.map((result, index) => {
                    return (
                        <div key={result.imdbID + index}>
                            {index === centerImg && (
                                <SingleCarouselImg result={result} openModal={openModal}/>
                            )}
                        </div>
                    )
                })}
            </div>
            <div id='carousel-buttons-div'>
                <button className='general-button carousel-button' onClick={toggleLeft}>Left</button>
                <button className='general-button carousel-button' onClick={toggleRight}>Right</button>
            </div>
        </div>
    );
};

export default Carousel;