import React from "react";
import error from "./assets/error.jpg";

const Error = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
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
