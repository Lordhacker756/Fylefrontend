import React, { useContext } from "react";
import RepoCard from "./components/RepoCard";
import user from "../../contexts/userContext";

const getRepositories = async (userName) => {
  const response = await fetch(
    `https://fyle-backend-1300.onrender.com/${userName}/repos`
  );
  const data = await response.json();
  return data.data;
};

//https://api.github.com/repos/Lordhacker756/open-dashboard/languages

const Repositories = () => {
  const { userData } = useContext(user);
  const repositories = getRepositories(userData.data.login);
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
        <div class="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
};

export default Repositories;
