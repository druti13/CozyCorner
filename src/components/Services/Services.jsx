import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeadphonesAlt } from 'react-icons/fa';
import { CgRowFirst } from "react-icons/cg";

const ServicesData = [
    {
        id: 1,
        icon: <CgRowFirst className='text-4xl md:text-5xl text-brandGreen size-[90px]' />,
        title: "Best Quality",
        description: "Products are made with Premium Source "
    },
    {
        id: 2,
        icon: <MdLocalShipping className='text-4xl md:text-5xl text-brandGreen size-[90px]' />,
        title: "Free Shipping ",
        description: "Free shipping for First user"
    },
    {
        id: 3,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-brandGreen size-[90px]' />,
        title: "Help and Feedback",
        description: "Any Technical Support "
    },
    {
        id: 4,
        icon: <GiReturnArrow className='text-4xl md:text-5xl text-brandGreen font-bold' />,
        title: "Returnable",
        description: "Products Can be Returned within 30 days"
    }
]

const Services = () => {
    return (
        <div>
            <div className="container my-14 md:my-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServicesData.map((data) => (
                        <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
                            {data.icon}
                            <h1 className='lg:text-xl font-bold text-black'>{data.title}</h1>
                            
                            <h1 className='text-gray-500 text-sm'>{data.description}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
