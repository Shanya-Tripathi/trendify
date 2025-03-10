import React from "react";

const Chup = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src="./src/assets/images/[000569].jpg"
        alt="Sleeping Buddha Statue"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          UMSAS Handmade Stone Sleeping Buddha Statue, White
        </h2>
        <p className="text-lg text-gray-700 font-bold">₹899.00</p>
        <p className="text-sm text-green-600">In Stock</p>
        <p className="text-sm text-gray-500">
          FREE delivery Wednesday, 19 March
        </p>
        <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
        <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default chup;
