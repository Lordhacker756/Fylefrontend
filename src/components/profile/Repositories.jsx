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
    </section>
  );
};

export default Repositories;
