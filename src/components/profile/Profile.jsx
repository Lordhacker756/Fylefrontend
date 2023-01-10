import React, { useContext } from "react";
import Error from "./Error";
import Repositories from "./Repositories";
import user from "../../contexts/userContext";

const Profile = () => {
  const { userData } = useContext(user);

  return (
    <>
      {userData.msg === "Not Found" ? (
        <Error />
      ) : (
        <>
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
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
          <Repositories />)
        </>
      )}
    </>
  );
};

export default Profile;
