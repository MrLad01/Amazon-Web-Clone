import { Link } from "react-router-dom"

const Slide = () => {
  return (
    <div className="bg-white h-72 w-324 px-5 py-6">
        <div className='flex gap-x-3'>
            <h2 className='text-xl font-bold'>Trending deals</h2>
            <Link to="" className='text-sm text-blue-500 mt-1'>See all deals</Link>
        </div>
    </div> 
  )
}

export default Slide
