import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

// Import Swiper styles
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';


const Body = () => {
  return (
    <>
        <div className='grid'>
            <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay
                    slidesPerView={1}
                    className='object-contain w-full mix-blend-lighten'
                // install Swiper modules
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src={img1} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /> </SwiperSlide>
            </Swiper>
            <div className='h-64 w-full relative bottom-64  bg-gradient-to-t from-slate-100 to-transparent'></div>
            <div className='h-max w-full relative bottom-64 bg-slate-200'></div>
        </div>
    </>
  )
}

export default Body
