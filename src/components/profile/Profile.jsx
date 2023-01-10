import React, { useContext } from "react";
import Error from "./Error";
import Repositories from "./Repositories";
import user from "../../contexts/userContext";

const Profile = () => {
  const { userData, setUserData } = useContext(user);

  return (
    <>
      {userData.msg === "not found" ? (
        <Error />
      ) : (
        <>
          <section class="text-gray-400 bg-gray-900 body-font">
            <button
              onClick={() => {
                setUserData({ msg: "", data: {} });
              }}
              class="text-indigo-400 absolute top-2 md:top-5 right-5 w-52 cursor-pointer justify-center flex items-center"
            >
              Search New User
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
            <div class="container px-5 py-10 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                  GitHub User
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Here are the details of the GitHub user you searched for.
                </p>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/2">
                  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src="https://dummyimage.com/200x200"
                    />
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-white">
                        Holden Caulfield
                      </h2>
                      <h3 class="text-gray-500 mb-3">UI Developer</h3>
                      <p class="mb-4">
                        DIY tote bag drinking vinegar cronut adaptogen squid
                        fanny pack vaporware.
                      </p>
                      <span class="inline-flex">Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Repositories />
        </>
      )}
    </>
  );
};

export default Profile;
