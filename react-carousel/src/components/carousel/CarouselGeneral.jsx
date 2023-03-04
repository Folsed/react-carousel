import CarouselLogic from "./CarouselLogic"
import { CarouselSlide } from "./CarouselSlide"

import './carousel.style.css'




const CarouselGeneral = () => {
    return (
        <div>
            <CarouselLogic>
                <CarouselSlide title='Slide1'>Slide1</CarouselSlide>
                <CarouselSlide title='Slide2'>Slide2</CarouselSlide>
                <CarouselSlide title='Slide3'>Slide3</CarouselSlide>
                <CarouselSlide title='Slide1'>Slide1</CarouselSlide>
                <CarouselSlide title='Slide2'>Slide2</CarouselSlide>
                <CarouselSlide title='Slide3'>Slide3</CarouselSlide>
            </CarouselLogic>
        </div>
    )
}

export default CarouselGeneral