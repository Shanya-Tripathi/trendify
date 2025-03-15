import React, { useEffect } from "react";

const LoginForm = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (
        !document.querySelector("#password:is(:focus)") &&
        !document.querySelector("#password:is(:user-invalid)")
      ) {
        const eyes = document.getElementsByClassName("eye");

        for (let eye of eyes) {
          const x = eye.getBoundingClientRect().left + 10;
          const y = eye.getBoundingClientRect().top + 10;
          const rad = Math.atan2(event.pageX - x, event.pageY - y);
          const rot = (rad * (180 / Math.PI) * -1) + 180;

          eye.style.transform = `rotate(${rot}deg)`;
        }
      }
    };

    const handleFocusPassword = () => {
      document.getElementById("face").style.transform = "translateX(30px)";
      const eyes = document.getElementsByClassName("eye");

      for (let eye of eyes) {
        eye.style.transform = `rotate(100deg)`;
      }
    };

    const handleFocusOutPassword = (event) => {
      document.getElementById("face").style.transform = "translateX(0)";
      if (event.target.checkValidity()) {
        document.getElementById("ball").classList.toggle("sad");
      } else {
        document.getElementById("ball").classList.toggle("sad");
        const eyes = document.getElementsByClassName("eye");

        for (let eye of eyes) {
          eye.style.transform = `rotate(215deg)`;
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    const passwordField = document.getElementById("password");
    if (passwordField) {
      passwordField.addEventListener("focus", handleFocusPassword);
      passwordField.addEventListener("focusout", handleFocusOutPassword);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (passwordField) {
        passwordField.removeEventListener("focus", handleFocusPassword);
        passwordField.removeEventListener("focusout", handleFocusOutPassword);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-5xl mx-auto">
        {/* Form Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <div className="logo flex items-center justify-center w-10 h-10 rounded-full bg-black text-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-center">Log in to your Account</h1>
          <p className="text-center text-gray-600 mb-4">
            Welcome back! Please enter your information.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="form-control w-full px-4 py-2 border rounded-lg" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="form-control w-full px-4 py-2 border rounded-lg"
                  minLength="4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute top-3 right-3 w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5"
                  />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
            >
              Log In
            </button>
          </form>
        </section>

        {/* Animated Ball */}
        <section className="form__animation flex items-center justify-center">
          <div id="ball" className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
            <div id="face" className="relative">
              <div className="flex gap-4">
                <div className="eye_wrap w-6 h-6 bg-white rounded-full">
                  <span className="eye block w-3 h-3 bg-black rounded-full"></span>
                </div>
                <div className="eye_wrap w-6 h-6 bg-white rounded-full">
                  <span className="eye block w-3 h-3 bg-black rounded-full"></span>
                </div>
              </div>
              <div className="w-5 h-5 bg-black rounded-full mt-2"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginForm;
