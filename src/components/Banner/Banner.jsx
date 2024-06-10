import React from 'react'
import Button from '../shared/Button';

const Banner = ({ data }) => { 
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div className='container'>
            <div 
            style={{backgroundColor:data.bgColor}}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white
             rounded-3xl'>
                {/*first col*/}
                <div className='p-6 sm:p-8'>
                <p className='text-sm'>{data.discount }</p>
                
                    <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                    < p data-aos="fade-up" className='text-md'>{data.date}</p>
                </div>
                

                {/*2 col*/}
                <div data-aos="zoom-in" className='item-center h-full'>
                    <img src={data.image} alt=""/>
                </div>
                {/*3 col*/}
                <div >
                    <p  data-aos="zoom-out"
                                 className='text-sm'>{data.title2}</p>
                    <p 
                    className='uppercase text-4xl lg:text-7xl font-semibold '>
                        {data.title3}</p>
                        <div data-aos="fade-up" data-aos-offset="0">
                                    <Button  
                                    text="Buy Now"
                                    bgColor="bg-primary"
                                    textColor="text-white"/>
                                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner; // Correct export statement
