import { Swiper } from "swiper/react"
import data3 from "../data/data3"


const Card2 = ({topic,slide, discount, ph, pw, ih, iw, more, number, s}) => {

   const files = data3[number].map((data) => { 

  return (
    <div className= {`h-${ph} w-${pw} grid`}>
      {topic && <h2>{data.title}</h2>}
      {slide ? Swiper :
      <img src={data.img} alt="" className={`h-${ih} w-${iw} mb-3 object-cover`} />}

      <div w-10 h-10 bg-red-700 flex flex-wrap>
        <h6 className={`line-clamp-2 text-${s} w-${iw} whitespace-normal `}>{data.cap}</h6>
      </div>

      <div className="flex">
        <span className="text-xxs">$</span>
        <span className="text-s">{data.price1}</span>
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
      </div>
    </div>
  ) })

  return (
    <>
    {files}
    </>
  )
}

export default Card2
