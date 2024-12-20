import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [isVisible, setIsVisible] = useState(true);

  const openPopup = (url) => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},resizable=no`
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg md:w-[30rem] w-[20rem] md:h-[40rem] p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsVisible(false)}
        >
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-center mb-6 mt-8">
          Log in to Wanderlog
        </h2>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center hover:bg-blue-700"
            onClick={() => openPopup("https://www.facebook.com")}
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2 h-5" />
            Log in with Facebook
          </button>
          <button
            className="w-full bg-gray-100 text-black py-2 rounded flex items-center justify-center hover:bg-gray-200"
            onClick={() => openPopup("https://accounts.google.com")}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 h-5" />
            Log in with Google
          </button>
          <button
            className="w-full bg-black text-white py-2 rounded flex items-center justify-center hover:bg-gray-800"
            onClick={() => openPopup("https://appleid.apple.com")}
          >
            <FontAwesomeIcon icon={faApple} className="mr-2 h-5" />
            Log in with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email and Password Fields */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => console.log("Toggle password visibility")}
            >
              &#x1f441;
            </button>
          </div>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline block text-right"
          >
            Forgot password
          </a>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Log in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account yet?{" "}
          <a href="Signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
