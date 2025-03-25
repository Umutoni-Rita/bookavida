import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../utils/api";
import coverUnavailable from "../assets/cover-unavailable.jpeg";
import Loader from "../components/loader";
import Book from "../components/book";

export default function SearchBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookDetail, setBookDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api_url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}&maxResults=35`;

  const generateBook = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setIsLoading(true);
      axios
        .get(api_url)
        .then((res) => {
          setBookDetail(res.data.items || []);
          console.log(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#D4DE95] via-white to-[#BAC095]">
      {/* Header Section */}
      <div className="w-full flex flex-col justify-center items-center p-6 md:p-10 bg-[#BAC095] shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D4127] mb-2">
          Bookavida
        </h1>
        <p className="text-[#636B2F] text-center max-w-md mb-4">
          Search for books by title, author, or keyword. Hit Enter or click
          "Search" to explore!
        </p>
        <div className="flex w-full max-w-lg">
          <input
            type="text"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={generateBook}
            className="flex-grow p-3 rounded-l-md border border-[#BAC095] bg-white focus:outline-none focus:ring-2 focus:ring-[#636B2F] text-[#3D4127] placeholder-[#636B2F]"
            placeholder="Enter a book title or author..."
          />
          <button
            className="px-5 py-3 bg-[#636B2F] text-white rounded-r-md hover:bg-[#3D4127] transition-colors duration-200 disabled:opacity-50"
            onClick={generateBook}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Search"}
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="flex flex-col justify-center items-center p-6">
        {bookDetail.length === 0 ? (
          <p className="text-[#636B2F] italic">
            Results will appear here after you search.
          </p>
        ) : (
          bookDetail.map((book) => (
            <Book
              key={book.id}
              coverSrc={
                book.volumeInfo.imageLinks?.smallThumbnail || coverUnavailable
              }
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors || ["Unknown Author"]}
              bookLink={book.volumeInfo.previewLink}
              releaseYear={book.volumeInfo.publishedDate}
              bookDescription={book.volumeInfo.description}
              download={book.accessInfo.pdf.acsTokenLink}
            />
          ))
        )}
      </div>
    </section>
  );
}