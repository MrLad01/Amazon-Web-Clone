import { Swiper } from "swiper/react"
import data3 from "../data/data3"


const Card2 = ({topic,slide, discount, ph, pw, ih, iw}) => {
  return (
    <div className= {`h-${ph} w-${pw} grid`}>
      {topic && <h2>{}</h2>}
      {slide ? Swiper :
      <img src="" alt="" className={`h-${ih} w-${iw}`} />}
      <h2></h2>
      <div className="flex">
        <span></span>
        <span></span>
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
  )
}

export default Card2
