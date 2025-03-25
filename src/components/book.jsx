import React, { useState } from "react";
import BookSummary from "./bookSummary";

export default function Book({ id, coverSrc, title, author, releaseYear, bookDescription, download }) {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handleSummaryClick = () => {
    setIsSummaryOpen(!isSummaryOpen);
  };

  return (
    <div
      key={id}
      className="w-full flex mb-6 p-4 bg-white border border-[#BAC095] rounded-lg shadow-md hover:shadow-xl hover:border-[#636B2F] transition-all duration-200 cursor-pointer"
      title={title}
    >
      <div className="flex items-start">
        <img
          src={coverSrc}
          alt="Book cover"
          className="w-24 h-36 md:w-32 md:h-48 object-cover rounded-md mr-4"
        />
        <div className="flex flex-col flex-1">
          <h1 className="font-semibold text-lg text-[#3D4127] truncate mb-1">
            {title}
          </h1>
          <h2 className="font-medium text-sm text-[#636B2F] mb-1">
            {Array.isArray(author) ? author.join(', ') : author}
          </h2>
          {releaseYear && (
            <p className="font-normal text-xs text-[#636B2F] mb-2">
              Released: {releaseYear}
            </p>
          )}
          <button
            onClick={handleSummaryClick}
            className="text-[#636B2F] hover:text-[#3D4127] text-sm font-medium"
          >
            See description...
          </button>
        </div>
      </div>
      {isSummaryOpen && (
        <BookSummary
          id={id}
          coverSrc={coverSrc}
          title={title}
          author={author}
          releaseYear={releaseYear}
          summary={bookDescription}
          onClose={handleSummaryClick}
          download={download}
        />
      )}
    </div>
  );
}