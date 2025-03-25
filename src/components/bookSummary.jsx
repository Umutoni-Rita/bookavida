import React from "react";
import coverUnavailable from "../assets/cover-unavailable.jpeg";

const BookSummary = ({ id, coverSrc, title, author, releaseYear, summary, onClose, download }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-md md:max-w-lg h-auto max-h-[90vh] bg-[#D4DE95] rounded-lg shadow-2xl p-6 relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3D4127] hover:text-[#636B2F] text-xl font-bold"
        >
          ×
        </button>
        <img
          src={coverSrc || coverUnavailable}
          alt={title}
          className="w-32 h-48 md:w-40 md:h-60 object-cover rounded-md mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-[#3D4127] text-center mb-2">
          {title || "Unknown Title"}
        </h1>
        <h2 className="text-lg font-semibold text-[#636B2F] text-center mb-2">
          {Array.isArray(author) ? author.join(', ') : author || "Unknown Author"}
        </h2>
        {releaseYear && (
          <p className="text-sm text-[#636B2F] text-center mb-4">
            Released: {releaseYear}
          </p>
        )}
        <p className="text-sm text-[#3D4127] mb-4">
          {summary || "No description available."}
        </p>
        {download && (
          <a
            href={download}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-[#636B2F] hover:text-[#3D4127] font-medium"
          >
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default BookSummary;