import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={assets.backgound} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Bags Image - Positioned at the bottom of the video */}
      <img src={assets.bags} className="absolute bottom-0 w-full object-cover z-10" alt="bags-image" />

      {/* Stacked Logos - Positioned in the center */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative">
          {/* Background Logo (Slightly behind) */}
          <img src={assets.logo_bhnd} className="absolute top-0 left-0 w-full opacity-80" alt="background-logo" />
          
          {/* Main Hero Logo (On Top) */}
          <img src={assets.hero} className="absolute bottom-0 w-full" alt="hero-logo" />
        </div>
      </div>

    </div>
  )
}

export default Hero
