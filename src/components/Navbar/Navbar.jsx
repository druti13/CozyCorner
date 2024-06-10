import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'About',
        link: '/#',
    },
    {
        id: 3,
        name: 'Shop',
        link: '/#',
    },
    {
        id: 4,
        name: 'Blogs',
        link: '/#',
    },
];

const DropDownLinks = [
    {
        id: 1,
        name: 'Best Selling',
        link: '/#',
    },
    {
        id: 2,
        name: 'Trending Product',
        link: '/#',
    },
    {
        id: 3,
        name: 'Products on 50% Sale',
        link: '/#',
    },
];

const Navbar = () => {
    return (
        <div className='bg-lime-100 dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    {/* logo and links */}

                    <div className='hidden lg:sm:block'>
                        <ul className='flex items-center gap-4'>
                            {MenuLinks.map((data, index) => (
                                <li key={data.id}>
                                    <a
                                        href={data.link}
                                        className='inline-block px-4 font-semibold hover:text-black dark:text-white duration-200'
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            <li className='relative group'>
                                <a
                                    href='#'
                                    className='flex items-center gap-[2px] font-semibold text-gray-900 dark:text-white py-2'
                                >
                                    <span>Shop</span>
                                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                </a>
                                {/* drop down list */}
                                <div className='absolute z-[9999] hidden group-hover:block w-[200px]  rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white'>
                                    <ul className='space-y-2'>
                                        {DropDownLinks.map((data, index) => (
                                            <li key={data.id}>
                                                <a
                                                    className='text-gray-500 dark:text-white duration-200 inline-block w-full rounded-md font-semibold p-2 hover:bg-primary/40'
                                                    href={data.link}
                                                >
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'>
                            CozyCorner
                        </a>
                    </div>
                   
                    {/* Navbar section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar section */}
                        <div className='relative group hidden sm:block'>
                            <input type='text' placeholder='Search' className='search-bar' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1 right-3 duration-200' />
                        </div>
                        {/* order button section */}
                        <button className='relative p-3 ' >
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                4
                            </div>
                        </button>
                        {/* dark mode section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;