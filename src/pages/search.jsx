import React from "react";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../utils/api";
import coverUnavailable from "../assets/cover-unavailable.jpeg";
import Loader from "../components/loader";
import Book from "../components/book";

export default function SearchBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookDetail, setBookDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api_url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}&maxResults=${35}`;

  const generateBook = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setIsLoading(true);
      axios
        .get(api_url)
        .then((res) => {
          setBookDetail(res.data.items);
          console.log(bookDetail);
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
    <section>
      <div className="w-full flex-col justify-center items-center p-10 bg-orange-300">
      <div className="my-4 text-center">
        <p className="text-orange-800">
          Welcome to the Bookavida! Enter the title, author, or any keyword related to the book you're looking for. Press Enter or click "Search" to get results.
        </p>
      </div>
        <div><input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={generateBook}
          className=" p-2 w-10/12"
        />
        <button
          className="px-5 py-2 m-3 border-orange-500 border rounded-md"
          onClick={generateBook}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Search"}
        </button></div>
      </div>
      

      <div className="flex flex-wrap justify-around m-3">
        {bookDetail.length === 0 ? (
          <div>
            <p className="text-gray-400">Results will be displayed here</p>
          </div>
        ) : (
          bookDetail.map((book) => (
            <Book
              key={book.id}
              coverSrc={
                book.volumeInfo.imageLinks?.smallThumbnail || coverUnavailable
              }
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors || []}
              bookLink={book.volumeInfo.previewLink}
              releaseYear={book.volumeInfo.publisherDate}
              bookDescription={book.volumeInfo.description}
              download={book.accessInfo.pdf.acsTokenLink}
            />
          ))
        )}
      </div>
    </section>
  );
}
