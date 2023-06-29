import { Swiper, SwiperSlide } from "swiper/react"
import data3 from "../data/data3"
import { Link } from "react-router-dom"
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation]);


const Card2 = ({topic,slide, discount, ph, pw, ih, iw, more, number, s, background, tw, link}) => {

   const files = data3[number].map((data) => { 

  return (
    <div className= {`h-${ph} w-${pw} grid content-around`}>
      {topic && <h2 className="my-3 text-xl font-bold">{data.title}</h2>}
      {slide ? <div className="carousel-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          className={`w-${iw} h-61`}
        >
          <SwiperSlide><img src={data.slide[0]} alt="" /></SwiperSlide>
          <SwiperSlide><img src={data.slide[1]} alt="" /></SwiperSlide>
          <SwiperSlide><img src={data.slide[2]} alt="" /></SwiperSlide>
          <SwiperSlide><img src={data.slide[3]} alt="" /></SwiperSlide>
          <SwiperSlide><img src={data.slide[4]} alt="" /></SwiperSlide>
          <SwiperSlide><img src={data.slide[5]} alt="" /></SwiperSlide>
        </Swiper>
      </div>
       :
      background ? <div className={`h-${ih} w-${iw} bg-slate-100 justify-center items-center flex`}><img src={data.img} alt="" className={`h-${ih} w-${iw} mb-3 object-scale-down mix-blend-multiply`} /></div> : <img src={data.img} alt="" className={`h-${ih} w-${iw} mb-3 object-scale-down`} />}

      <div className={` flex flex-wrap my-2 `}>
        <h6 className={`line-clamp-3 text-${s} w-${tw}`}>{data.cap}</h6>
      </div>

      {link ? <Link className="text-sm text-blue-700 -mt-2" >{data.link}</Link> : <div className="flex">
        <span className="text-xxs">$</span>
        <span className="text-lg -mt-1">{data.price1}</span>
        <span className="text-xxs">{data.price2}</span>
        {discount && <span></span>}
        {more && 
        <div className="flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        }
      </div>}
    </div>
  ) })

  return (
    <>
    {files}
    </>
  )
}

export default Card2
