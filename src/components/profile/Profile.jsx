import React, { useContext } from "react";
import Error from "./Error";
import Repositories from "./Repositories";
import user from "../../contexts/userContext";

// This is the profile component, this will be used to show the profile of the user
const Profile = () => {
  const { userData, setUserData } = useContext(user); // This is the user data, fetched from the user context and this will be used to show the profile of the user and to share the user data to all the children components of this component
  const { data } = userData; // This is the user data, fetched from the user data state and this will be used to show the profile of the user
  return (
    <div className=" bg-gray-900 body-font h-[100vh]">
      {userData.msg === "not found" ? (
        // If the user data is not found, show the error component
        <Error />
      ) : (
        <>
          {/* Else show the details of the user, from the data extracted from the context */}
          <section className="text-gray-400 bg-gray-900 body-font">
            <button
              onClick={() => {
                setUserData({ msg: "", data: {} });
              }}
              className="text-indigo-400 absolute top-2 md:top-5 right-5 w-52 cursor-pointer justify-center flex items-center"
            >
              Search New User
              <svg
                className="w-4 h-4 ml-2"
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
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                  {data.name}
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Here are the details of the repositories of {data.name}
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left md:grid md:grid-cols-2">
                    <a
                      className="w-[250px]"
                      href={data.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg cursor-pointer object-cover sm:mb-0 mb-4 max-w-[100%]"
                        src={data.avatar_url}
                      />
                    </a>
                    <div className="flex-grow sm:pl-8 md:pl-0">
                      <h2 className="title-font font-medium text-lg text-white">
                        {data.login}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{data.company}</h3>
                      <p className="mb-4">{data.bio}</p>
                      <span className="inline-flex">????{data.location}</span>
                      {data.email && (
                        <>
                          <br />
                          <span className="inline-flex">
                            ????Email: {data.email}
                          </span>
                        </>
                      )}
                      {data.blog && (
                        <>
                          <br />
                          <span className="inline-flex">
                            <a href={data.blog}>???Blog</a>
                          </span>
                        </>
                      )}
                      {data.twitter_username && (
                        <>
                          <br />
                          <span className="inline-flex">
                            Twitter - @{data.twitter_username}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Component to show the list of all the repositories of the user */}
          <Repositories />
        </>
      )}
    </div>
  );
};

export default Profile;
