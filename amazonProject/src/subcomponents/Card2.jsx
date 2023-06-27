import { Swiper } from "swiper/react"
import data3 from "../data/data3"


const Card2 = ({topic,slide, discount, ph, pw, ih, iw, c, more, number}) => {

    data3[{number}].map((data)=>{ 

  return (
    <div className= {`h-${ph} w-${pw} grid`}>
      {topic && <h2>{data.title}</h2>}
      {slide ? Swiper :
      <img src={data.img} alt="" className={`h-${ih} w-${iw}`} />}
      <h2 className={`line-clamp-${c}`}>{data.cap}</h2>
      <div className="flex">
        <span>$</span>
        <span>{data.price1}</span>
        <span>{data.price2}</span>
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
}

export default Card2
