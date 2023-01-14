import React, { useContext, useRef, useState } from "react";
import Header from "../../common/header/Header";
import logo from "./assets/github.webp";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import user from "../../contexts/userContext";

const Login = () => {
  const { setUserData } = useContext(user);
  const [loading, setLoading] = useState(false);
  const userRef = useRef(null);

  const getUserDetails = async (e) => {
    e.preventDefault();
    if (!userRef.current.value) {
      const element = document.getElementById("hero-field");
      element.classList.add("border-red-500");
      element.placeholder = "Please enter a valid username!!";
    } else {
      setLoading(true);
      const response = await fetch(
        `https://fyle-backend-1300.onrender.com/${userRef.current.value}`
      );
      const data = await response.json();

      if (data.msg === "No User Found.!") {
        setUserData({ msg: "not found", data: {} });
      } else {
        setUserData({ msg: data.msg, data: data.data });
      }

      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh]  bg-gray-900 flex flex-col justify-around">
      <section className="text-gray-400 bg-gray-900 body-font">
        <Header />
        <div className="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pl-10 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={logo}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col xl:items-start xl:text-left items-center text-center 2xl:pl-48">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Get Details of Any GitHub User!
            </h1>
            <p className="mb-8 leading-relaxed">
              Enter the username of the GitHub user you want to get details of.
            </p>
            <form
              onSubmit={getUserDetails}
              className="flex w-full md:justify-start justify-center items-end"
            >
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Github Username
                </label>
                <input
                  type="text"
                  id="hero-field"
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ref={userRef}
                  minLength="3"
                />
              </div>
              <button
                type="submit"
                className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
                  loading ? "animate-pulse" : ""
                }`}
              >
                {loading ? "Loading..." : "Get Details"}
              </button>
            </form>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              github.com/Username
            </p>
            <div className="flex lg:flex-row md:flex-col text-gray-300">
              <a
                href="https://www.linkedin.com/in/theutkarshmishra/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                  <img className="h-10 w-10" src={linkedin} alt="" />
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-400 mb-1">
                      Checkout My
                    </span>
                    <span className="title-font font-medium">LinkedIn</span>
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/Lordhacker756/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                  <img className="h-10 w-10" src={github} alt="" />
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-400 mb-1">
                      Checkout My
                    </span>
                    <span className="title-font font-medium">GitHub</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
