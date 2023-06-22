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
    <div className='relative'>
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
        <div className='absolute top-64 z-10'>
            <div className='grid grid-rows-2 grid-cols-4 gap-y-4 gap-x-5 mx-5 items-center justify-center'>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white'></div>
            </div>
        </div>
    </div>
  )
}

export default Body
