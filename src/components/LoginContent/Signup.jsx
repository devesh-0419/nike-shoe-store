import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div
        className={` fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] grid items-center justify-items-center `}
      >
        <div className="absolute bg-theme w-[25rem] h-[70%]  sm:w-[20rem] xsm:w-[15rem] rounded-lg shadow shadow-slate-600">
          <div className="">
            <button
              type="button"
              className="absolute right-0 bg-white/20 p-0.5 m-2 rounded cursor-pointer active:scale-110"
            >
              <Link to="/">
                <XMarkIcon className="w-5 h-5" />
              </Link>
            </button>
          </div>
          <div className="flex items-center justify-around p-1 mt-5">
            <h1 className="font-bold text-[2rem] ">Signup</h1>
          </div>

          <form
            action=""
            className="flex flex-col items-start justify-center h-[70%] sm:text-sm xs:text-xs"
          >
            <label
              htmlFor="username"
              className="block m-4 uppercase font-bold text-slate-200 " 
            >
              UserName
            </label>
            <input
              type="text"
              id="username"
              className="ml-4 w-[90%] px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="UserName"
            />
            <label
              htmlFor="email"
              className="block m-4 uppercase font-bold text-slate-200"
            >
              email
            </label>
            <input
              type="text"
              id="email"
              className="ml-4 w-[90%] px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="Email"
            />
            <label
              htmlFor="password"
              className="block m-4 uppercase font-bold text-slate-200"
            >
              password
            </label>
            <input
              type="text"
              id="password"
              className="ml-4 w-[90%] px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="Password"
            />

            <button
              type="submit"
              className=" bg-blue-400 px-2.5 py-1 rounded mx-4 mt-7 border border-blue-800 shadow shadow-slate-800"
            >
              <Link to="/signup">
                <h1 className=" font-semibold text-slate-200 ">Signup</h1>
              </Link>
            </button>

            {/* <a href="#" className=' text-xs mx-4 text-blue-900'>forgot password?</a> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
