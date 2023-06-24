import Background from '../subcomponents/Background'
import img18 from '../images/img18.jpg'
import { Link } from 'react-router-dom';
import Cards from '../subcomponents/Cards'
import Slider from '../subcomponents/Slide';


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
                {/* <Slider number={0} deal={true} /> */}
                <Slider number={1} />
            </div>
        </div>

    </div>
  )
}

export default Body
