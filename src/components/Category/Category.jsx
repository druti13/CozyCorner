import React from 'react'
import image1 from '../../assets/chair.png';
import lamp from '../../assets/lamp.png';

import Button from '../shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'> 
            <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8">
                {/*first col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandSage to-secondary/30
                 text-white rounded-3xl relative h-[320px] flex items-end w-[380px]'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enhance life</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-3xl xl:text-5xl font-bold opacity-20 mb-2'>Comfy-Couch</p>
                            <Button 
                            text="See More"
                            bgColor={"bg-white"}
                            textColor={"text-black"}
                            />
                        </div>
                    </div>
                    <img src={image1} alt="comfy chair" className='w-[300px] ml-auto absolute bottom-0 -right-10' />
                </div>
                 {/*second col*/}
                 <div className='py-10 pl-5 bg-gradient-to-br from-brandSage to-brandYellow/70
                 text-white rounded-3xl relative h-[320px] flex items-end w-[380px] -right-[150px]'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Brighten up</p>
                            <p className='text-2xl font-semibold mb-[2px]'>your space</p>
                            <p className='text-3xl xl:text-6xl font-bold opacity-20 mb-2'>With A Lamp</p>
                            <Button 
                            text="See More"
                            bgColor={"bg-white"}
                            textColor={"text-black"}
                            />
                        </div>
                    </div>
                    <img src={lamp} alt="lamp" className='w-[300px] ml-auto absolute bottom-0 -right-10' />
                </div>
                  {/*third col*/}
            </div>

        </div>
    </div>
  )
}

export default Category