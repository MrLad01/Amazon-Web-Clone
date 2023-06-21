import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';


const Body = () => {
  return (
    <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay
        slidesPerView={1}
    // install Swiper modules
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    ...
  </Swiper>
  )
}

export default Body
