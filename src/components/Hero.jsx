import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { assets } from '../assets/assets'
import { HiQrCode } from "react-icons/hi2";


const Hero = () => {
  return (
  <div className='grid overflow-hidden'>
      <div className='min-h-screen mb-4 bg-cover bg-center relative w-full overflow-hidden'  id='Hero'>
          <video autoPlay loop muted className=" h-full w-full rounded-lg object-cover md:object-contain   md:mt-0">
                <source src={assets.backgound} type="video/mp4" />
                Your browser does not support the video tag.
          </video>
        {/* <motion.div 
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='container absolute bottom-0 md:bottom-20 left-0 mx-auto py-4 px-6 md:px-20 md:-32 md:ml-11 text-white text-left'>
          <h2 className='text-4xl poppins-medium tracking-wider md:leading-none sm:text-4xl md:text-[50px] inline-block max-w-3xl font-semibold pt-20'>
            Innovate, Elevate, and Dominate the digital world. With <br /><span class='bebas-neue-regular underline decoration-black decoration-3 text-cyan-600'> TechNova,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br /> the future is now!</h2>
          <div className='mt-16 animate-bounce'> 
              <a href="#Contact" className='border border-white px-8 py-3 bebas-neue-regular tracking-wider rounded-lg'>Contact Us</a>
          </div>
          <hr className='left border-t-2 border-white mb-2 mt-6 mr-80 w-4/5 mx-auto'/> 
        </motion.div> */}
      </div>  
      <div className='px-8 py-6 md:px-28 md:py-28 min-h-screen mb-4 bg-cover bg-cente'>
        <div className='text-white md:ml-4 mb-8 text-xl md:text-2xl poppins-light'>
          <span className='text-blue-600 text-3xl text-center md:text-3xl text-glow1'> + </span>
          What we do
        </div>
        <div className='text-white flex flex-wrap md:flex-nowrap  md:w-[1232px] md:h-[320px] md:mx-12 justify-start '>
          <div className='md:w-96 text-4xl md:text-5xl poppins-medium leading-none '>
              Empowering Your Business <br/> with Cutting-Edge <br /><span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' > Solutions</span>.
          </div>
          <div className='text-xl  py-6 ml-3 md:px-14 md:ml-8 poppins-light'>
          <HiQrCode className='text-blue-600 md:text-5xl text-3xl rounded-lg shadow-glow'/>
          <p className='md:w-10/12 px-8 md:px-14 '>Pioneering the future of technology, TechNova provides<br/>
             end-to-end solutions in web development, AI, and <br/>
             cloud services, built for tomorrow's challenges.</p>
          </div>    
        </div>
      </div> 
      <Navbar />
    </div>
  )
}

export default Hero
