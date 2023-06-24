import React from 'react'
import data from '../data/data'

const Cards = () => {
  return (
        <div className='w-78 h-106 bg-white grid content-around px-5'>
        <h2 className='text-xl font-bold'>Top Deal</h2>
        <div>
            <Link to=""><img src={img5} alt="" className='-mt-10</Link>  mb-3' /></Link>
            <div>
                <Link>
                    <span className='text-xs text-white bg-rose-700 p-1.5'>Up to 54% off</span>
                    <span className='text-xs text-rose-700 ml-2 font-semibold'>With Prime</span>
                </Link>
            </div>
            <Link className='text-xs mt-2'>Amazon Kids Fire Tablets</Link>
        </div>
        <Link to="" className='text-sm text-blue-500'>See all deals</Link>
    </div>
  )
}

export default Cards
