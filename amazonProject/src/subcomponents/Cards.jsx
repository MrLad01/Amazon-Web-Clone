// import React from 'react'

import data from '../data/data'
import { Link } from "react-router-dom"

const Cards = ({number, imgno}) => {

    const files = data[number].map((file) => {
        return ( 
             imgno === 1 ?  
               <div className='w-78 h-106 bg-white grid content-around px-5'>
                  <h2 className='text-xl font-bold'>{file.head}</h2>
                  <div>
                      <Link to=""><img src={file.img} alt="" className='-mt-10 mb-3' /></Link>
                      <div>
                          <Link>
                              <span className='text-xs text-white bg-rose-700 p-1.5'>{file.deal[0]}</span>
                              <span className='text-xs text-rose-700 ml-2 font-semibold'>{file.deal[1]}</span>
                          </Link>
                      </div>
                      <Link className='text-xs mt-2'>{file.deal[2]}</Link>
                  </div>
                  <Link to="" className='text-sm text-blue-500'>{file.link}</Link>
              </div>   :     
              <div className='w-78 h-106 bg-white grid content-between py-6 px-5'>
                          <div>
                              <h2 className='text-xl font-bold -mt-2'>{file.head}</h2>
                              <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 mt-3'>
                                  <div>
                                      <Link to=""><img src={file.img[0]} alt=""  className='object-cover h-28'/>
                                      <span className='text-xs -mt-3 text-gray-700'>{file.caption[0]}</span></Link> 
                                  </div>
                                  <div>
                                      <Link to=""><img src={file.img[1]} alt=""  className='object-cover h-28'/>
                                      <span className='text-xs -mt-3 text-gray-700'>{file.caption[1]}</span></Link> 
                                  </div>
                                  <div>
                                      <Link to=""><img src={file.img[2]} alt=""  className='object-cover h-28'/>
                                      <span className='text-xs -mt-3 text-gray-700'>{file.caption[2]}</span></Link> 
                                  </div>
                                  <div>
                                      <Link to=""><img src={file.img[3]} alt="" className='object-cover h-28' /> 
                                      <span className='text-xs -mt-3 text-gray-700'>{file.caption[3]}</span></Link> 
                                  </div>
                              </div>
                          </div>
                          <Link to="" className='text-sm text-blue-500'>{file.link}</Link>
                      </div> 
              
           
               )   
             } 
        ) 


        
        return(
            <>
                {files}
            </>
         )
        
    }
   

export default Cards
