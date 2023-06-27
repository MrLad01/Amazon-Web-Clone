import { Swiper } from "swiper/react"
import data3 from "../data/data3"
import { Link } from "react-router-dom"


const Card2 = ({topic,slide, discount, ph, pw, ih, iw, more, number, s, background, tw, link}) => {

   const files = data3[number].map((data) => { 

  return (
    <div className= {`h-${ph} w-${pw} grid`}>
      {topic && <h2>{data.title}</h2>}
      {slide ? Swiper :
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
