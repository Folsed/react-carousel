import React, { Children, useEffect, useRef, useState } from 'react';
import { Arrow } from './../../helpers/arrow';





const CarouselLogic = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false);
    const innerCarouselTrackRef = useRef(null);


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }

        if (newIndex === currentIndex) {
            return;
        }


        // You can add navigation panel ( nav - dots) Example code in carousel.style.css
        const direction = newIndex > currentIndex ? 1 : -1;
        const tabIndices = [];

        for (let i = currentIndex; i !== newIndex; i += direction) {
            tabIndices.push(i);
        }

        tabIndices.push(newIndex);

        const prevTab = document.getElementById(`.carousel_tab`);
        if (prevTab) {
            prevTab.classList.remove('active-tab');
        }

        tabIndices.forEach((index, i) => {
            setTimeout(() => {
                const tab = document.getElementById(`.carousel_tab:nth-child(${index + 1})`);
                if (tab) {
                    tab.classList.add('active-tab');
                }
                setCurrentIndex(index);
            }, i * 100);
        });

        if (innerCarouselTrackRef.current) {
            const newScrollLeft = innerCarouselTrackRef.current.clientWidth * newIndex;
            innerCarouselTrackRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                updateIndex(currentIndex + 1);
            }
        }, 8000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });


    return (
        <div className="welcome-carousel">
            <div className="carousel-wrapper">
                <div className="arrow-wrapper">
                    <Arrow
                        className={`arrow arrowLeft ${currentIndex === 0 ? 'hidden' : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex - 1)
                        }}
                    />
                </div>
                <div className='carousel-main-container'>
                    <div
                        className="inner-carousel-track"
                        ref={innerCarouselTrackRef}
                        style={{
                            gridTemplateColumns: `repeat(${Children.count(children)}, 100%)`
                        }}
                    >
                        {Children.map(children, (child, index) => {
                            return React.cloneElement(child, { currentIndex: currentIndex, index: index })
                        })}
                    </div>
                </div>
                <div className="arrow-wrapper">
                    <Arrow
                        className={`arrow arrowRight ${currentIndex === Children.count(children) - 1 ? 'hidden' : ''}`}
                        onClick={() => {
                            updateIndex(currentIndex + 1)
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default CarouselLogic