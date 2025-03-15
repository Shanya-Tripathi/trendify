import React, { useEffect, useState } from 'react'
import { HiMiniEquals, HiMiniXMark } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { HiUserCircle , HiTruck , HiShoppingCart } from "react-icons/hi";
import {assets} from '../assets/assets'

const Navbar = () => {

    const [showMobileMenu,setShowMobileMenu] = useState(false)
useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='auto'
    }
    return()=>{
         document.body.style.overflow='auto'
    }
},[showMobileMenu])

  return (
    <div className='fixed top-0 w-full   overflow-hidden z-50'>
        {/*--------desktop view--------*/}
        <div className='container mx-auto flex justify-center align-middle flex-nowrap items-center fixed bg-white py-4   '>
            <ul className='hidden text-xl items-center md:flex gap-7 text-black
              inknut-antiqua-regular '>
                <a href ="#Header" className='px-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] '
                 >HOME</a>
                <a href ="#HomeTabs" className='px-2 relative text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                 >FASHION</a>
                <a href="/" className=" relative w-[128px] h-[30px] md:w-[213px] md:h-[50px]  ">
                    <img src={assets.logo} className="grayscale h-full w-full rounded-lg object-contain" alt="logo" />     
                </a>
                <a href ="#HomeTabs" className='px-2 relative text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                 >TRYFIT</a>
                <a href ="#About" className='px-2 relative text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                 > TRENDING</a>
                
            </ul>
            <HiMiniEquals onClick ={()=> setShowMobileMenu(true)}  className='md:hidden w-8 h-8 cursor-pointer text-black' />
        </div> 
        {/*--------mobile view--------*/} 
        <div className={`md:hidden fixed inset-0 w-full h-full backdrop-blur-lg bg-black/50 transition-transform duration-300 ease-in-out 
    ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <HiMiniXMark onClick={()=>setShowMobileMenu(false)} className='w-10 h-10 text-white cursor-pointer' />
            </div>
    <ul className='flex flex-col items-center text-black gap-4 mt-5 px-5 text-xl font-medium'>
        <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 hover:text-l_blue'>Home</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#HomeTabs" className='px-4 py-2 hover:text-l_blue'>Digital Solution</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 hover:text-l_blue'>About Us</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 hover:text-l_blue'>Contact Us</a>    
    </ul>    
    </div> 


    <div class="fixed right-4 top-2/4 hidden -translate-y-2/4 lg:block inknut-antiqua-regular">
        <div class="relative bg-clip-border rounded-xl bg-white  text-black shadow-md group flex flex-col gap-1 border border-blue-gray-50 p-1.5">
            <a href="">
                <button class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm rounded-lg border border-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] flex w-full items-center gap-2 px-2 py-2 text-black hover:border hover:border-blue-gray-50 hover:text-primary" type="button">
                    <HiUserCircle alt="react-icon" class="h-6 w-6"/>
                    <span class="mr-2 hidden font-bold group-hover:block">Profile</span>
                </button>
            </a>
            <a href="">
                <button class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm rounded-lg border border-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] flex w-full items-center gap-2 px-2 py-2 text-black hover:border hover:border-blue-gray-50 hover:text-primary" type="button">
                    <HiShoppingCart alt="react-icon" class="h-6 w-6"/>
                    <span class="mr-2 hidden font-bold group-hover:block">Cart</span>
                </button>
            </a>
            <a href="/figma">
                <button class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm rounded-lg border border-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] flex w-full items-center gap-2 px-2 py-2 text-black hover:border hover:border-blue-gray-50 hover:text-primary" type="button">
                    <HiTruck alt="react-icon" class="h-6 w-6"/>
                    <span class="mr-2 hidden font-bold group-hover:block">Order</span>
                </button>
            </a>
            <a href="">
                <button class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm rounded-lg border border-white hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] flex w-full items-center gap-2 px-2 py-2 text-black hover:border hover:border-blue-gray-50 hover:text-primary" type="button">
                    <FaHeart alt="react-icon" class="h-6 w-6"/>
                    <span class="mr-2 hidden font-bold group-hover:block">Wishlist</span>
                </button>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
