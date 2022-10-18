import React from 'react'

import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import {image1, image16, image17, image2, image3, image4, image5, image7, image8, image9, image26, image27, image28, image29} from '../assets/gallery'

const Container = styled.div`
width: 30vw;
height: 70vh;

@media(max-width:70em){
    height: 65vh;
}

@media(max-width:64em){
    height: 55vh;
    width: 40vw;
}

@media(max-width:48em){
    height: 45vh;
    width: 50vw;
}

@media(max-width:30em){
    height: 35vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: gray;
    border-radius: 20px;
}
`

const Carousel2 = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                scrollbar={{
                    draggable: true,
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={image26} /></SwiperSlide>
                <SwiperSlide><img src={image27} /></SwiperSlide>
                <SwiperSlide><img src={image28} /></SwiperSlide>
                <SwiperSlide><img src={image29} /></SwiperSlide>
                {/* <SwiperSlide><img src={image9} /></SwiperSlide> */}
            </Swiper>
        </Container>
    )
}

export default Carousel2