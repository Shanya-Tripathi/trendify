import React from "react";

const LoginForm = () => {
  return (
    <div class="z-10  bg-[url('https://i.pinimg.com/originals/6a/cd/07/6acd0780a4c693b2cf8da52b5c44b18e.gif')] bg-cover bg-center flex font-jersey justify-center items-center min-h-screen">
      <div class="z-20 rounded-lg p-8 max-w-sm w-full shadow-2xl backdrop-blur-sm border-white-950 border-2">
        <h1 class="text-center text-3xl text-black mb-6 font-bold font-gloria ">
          Login
        </h1>
        <form action="">
          <div class="mb-4">
            <label class="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              class="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:right-2 focus:ring-blue-500"
              type="email"
              name=""
              placeholder="email"
            />
          </div>
          <div class=" mb-5">
            <label class="block text-sm font-medium text-black mb-2" for="">
              Password
            </label>
            <input
              class="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:right-2 focus:ring-blue-500"
              type="password"
              name=""
              placeholder="Password"
            />
          </div>
          <button
            class="w-full bg-blue-600 text-black py-2  rounded-md hover:bg-blue-800 shadow-2xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
