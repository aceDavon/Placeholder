import React from "react";
import { CategoryIcon, DropdownIcon, LocationPin, SearchIcon } from "../../icons";
import BannerImg from './img/cover-career.png'

const Banner = () => {
  return (
    <div className="w-full h-96 pt-20 bg-gradient-to-r from-gray-500 to-gray-900 text-white">
      <img
        src={BannerImg}
        alt="bg-img"
        className="w-full top-0 object-cover absolute mix-blend-overlay"
      />
      <div className="flex flex-col text-white justify-end items-center mt-12">
        <span className="flex justify-end w-1/3 mr-36 font-semibold">
          Search for Jobs
        </span>
        <h1 className="text-7xl font-extrabold">Careers</h1>
      </div>
      <div className="bg-white rounded-lg shadow shadow-black py-2 px-2 w-9/12 mx-auto mt-16 flex justify-between items-center">
        <div className="flex items-center">
          <SearchIcon />
          <input
            type="text"
            className="border-none p-2 rounded-lg z-50 bg-secondary-grey focus:ml-2"
            placeholder="search..."
          />
        </div>
        <div className="flex items-center">
          <CategoryIcon />
          <input
            type="text"
            className="border-none p-2 rounded-lg z-50 bg-secondary-grey focus:ml-2"
            placeholder="select your category"
          />
          <DropdownIcon />
        </div>
        <div className="flex items-center">
          <LocationPin />
          <input
            type="text"
            className="border-none p-2 rounded-lg z-50 bg-secondary-grey focus:ml-2"
            placeholder="select your category"
          />
          <DropdownIcon />
        </div>
        <button className="bg-primary-green shadow shadow-primary-grey rounded-lg p-2 border-none">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Banner;
