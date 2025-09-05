import React from 'react'
import style from './About.module.css'
import logo from '../../assets/Rectangle1.png'
import logo1 from '../../assets/Rectangle68.png'
import logo2 from '../../assets/Rectangle69.png'
import logo3 from '../../assets/Rectangle70.png'


export default function About() {
  return (
    <div className={`container`}>
        <div className={style.about}>
            <img src={logo} alt="" />
            <p><h1>Blog</h1><br /><span>Home</span> <i class="fa-solid fa-angle-right"></i> Blog</p>
        </div>

    <div class="grid grid-cols-2 gap-4 mx-10 ">
        <div>
        <div className='lefffffft py-10'>
            <div className=''>
                <img src={logo1} alt="" />
                <div className='flex' style={{color:'#9F9F9F'}}>
                <p className='p-5'><i className="fa-solid fa-user"></i> <span>Admin</span></p>
                <p className='p-5'><i class="fa-solid fa-calendar"></i> <span>22 oct 2025</span></p>
                <p className='p-5'><i class="fa-solid fa-tag"></i> <span>Wood</span></p>
                </div>
                <h1 className='text-4xl py-3 font-semibold'>Going all-in with millennial design</h1>
                <p className={style.spec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

            </div>
        </div>
        <div className='lefffffft py-10'>
            <div className=''>
                <img src={logo2} alt="" />
                <div className='flex' style={{color:'#9F9F9F'}}>
                <p className='p-5'><i className="fa-solid fa-user"></i> <span>Admin</span></p>
                <p className='p-5'><i class="fa-solid fa-calendar"></i> <span>22 oct 2025</span></p>
                <p className='p-5'><i class="fa-solid fa-tag"></i> <span>Wood</span></p>
                </div>
                <h1 className='text-4xl py-3 font-semibold'>Going all-in with millennial design</h1>
                <p className={style.spec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

            </div>
        </div>
        <div className='lefffffft py-10'>
            <div className=''>
                <img src={logo3} alt="" />
                <div className='flex' style={{color:'#9F9F9F'}}>
                <p className='p-5'><i className="fa-solid fa-user"></i> <span>Admin</span></p>
                <p className='p-5'><i class="fa-solid fa-calendar"></i> <span>22 oct 2025</span></p>
                <p className='p-5'><i class="fa-solid fa-tag"></i> <span>Wood</span></p>
                </div>
                <h1 className='text-4xl py-3 font-semibold'>Going all-in with millennial design</h1>
                <p className={style.spec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

            </div>
        </div>
    </div>

        
    <div className=' '>
        <form class="max-w-md mx-auto  w-full mt-10">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        </form>
        <h1 className='text-center mt-10 text-3xl'>Categories</h1>


    </div>

        

    </div>



    </div>
  )
}
