import React, { useContext, useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import user from "../../contexts/userContext";

// This is the component that will display all the repositories of the user
const Repositories = () => {
  const [repositories, setRepositories] = useState([]); // This is the state that will hold the repositories of the user
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    itemPerPage: 10,
  });
  const { userData } = useContext(user); // We are getting the user data from the context
  useEffect(() => {
    // This is the function that will fetch the repositories of the user
    const getRepositories = async (userName) => {
      try {
        const response = await fetch(
          `https://fyle-backend-1300.onrender.com/${userName}/repos`
        );
        const data = await response.json();
        setRepositories(data.data);
        setPagination({
          ...pagination,
          currentPage: 1,
          totalPages: Math.floor(data.data.length / pagination.itemPerPage),
        });
      } catch (err) {
        console.log(err);
      }
    };
    getRepositories(userData.data.login); // We are calling the function to fetch the repositories of the user, we are passing the username of the user as parameter
  }, [userData.data.login]);

  const initPaginations = () => {
    let totalPages = pagination.totalPages;
    let pages = [];
    for (let i = 1; totalPages > 0; totalPages -= 10, i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section class="text-gray-400 bg-gray-900 body-font pb-5">
      <div class="container px-5  mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
            USER WORK SAMPLES
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">
            Repositories
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {/* Here we are mapping through the repositories array and displaying the repositories */}
          {repositories ? (
            repositories.map(
              ({ name, html_url, description, languages_url }, index) => {
                while (
                  index > pagination.currentPage * 10 &&
                  index <= pagination.currentPage * 10 + 10
                ) {
                  return (
                    <RepoCard // We are passing the props to the RepoCard component by destructuring the object
                      title={name}
                      description={description}
                      link={html_url}
                      languages={languages_url}
                      user={userData.data.login}
                      key={index}
                    />
                  );
                }
              }
            )
          ) : (
            <h1>Loading</h1> // If the repositories are not fetched, show loading
          )}
        </div>
      </div>
      <div class="flex justify-center">
        {/*  This is the pagination component */}
        <nav aria-label="Page navigation example">
          <ul class="flex list-style-none">
            <li class="page-item mx-1">
              <button
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-200 hover:text-gray-600 hover:bg-gray-200 focus:shadow-none"
                href="#"
                onClick={() => {
                  if (pagination.currentPage > 1) {
                    setPagination({
                      ...pagination,
                      currentPage: pagination.currentPage - 1,
                    });
                  }
                }}
              >
                Previous
              </button>
            </li>
            {initPaginations().map((page, index) => {
              return (
                <li class="page-item mx-1" key={index}>
                  <button
                    class={`page-link relative block py-1.5 px-3 border-0 bg-transparent outline- transition-all duration-300 rounded-full hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
                      index === pagination.currentPage - 1
                        ? "bg-gray-200 text-gray-800"
                        : "text-gray-200"
                    }`}
                    href="#"
                  >
                    {page}
                  </button>
                </li>
              );
            })}
            <li class="page-item">
              <button
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-200 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
                onClick={() => {
                  console.log(pagination.totalPages / 10);
                  if (pagination.currentPage < pagination.totalPages / 10) {
                    setPagination({
                      ...pagination,
                      currentPage: pagination.currentPage + 1,
                    });
                  }
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Repositories;
