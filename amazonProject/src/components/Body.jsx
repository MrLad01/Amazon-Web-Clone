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
import img13 from '../images/img13.jpg'
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
                    <h2 className='text-xl font-bold'>Top Deal</h2>
                    <div>
                        <img src={img5} alt="" className='-mt-10 mb-3' />
                        <div>
                            <span className='text-xs text-white bg-rose-700 p-1.5'>Up to 54% off</span>
                            <span className='text-xs text-rose-700 ml-2 font-semibold'>With Prime</span>
                        </div>
                        <h4 className='text-xs mt-2'>Amazon Kids Fire Tablets</h4>
                    </div>
                    <Link to="" className='text-sm text-blue-500'>See all deals</Link>
                </div>
                <div className='w-78 h-106 bg-white grid content-between py-6 px-5'>
                    <div>
                        <h2 className='text-xl font-bold -mt-2'>Gap summer essentials</h2>
                        <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 mt-3'>
                            <div>
                                <img src={img6} alt=""  className='object-cover h-28'/>
                                <span className='text-xs -mt-3 text-gray-700'>Women's</span>
                            </div>
                            <div>
                                <img src={img7} alt=""  className='object-cover h-28'/>
                                <span className='text-xs -mt-3 text-gray-700'>Men's</span>
                            </div>
                            <div>
                                <img src={img8} alt=""  className='object-cover h-28'/>
                                <span className='text-xs -mt-3 text-gray-700'>Girl's</span>
                            </div>
                            <div>
                                <img src={img9} alt="" className='object-cover h-28' />
                                <span className='text-xs -mt-3 text-gray-700'>Boy's</span>
                            </div>
                        </div>
                    </div>
                    <Link to="" className='text-sm text-blue-500'>Shop all Gap</Link>
                </div>
                <div className='w-78 h-106 bg-white grid content-between py-6 px-5'>
                    <div>
                        <h2 className='text-xl font-bold -mt-2'>New and pre-loved styles</h2>
                        <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 mt-3'>
                            <div>
                                <img src={img10} alt="" className='object-cover h-28' />
                                <span className='text-xs -mt-3 text-gray-700'>Dresses</span>
                            </div>
                            <div>
                                <img src={img11} alt="" className='object-cover h-28' />
                                <span className='text-xs -mt-3 text-gray-700'>Tops</span>
                            </div>
                            <div>
                                <img src={img12} alt="" className='object-cover h-28' />
                                <span className='text-xs -mt-3 text-gray-700'>Bottoms</span>
                            </div>
                            <div>
                                <img src={img13} alt="" className='object-cover h-28' />
                                <span className='text-xs -mt-3 text-gray-700'>Outwear</span>
                            </div>
                        </div>
                    </div>
                    <Link to="" className='text-sm text-blue-500'>Shop Rent the Runway</Link>
                </div>
                <div className='w-78 h-106 grid gap-y-6'>
                    <div className='bg-white h-36 w-78 grid content-around py-6 px-5'>
                        <h2 className='text-xl font-bold -mt-3'>Sign in for the best <br />experience</h2>
                        <button className='bg-yellow-400 h-7 w-64 rounded-md text-sm'>Sign in securely</button>
                    </div>
                    <div className='bg-white h-64 w-76 ml-1'></div>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5 py-2'>
                    <h2 className='text-xl font-bold leading-7'>25% off Shopbop styles</h2>
                    <img src={img14} alt="" className='object-cover h-76 -mt-2' />
                    <h4 className='text-sm text-blue-500'>Shop the sale</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5 py-2'>
                    <h2 className='text-xl font-bold leading-7'>Deals on fitness</h2>
                    <img src={img15} alt="" className='object-cover h-76 -mt-2' />
                    <h4 className='text-sm text-blue-500'>Shop sports and outdoor deals</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5 py-2'>
                    <h2 className='text-xl font-bold leading-7'>New arrivals from Shopbop</h2>
                    <img src={img16} alt="" className='object-cover h-76 -mt-2' />
                    <h4 className='text-sm text-blue-500'>Discover more on Shopbop</h4>
                </div>
                <div className='w-78 h-106 bg-white grid content-around px-5 py-2'>
                    <h2 className='text-xl font-bold leading-7'>Make a splash</h2>
                    <img src={img17} alt="" className='object-cover h-76 -mt-2' />
                    <h4 className='text-sm text-blue-500'>Discover more on Shopbop</h4>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Body
