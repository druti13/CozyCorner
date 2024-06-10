import React from 'react'
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
const Footerlink=[
    {title:"Home",
     link: "/#",
    },
    {title:"About",
    link: "/#About",
       },
    {title:"Contact",
    link: "/#contact",
    },
    {title:"Services",
     link: "/#Services",
    }

]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950 '>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                {/* Details */ }
                <div className='py-8 px-4'>
                    <a href='#' className='text-primary font-semibold tracking-widest 
                    text-2xl sm:text-3xl' > CozyCorner</a>
                    <p className='text-gray-400 lg:pr-20 pt-3 dark:text-white/70'>At CozyCorner, we believe that every space can be transformed 
                        into a cozy haven. 
                        Our mission is to provide you with 
                        premium products and expert advice to make your home
                        comfortable, stylish, and functional.</p>

                </div>
                <div className='cols-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
                    <div className='py-9 px-6'>
                        <h1 className='font-semibold text-xl sm:text-left mb-3'>Menu</h1>
                        <ul className='space-y-3'>
                            {Footerlink.map((data,index)=> (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-black
                                    duration-300' >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='py-8 px-4 cols-span-2 sm:col-auto'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow/>
                            <p>New Delhi, Delhi</p>
                            
                            

                        </div>
                        <div className='flex gap-3 items-center mt-6'>
                            <FaMobileAlt/>
                        <p >
                           +912345678190
                        </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer