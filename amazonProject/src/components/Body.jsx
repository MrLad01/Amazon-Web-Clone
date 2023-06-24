import Background from '../subcomponents/Background'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import img14 from '../images/img14.jpg'
import img15 from '../images/img15.jpg'
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
import img18 from '../images/img18.jpg'
import { Link } from 'react-router-dom';
import Cards from '../subcomponents/Cards'




const Body = () => {
  return (
    <div className='relative'>
        <Background />
        <div className='absolute top-64 z-10'>
            <div className='grid grid-rows-2 grid-cols-4 gap-y-4 gap-x-5 mx-5 items-center justify-center'>
                <Cards number={0} imgno={1} deal={true}/>
                <Cards number={1} imgno={4} />
                <Cards number={2} imgno={4} />
                <div className='w-78 h-106 grid gap-y-6'>
                    <div className='bg-white h-36 w-78 grid content-around py-6 px-5'>
                        <h2 className='text-xl font-bold -mt-3'>Sign in for the best <br />experience</h2>
                        <button className='bg-yellow-400 hover:bg-yellow-500 h-7 w-64 rounded-md text-sm'>Sign in securely</button>
                    </div>
                    <div className='bg-white h-64 w-76 ml-1 relative'>
                        <Link to=""><img src={img18} alt="" className='object-fit h-64'/></Link> 
                        <h3 className='absolute -bottom-4 right-0 text-xs mr-1 text-gray-800'>Sponsored</h3>
                    </div>
                </div>
                <Cards number={3} imgno={1} deal={false} />
                <Cards number={4} imgno={1} deal={false} />
                <Cards number={5} imgno={1} deal={false} />
                <Cards number={6} imgno={1} deal={false} />
            </div>
        </div>
        <div className="absolute top-284 z-10">
            <div className="grid grid-rows-2 gap-y-4 mx-5">
                <div className="bg-white h-72 w-324 px-5 py-6">
                    <div className='flex gap-x-3'>
                        <h2 className='text-xl font-bold'>Trending deals</h2>
                        <Link to="" className='text-sm text-blue-500 mt-1'>See all deals</Link>
                    </div>
                </div>
                <div className="bg-white h-72 w-324 px-5 py-6">
                    <h2 className='text-xl font-bold'>Best Sellers in in Home & Kitchen</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Body
