import Background from '../subcomponents/Background'
import img18 from '../images/img18.jpg'
import img138 from '../images/img138.jpg'
import advert from "../images/advert.mp4"
import { Link } from 'react-router-dom';
import Cards from '../subcomponents/Cards'
import Card3 from '../subcomponents/Card3'
import Slider from '../subcomponents/Slide';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';



// Import Swiper styles
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
import Card2 from '../subcomponents/Card2';

const Body = () => {


    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    }

    const videoRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const videoElement = videoRef.current;
        const videoTopPosition = videoElement.getBoundingClientRect().top;
        const videoHeight = videoElement.offsetHeight;
        const windowHeight = window.innerHeight;
  
        // Calculate the position threshold based on the video height
        const threshold = videoHeight * 0.5;
  
        // Check if the video is more than 50% visible in the viewport
        const isVideoVisible = videoTopPosition - threshold < windowHeight && videoTopPosition + videoHeight - threshold > 0;
  
        if (isVideoVisible && videoElement.paused) {
          videoElement.play();
        } else if (!isVideoVisible && !videoElement.paused) {
          videoElement.pause();
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);





  return (
    <div className='relative'>
        <Background ref={inputRef} />
        <div className='absolute top-64 z-10'>
            <div className='grid grid-rows-2 grid-cols-4 gap-y-4 gap-x-5 mx-5 items-center justify-center'>
                <Cards number={0} imgno={1} deal={true}/>
                <Cards number={1} imgno={4} />
                <Cards number={2} imgno={4} />
                <div className='w-78 h-106 grid gap-y-6'>
                    <div className='bg-white h-36 w-78 grid content-around py-6 px-5'>
                        <h2 className='text-xl font-bold -mt-3'>Sign in for the best <br />experience</h2>
                        <button className='bg-yellow-400 hover:bg-yellow-500 h-7 w-64 rounded-md text-sm'>Sign in securely</button>
                    </div>
                    <div className='bg-white h-64 w-76 ml-1 relative'>
                        <Link to=""><img src={img18} alt="" className='object-fit h-64'/></Link> 
                        <h3 className='absolute -bottom-4 right-0 text-xxs mr-1 text-gray-800'>Sponsored</h3>
                    </div>
                </div>
                <Cards number={3} imgno={1} deal={false} />
                <Cards number={4} imgno={1} deal={false} />
                <Cards number={5} imgno={1} deal={false} />
                <Cards number={6} imgno={1} deal={false} />
            </div>
        </div>
        <div className="absolute top-284 z-10">
            <div className="grid grid-rows-2 gap-y-4 mx-5">
                <Slider number={0} deal={true} discount={true} nw={324} wx={317} />
                <Slider number={1} nw={324} wx={317} />
            </div>
        </div>
        <div className="absolute top-480 z-10">
            <div className="grid grid-cols-4 gap-x-4 mx-5">
                <Cards number={7} imgno={1} />
                <Cards number={8} imgno={4} />
                <Cards number={9} imgno={1} />
                <Cards number={10} imgno={1} />
            </div>
        </div>
        <div className="absolute top-590 z-10">
            <div className="grid grid-cols-4 gap-x-4 mx-5">
                <Slider number={2} nw={324} wx={317} />
            </div>
        </div>
        <div className='absolute top-688 z-10'>
            <div className="bg-white h-93 w-324 px-5 py-6 mx-5">
                <div className="flex gap-x-3">
                <h2 className='text-xl font-bold'>Amazon Live | Shop livestreams</h2>
                <Link to="" className='text-sm text-blue-500 mt-1'>See more from Amazon Live</Link>
                </div>
                <div className="flex gap-x-10">
                    <div>
                        <video  className='h-68 w-109 mt-1' ref={videoRef} controls autoPlay>
                            <source src={advert} type='video/mp4' />
                            Your browser cannot load this</video>
                    </div>
                    <div >
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay
                            spaceBetween={20}
                            slidesPerView={4}
                            className='line-clamp-2 h-71 w-192 mt-3'
                        >
                            <SwiperSlide>
                                <Card2 number={0} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2 number={1} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2 number={2} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2 number={3} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2 number={4} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={false} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card2 number={5} ph={60} pw={36} ih={32} iw={36} slide={false} topic={false} discount={false} more={false} background={true} s="xs" tw={24} link={true} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute top-785 z-10">
            <div className="grid grid-cols-1 gap-x-4 mx-5">
                <Slider number={3} nw={324} wx={317} />
            </div>
        </div>

        <div className="absolute top-884 z-10 mx-48 ">
            <img src={img138} alt="" className='w-243 h-63' />
            <h3 className='absolute right-0 text-xxs mr-1 text-gray-800'>Sponsored</h3>
        </div>
        <div className="absolute top-950 z-10">
            <div className="grid grid-cols-4 grid-rows-1 gap-x-4 mx-4 ">
                <div className="h-106 w-78 bg-white content-around px-5">
                <Card2 number={6} ph={60} pw={72} ih={32} iw={64} slide={true} topic={true} discount={false} more={false} background={false} s="md" tw={24} link={false} />
                </div>
                <Card3 number={7} ph={60} pw={80} ih={48} iw={36}  discount={true} more={true} s="sm" tw={24} />
                <Cards number={11} imgno={1} />
                <Card3 number={8} ph={60} pw={80} ih={48} iw={36}  discount={true} more={true} s="sm" tw={24} />
            </div>
        </div>
        <div className="absolute top-1060 z-10 ml-4">
            <Slider number={4} nw={324} wx={196} />
        </div>
        <div className='absolute top-1158 z-10 w-full h-48 bg-white'>
            <div className='mt-8 border-t border-b  w-full'>
                <div className='grid justify-center pt-8 pb-4'>
                    <h3 className='text-sm m-1'>See specialized recommendations</h3>
                    <button className='w-56 h-7 shadow-inner bg-gradient-to-b from-amber-300 via-amber-400 to-amber-400 rounded-md text-xs font-semibold'>Sign in</button>
                    <div className='flex text-xs self-center my-1 mx-10'>
                       <h4>New customer?</h4>
                       <Link to="" className='text-blue-700 ml-1'>Start here</Link> 
                    </div>
                </div>
            </div>
        </div>
        <Link to="" onClick={focusInput}>
         <button className="absolute top-1206 z-10 w-full bg-slate-700 h-12 cursor-pointer" >
                <h3 className='text-sm text-white self-center'>Back to top</h3>
        </button>
        </Link>
        <div className="absolute top-1218 z-10 w-full bg-gray-800 h-116"></div>
    </div>
  )
}

export default Body
