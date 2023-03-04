import { useEffect, useState } from "react";

export const CarouselSlide = ({ children, currentIndex, index }) => {
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        if (currentIndex !== index) {
            const timeoutId = setTimeout(() => {
                setIsHidden(true)
            }, 1000)
            return () => clearTimeout(timeoutId);
        } else {
            setIsHidden(false)
        }
    }, [currentIndex, index])

    const className = `carousel-content-container ${isHidden ? 'hidden-carousel-slide' : ''}`

    return (
        <div className={className}>
            <div className="carousel-content-wrapper">
                <div className="carousel-content-box">{children}</div>
            </div>
        </div>
    );
};