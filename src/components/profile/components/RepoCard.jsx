import React, { useEffect, useState } from "react";

const RepoCard = ({ title, description, link, languages_url, user }) => {
  const [languages, setLanguages] = useState([]); // This is the state that will hold the languages of the repository
  useEffect(() => {
    // This is the function that will fetch the languages of the repository
    const getRepoLanguage = async () => {
      try {
        const response = await fetch(
          `https://fyle-backend-1300.onrender.com/repos/${user}/${title}/topics`
        );
        const data = await response.json();
        console.log(data.data.names.length === 0);
        setLanguages(data.data.names); // We are setting the languages state with the data we got from the API
      } catch (err) {
        console.log(err);
      }
    };
    getRepoLanguage(languages_url); // We are calling the function to fetch the languages of the repository, we are passing the languages_url of the repository as parameter
  }, [languages_url]);

  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg title-font font-medium">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            {!description
              ? "No description available for the repository"
              : description}
          </p>
          <div className="languages my-2 grid grid-cols-4 gap-1">
            {languages.length === 0 ? (
              <button
                type="button"
                className="block px-3 py-[2px] border-[1px] border-green-500 text-green-500 font-medium text-[8px] uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                No Topic
              </button>
            ) : (
              languages.map((language) => {
                return (
                  <button
                    type="button"
                    className="block px-3 py-[2px] border-[1px] border-green-500 text-green-500 font-medium text-[8px] uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    {language}
                  </button>
                );
              })
            )}
          </div>
          <a href={link} className=" text-indigo-400 inline-flex items-center">
            View Repository
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
