import React, { useContext, useState, useEffect } from "react";
import RepoCard from "./components/RepoCard";
import user from "../../contexts/userContext";

const getRepoLanguage = async (repoName) => {
  try {
    const response = await fetch(
      "http://localhost:4000/repos/Lordhacker756/open-dashboard/languages"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const { userData } = useContext(user);
  useEffect(() => {
    const getRepositories = async (userName) => {
      try {
        const response = await fetch(`http://localhost:4000/${userName}/repos`);
        const data = await response.json();
        setRepositories(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRepositories(userData.data.login);
  }, []);

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
          {repositories ? (
            repositories.map(
              ({ name, html_url, description, languages_url }, index) => {
                return (
                  <RepoCard
                    title={name}
                    description={description}
                    link={html_url}
                    languages={languages_url}
                    key={index}
                  />
                );
              }
            )
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
      <div class="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul class="flex list-style-none">
            <li class="page-item disabled">
              <a
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                1
              </a>
            </li>
            <li class="page-item active">
              <a
                class="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                href="#"
              >
                2 <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                3
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Repositories;
