import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img14 from '../images/img14.jpg'
import img15 from '../images/img15.jpg'
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
import { Link } from 'react-router-dom';

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
                <div className='w-78 h-106 bg-white grid content-around px-5'>
                    <h2>Top Deal</h2>
                    <div>
                        <img src={img5} alt="" />
                        <div>
                            <span>Up to 54% off</span>
                            <span>with Prime</span>
                        </div>
                        <h4>Amazon Kids Fire Tablets</h4>
                    </div>
                    <Link to="">See all deals</Link>
                </div>
                <div className='w-78 h-106 bg-white grid content-between py-6 px-5'>
                    <div>
                        <h2>Gap summer essentials</h2>
                        <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4'>
                            <div>
                                <img src={img6} alt="" />
                                <span>Women's</span>
                            </div>
                            <div>
                                <img src={img7} alt="" />
                                <span>Men's</span>
                            </div>
                            <div>
                                <img src={img8} alt="" />
                                <span>Girl's</span>
                            </div>
                            <div>
                                <img src={img9} alt="" />
                                <span>Boy's</span>
                            </div>
                        </div>
                    </div>
                    <Link to="">Shop all Gap</Link>
                </div>
                <div className='w-78 h-106 bg-white grid content-between py-6 px-5'>
                    <div>
                        <h2>New and pre-loved styles</h2>
                        <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4'>
                            <div>
                                <img src={img10} alt="" />
                                <span>Dresses</span>
                            </div>
                            <div>
                                <img src={img11} alt="" />
                                <span>Tops</span>
                            </div>
                            <div>
                                <img src={img12} alt="" />
                                <span>Bottoms</span>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <span>Outwear</span>
                            </div>
                        </div>
                    </div>
                    <Link to="">Shop Rent the Runway</Link>
                </div>
                <div className='w-78 h-106 bg-white'></div>
                <div className='w-78 h-106 bg-white grid content-around px-5'>
                    <h2>25% off Shopbop styles</h2>
                    <img src={img14} alt="" />
                    <h4>Shop the sale</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5'>
                    <h2>Deals on fitness</h2>
                    <img src={img15} alt="" />
                    <h4>Shop sports and outdoor deals</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5'>
                    <h2>New arrivals from Shopbop</h2>
                    <img src={img16} alt="" />
                    <h4>Discover more on Shopbop</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5'>
                    <h2>Make a splash</h2>
                    <img src={img17} alt="" />
                    <h4>Discover more on Shopbop</h4>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Body
