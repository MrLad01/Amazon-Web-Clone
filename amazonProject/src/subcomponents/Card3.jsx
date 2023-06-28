import { useState } from "react"
import data3 from "../data/data3"
import { Link } from "react-router-dom"


const Card3 = ({discount, ph, pw, ih, iw, more, number, s, tw}) => {

   const files = data3[number].map((data) => { 

    const [swap, setSwap] = useState(data.img)

  return (
    <div className= {`h-${ph} w-${pw} grid bg-white `}>
      <h2>{data.title}</h2>
      <img src={swap} alt="" className={`h-${ih} w-${iw} mb-3 object-scale-down`} />
      <div className={` flex flex-wrap my-2 `}>
        <h6 className={`line-clamp-3 text-${s} w-${tw}`}>{data.cap}</h6>
      </div>

     <div className="flex">
        <span className="text-xxs">$</span>
        <span className="text-lg -mt-1">{data.price1}</span>
        <span className="text-xxs">{data.price2}{data.price2}</span>
        {discount && <span className="text-sm">{data.discount}</span>}
        {more && 
        <div className="flex">
            <img src={data.more[0]} alt="" onClick={() => {setSwap(data.more[0])}} />
            <img src={data.more[1]} alt="" onClick={() => {setSwap(data.more[1])}} />
            <img src={data.more[2]} alt="" onClick={() => {setSwap(data.more[2])}} />
            <img src={data.more[3]} alt="" onClick={() => {setSwap(data.more[3])}} />
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

export default Card3
