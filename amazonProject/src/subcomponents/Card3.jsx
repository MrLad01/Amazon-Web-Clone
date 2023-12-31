import { useState } from "react"
import data3 from "../data/data3"
import { Link } from "react-router-dom"


const Card3 = ({discount, ph, pw, ih, iw, more, number, s, tw}) => {

   const files = data3[number].map((data) => { 

    const [swap, setSwap] = useState(data.img)
    const [swap1, setSwap1] = useState(data.cap[0])
    const [swap2, setSwap2] = useState(data.price1[0])
    const [swap3, setSwap3] = useState(data.price2[0])
    const [swap4, setSwap4] = useState(data.discount[0])

  return (
    <div className= {`h-${ph} w-${pw} grid bg-white px-5 pt-2 pb-6 content-around `}>
      <h2 className='text-xl font-bold' >{data.title}</h2>
      <img src={swap} alt="" className={`h-${ih} w-${iw} mt-2 object-cover justify-self-center`} />
      <div className={` flex flex-wrap my-2 `}>
        <h6 className={`-mt-3 line-clamp-2 text-${s} w-${tw}`}>{swap1}</h6>
      </div>
     <div className="flex">
        <span className="text-xs">$</span>
        <span className="text-xl -mt-1">{swap2}</span>
        <span className="text-xs">{swap3}{swap3}</span>
        {discount && <div className="text-sm ml-2 text-gray-600">List: <span className="line-through" >{swap4}</span></div>} 
     </div>
     <div className="flex justify-self-center">
        {more && 
        <div className="flex gap-x-2">
            <img src={data.more[0]} alt="" onClick={() => {
                setSwap(data.more[0])
                setSwap1(data.cap[0])
                setSwap2(data.price1[0])
                setSwap3(data.price2[0])
                setSwap4(data.discount[0])
                }} className="h-16 w-16 object-contain rounded-md border p-1 border-gray-400" />
            <img src={data.more[1]} alt="" onClick={() => {
                setSwap(data.more[1])
                setSwap1(data.cap[1])
                setSwap2(data.price1[1])
                setSwap3(data.price2[1])
                setSwap4(data.discount[1])
                }} className="h-16 w-16 object-contain rounded-md border p-1 border-gray-400" />
            <img src={data.more[2]} alt="" onClick={() => {
                setSwap(data.more[2])
                setSwap1(data.cap[2])
                setSwap2(data.price1[2])
                setSwap3(data.price2[2])
                setSwap4(data.discount[2])
                }} className="h-16 w-16 object-contain rounded-md border p-1 border-gray-400" />
            <img src={data.more[3]} alt="" onClick={() => {
                setSwap(data.more[3])
                setSwap1(data.cap[3])
                setSwap2(data.price1[3])
                setSwap3(data.price2[3])
                setSwap4(data.discount[3])
                }} className="h-16 w-16 object-contain rounded-md border p-1 border-gray-400" />
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
