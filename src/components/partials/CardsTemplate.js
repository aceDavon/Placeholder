import React from "react";
import CommonBtn from "../buttons/CommonBtn";

const CardsTemplate = ({ data, styles }) => {
  const { img, title, description, location } = data;
  return (
    <div className="px-2 py-4 basis-72 grow max-w-xs shadow-md shadow-primary-grey">
      <div className="p-1 space-y-2">
        <img src={img || ""} alt={title || ""} />
        <div className="space-y-4">
          <span className="text-2xl font-bold capitalize block leading-10">
            {title}
          </span>
          <span className="text-gray-500 text-sm leading-10">
            {description}
          </span>
        </div>
        <div className="flex justify-between">
          <select className="p-2 my-1" name="location" id="location">
            <option value={location}>{location}</option>
          </select>
          <CommonBtn data={{ label: "apply", styles }} />
        </div>
      </div>
    </div>
  );
};

export default CardsTemplate;
