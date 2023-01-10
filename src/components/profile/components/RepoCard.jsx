import React from "react";

const RepoCard = ({ title, description, link }) => {
  return (
    <div class="p-4 md:w-1/3">
      <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div class="flex items-center mb-3">
          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-white text-lg title-font font-medium">{title}</h2>
        </div>
        <div class="flex-grow">
          <p class="leading-relaxed text-base">{description}</p>
          <a href={link} class="mt-3 text-indigo-400 inline-flex items-center">
            View Repository
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
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
