import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';



const ExtraTwo = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold text-center mt-6 mb-6">Upcoming Collections</h2>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/C2vyVM0/0cc6dee24881a8a62363a750b9f680d2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/c821h60/art-craft-drawing-classes-midnapore-glass-painting-classes-1gqooafrsr.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/dLdsjnw/images-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/n3wsL4W/images-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/h1yL7kK/images.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/M7n9PdZ/Adobe-Stock-339040761.webp" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/myrHfg5/images-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/C2vyVM0/0cc6dee24881a8a62363a750b9f680d2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/c821h60/art-craft-drawing-classes-midnapore-glass-painting-classes-1gqooafrsr.jpg" /></SwiperSlide>

            </Swiper>
        </>
    );
};

export default ExtraTwo;

// https://i.ibb.co/C2vyVM0/0cc6dee24881a8a62363a750b9f680d2.jpg
// https://i.ibb.co/c821h60/art-craft-drawing-classes-midnapore-glass-painting-classes-1gqooafrsr.jpg
// https://i.ibb.co/dLdsjnw/images-2.jpg
// https://i.ibb.co/n3wsL4W/images-1.jpg
// https://i.ibb.co/h1yL7kK/images.jpg
// https://i.ibb.co/M7n9PdZ/Adobe-Stock-339040761.webp
// https://i.ibb.co/myrHfg5/images-3.jpg





