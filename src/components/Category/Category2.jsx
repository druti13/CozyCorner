import React from 'react'
import mirror from '../../assets/image2.png';
import cup from '../../assets/cupboard.png';
import bed from '../../assets/bedsheet.png';

import Button from '../shared/Button';

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'> 
            <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8">
                {/*first col*/}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[300px] flex items-end w-full mt-0 sm:mt-12'>
                    <div className='z-10'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Reflect</p>
                            <p className='text-2xl font-semibold mb-[2px]'>elegance</p>
                            <p className='text-3xl xl:text-5xl font-bold opacity-20 mb-2'>with Mirror</p>
                            <Button 
                            text="See More"
                            bgColor={"bg-white"}
                            textColor={"text-black"}
                            />
                        </div>
                    </div>
                    <img src={mirror} alt="mirror" className='w-[200px] absolute bottom-12 -right-5' />
                </div>
                 {/*second col*/}
                 <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlue/70 text-white rounded-3xl relative h-[300px] flex items-end w-[320px] mt-0 sm:mt-12'>
                    <div className='z-10'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Organize </p>
                            <p className='text-2xl font-semibold mb-[2px]'>your life</p>
                            <p className='text-3xl xl:text-5xl font-bold opacity-20 mb-2'>with a Wardrobe</p>
                            <Button 
                            text="See More"
                            bgColor={"bg-white"}
                            textColor={"text-black"}
                            />
                        </div>
                    </div>
                    <img src={cup} alt="cup" className='w-[200px] absolute bottom-8 -right-5' />
                </div>
                  {/*third col*/}
                  <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brandGreen text-white rounded-3xl relative h-[300px]
                   flex items-end w-[337px] mt-0 sm:mt-12 -right-[110px]'>
                    <div className='z-10'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Organize </p>
                            <p className='text-2xl font-semibold mb-[2px]'>your life</p>
                            <p className='text-3xl xl:text-5xl font-bold opacity-20 mb-2'>with a Wardrobe</p>
                            <Button 
                            text="See More"
                            bgColor={"bg-white"}
                            textColor={"text-black"}
                            />
                        </div>
                    </div>
                    <img src={bed} alt="bed" className='w-[200px] absolute bottom-8 -right-5' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Category2;