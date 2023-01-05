import React from 'react'

import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image32,
  image33,
  image34,
  image35,
} from "../assets/gallery";

const Container = styled.div`
width: 30vw;
height: 60vh;

@media(max-width:70em){
    height: 60vh;
}

@media(max-width:64em){
    height: 50vh;
    width: 40vw;
}

@media(max-width:48em){
    height: 50vh;
    width: 50vw;
}

@media(max-width:30em){
    height: 45vh;
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

const Carousel1 = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 3000,
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
                <SwiperSlide><img src={image32} /></SwiperSlide>
                <SwiperSlide><img src={image2} /></SwiperSlide>
                <SwiperSlide><img src={image33} /></SwiperSlide>
                <SwiperSlide><img src={image35} /></SwiperSlide>
                <SwiperSlide><img src={image5} /></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel1