import { Link } from "react-router-dom"
import data2 from "../data/data2"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider = ({number, deal, discount, nw, wx}) => {

  const files = data2[number].map((file) => {
  return (
    <div className={`bg-white h-93 w-${nw} px-5 py-6 grid`}>
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
              className= {`my-2 pb-1 h-68 w-317`}
  >
            { file.img.map((image) => (      
              <SwiperSlide>
               { discount ? (<><div>
               <img src={image.pic} alt="" className="w-59 h-52 object-contain" />
                <Link>
                    <span className='text-xs text-white bg-rose-700 p-1.5'>{image.price}</span>
                    <span className='text-xs text-rose-700 ml-2 font-semibold'>{image.time}</span>
                </Link>
            </div>
            <Link className='text-xs mt-2 line-clamp-1'>{image.description}</Link></>):
              <img src={image.pic} alt="" className="h-51 w-51 object-contain" />
              
               }
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
