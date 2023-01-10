import React, { useContext } from "react";
import user from "../../contexts/userContext";
import error from "./assets/error.jpg";

const Error = () => {
  const { setUserData } = useContext(user);

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <button
        onClick={() => {
          setUserData({ msg: "", data: {} });
        }}
        class="text-indigo-400 absolute top-2 md:top-5 right-5 w-52 cursor-pointer justify-center flex items-center"
      >
        Search Again
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <div class="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={error}
        />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            The User Was Not Found!
          </h1>
          <p class="mb-8 leading-relaxed">Please enter a valid Username!</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
