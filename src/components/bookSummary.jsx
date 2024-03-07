import React from 'react';
import coverUnavailable from '../assets/cover-unavailable.jpeg';

const BookSummary = ({ id, coverSrc, title, author, releaseYear, summary, onClose, download }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-50 bg-amber-300">
            <div className="md:w-2/5 w-[95%] h-[95%] flex flex-col justify-center items-center mx-auto my-6 bg-white rounded-lg relative p-4">
                <button onClick={onClose} className="absolute top-2 right-2 text-amber-900 hover:text-amber-300">
                    X
                </button>
                <img src={coverSrc || coverUnavailable} alt="cover" className="w-48 h-auto mb-4" />
                <h1 className="text-xl font-bold mb-2">{title || 'Title'}</h1>
                <h2 className="text-lg font-semibold mb-2">{author.join(', ') || 'Author'}</h2>
                <p className="text-sm text-gray-700 mb-4">{summary || 'Summary'}</p>
                {/* Additional content here */}
            </div>
        </div>
    );
};

export default BookSummary;
