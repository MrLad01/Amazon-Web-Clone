import { Link } from "react-router-dom"
import data2 from "../data/data2"

const Slider = ({number, deal}) => {

  const files = data2[number].map((file) => {
  return (
    <div className="bg-white h-72 w-324 px-5 py-6">
        <div className='flex gap-x-3'>
            <h2 className='text-xl font-bold'>{file.head}</h2>
           {deal && <Link to="" className='text-sm text-blue-500 mt-1'>{file.link}</Link>}
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
