import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="work" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">My Work</h2>

        <div className="relative w-full overflow-hidden">
          {/* Motion div for smooth looping animation */}
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["100%", "-100%"] }} // Moves from right to left
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }} // Continuous loop
          >
            {/* Work Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 w-64">
              <img
                src="./src/assets/images/image1.jpg"
                alt="In The Golden Afternoon illustration"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  In The Golden Afternoon
                </h3>
                <p className="text-gray-500">
                  b beautiful landscape illustration...
                </p>
              </div>
            </div>

            {/* Work Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 w-64">
              <img
                src="./src/assets/images/image2.jpg"
                alt="Cotton Candy Chills illustration"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Cotton Candy Chills
                </h3>
                <p className="text-gray-500">
                  A playful and whimsical design...
                </p>
              </div>
            </div>

            {/* Work Item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 w-64">
              <img
                src="./src/assets/images/image3.jpg"
                alt="CHUTPAGLU illustration"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">CHUTPAGLU</h3>
                <p className="text-gray-500">
                  A magical and colorful design...
                </p>
              </div>
            </div>

            {/* Work Item 4 (Duplicate for Smooth Looping) */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0 w-64">
              <img
                src="./src/assets/images/image3.jpg"
                alt="CHUTPAGLU illustration"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">CHUTPAGLU</h3>
                <p className="text-gray-500">
                  A magical and colorful design...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
