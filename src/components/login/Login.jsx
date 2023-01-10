import React, { useContext, useRef } from "react";
import Header from "../../common/header/Header";
import logo from "./assets/github.webp";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import user from "../../contexts/userContext";
import axios from "axios";

const Login = () => {
  const { userName, setUserName, setUserData } = useContext(user);

  const userRef = useRef(null);

  const getUserDetails = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://fyle-backend-1300.onrender.com/${userRef.current.value}}`
    );
    setUserData(response.data);
  };

  return (
    <>
      <Header />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={logo}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Get Details of Any GitHub User!
            </h1>
            <p class="mb-8 leading-relaxed">
              Enter the username of the GitHub user you want to get details of.
            </p>
            <form
              onSubmit={getUserDetails}
              class="flex w-full md:justify-start justify-center items-end"
            >
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-400">
                  Github Username
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name=""
                  class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ref={userRef}
                />
              </div>
              <button
                type="submit"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Get Details
              </button>
            </form>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
              github.com/Username
            </p>
            <div class="flex lg:flex-row md:flex-col text-gray-300">
              <a
                href="https://www.linkedin.com/in/theutkarshmishra/"
                target="_blank"
                rel="noreferrer"
              >
                <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                  <img className="h-10 w-10" src={linkedin} alt="" />
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-400 mb-1">Checkout My</span>
                    <span class="title-font font-medium">LinkedIn</span>
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/Lordhacker756/"
                target="_blank"
                rel="noreferrer"
              >
                <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                  <img className="h-10 w-10" src={github} alt="" />
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-400 mb-1">Checkout My</span>
                    <span class="title-font font-medium">GitHub</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
