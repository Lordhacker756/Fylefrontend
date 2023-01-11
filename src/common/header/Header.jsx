import React from "react";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font absolute w-[100vw] top-0">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center items-center">
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src={logo} alt="" className="w-14 h-14" />
          <span class="ml-3 text-xl xl:block lg:hidden">GitHub Users🔍</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
