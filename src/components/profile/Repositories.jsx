import React, { useContext, useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import user from "../../contexts/userContext";

// This is the component that will display all the repositories of the user
const Repositories = () => {
  const [loading, setLoading] = useState(false); // This is the state that will help us to identify if the repositories are fetched or not
  const [repositories, setRepositories] = useState([]); // This is the state that will hold the repositories of the user
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
    itemPerPage: 10,
  });
  const { userData } = useContext(user); // We are getting the user data from the context
  useEffect(() => {
    // This is the function that will fetch the repositories of the user
    const getRepositories = async (userName) => {
      try {
        setLoading(true); // We are setting the loading state to true
        const response = await fetch(`http://localhost:4000/${userName}/repos`);
        const data = await response.json();
        setRepositories(data.data);
        setPagination({
          ...pagination,
          currentPage: 1,
          totalPages: Math.floor(data.data.length / pagination.itemPerPage),
        });
        setLoading(false); // We are setting the loading state to false
      } catch (err) {
        console.error(err);
      }
    };
    getRepositories(userData.data.login); // We are calling the function to fetch the repositories of the user, we are passing the username of the user as parameter
  }, [userData.data.login]);

  const arr = [...Array(pagination.totalPages + 1).keys()].slice(1);
  return (
    <section className="text-gray-400 bg-gray-900 body-font pb-5">
      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
            USER WORK SAMPLES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Repositories
          </h1>
        </div>
        {loading ? (
          <h1 className="text-2xl w-[100vw] pb-20 animate-pulse font-medium title-font text-center text-white">
            Loading Repositories ...
          </h1>
        ) : (
          <div className="flex flex-wrap -m-4">
            {/* Here we are mapping through the repositories array and displaying the repositories */}
            {repositories ? (
              repositories.map(
                ({ name, html_url, description, languages_url }, index) => {
                  while (
                    index < pagination.currentPage * pagination.itemPerPage &&
                    index >=
                      (pagination.currentPage - 1) * pagination.itemPerPage
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
        )}
      </div>
      {loading ? null : (
        <div className="flex justify-center">
          {/*  This is the pagination component */}
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item mx-1">
                <button
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-200 hover:text-gray-600 hover:bg-gray-200 focus:shadow-none"
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
              {arr.map((page, index) => {
                return (
                  <li className="page-item mx-1" key={index}>
                    <button
                      className={`page-link relative block py-1.5 px-3 border-0 bg-transparent outline- transition-all duration-300 rounded-full hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
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
              <li className="page-item">
                <button
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-200 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                  onClick={() => {
                    if (pagination.currentPage < pagination.totalPages) {
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
      )}
    </section>
  );
};

export default Repositories;
