import { Link } from "react-router-dom"
import data2 from "../data/data2"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider = ({number, deal, discount}) => {

  const files = data2[number].map((file) => {
  return (
    <div className="bg-white h-72 w-324 px-5 py-6 grid">
        <div className='flex gap-x-3'>
            <h2 className='text-xl font-bold'>{file.head}</h2>
           {deal && <Link to="" className='text-sm text-blue-500 mt-1'>{file.link}</Link>}
        </div>
        <div>
          <Swiper
              modules={[Navigation, Autoplay, Scrollbar]}
              navigation
              autoplay
              slidesPerView={6}
              slidesPerGroup={5}
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              className="w-316 my-2 pb-4"
  >
            { file.img.map((image) => (      
              <SwiperSlide>
               <img src={image.pic} alt="" />
               {/* {discount && 

               } */}
              </SwiperSlide>
              ))
           }
          </Swiper>
        </div>
    </div>
     )
  })


  return (
    <>
        {files}
    </>
  )

}

export default Slider
