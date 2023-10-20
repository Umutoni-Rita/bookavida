import React from "react";
import coverUnavailable from "../assets/cover-unavailable.jpeg";

const BookSummary = ({
  id,
  coverSrc,
  title,
  author,
  releaseYear,
  bookLink,
}) => {
  
  return (
    <div className=" bg-gray-950 flex bg-opacity-20 absolute">
      <div className="md:w-2/5 w-[95%] h-[95%] flex flex-col justify-center items-center mx-auto my-6 bg-white rounded-lg">
        <img src={coverSrc || coverUnavailable} alt="cover" />
        <h1>{title || "title"}</h1>
      </div>
    </div> 
  );
};

export default BookSummary;
