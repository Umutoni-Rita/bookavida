import React, { useState } from "react";
import axios from "axios";
import coverUnavailable from "../assets/cover-unavailable.jpeg";
import Loader from "../components/loader"; // Note: Capitalized for consistency
import Book from "../components/book";   // Note: Capitalized for consistency

export default function Recommendations() {
  const [recBook1, setRecBook1] = useState("");
  const [recBook2, setRecBook2] = useState("");
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  const [recLoading, setRecLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use your Render URL for production; localhost for local testing
  const rec_api_url = "http://127.0.0.1:8000/recommend"; // Replace with "https://your-app.onrender.com/recommend" when deploying

  const handleRecommend = (event) => {
    if (event.type === "click" && recBook1 && recBook2) {
      setRecLoading(true);
      setError(null); // Clear previous errors
      axios
        .get(
          `${rec_api_url}?book1=${encodeURIComponent(recBook1)}&book2=${encodeURIComponent(recBook2)}&rating1=${rating1}&rating2=${rating2}`
        )
        .then((res) => {
          if (res.data.error) {
            setError(res.data.error);
            setRecommendations([]);
          } else if(res.data.warning){
            setError(res.data.warning)
            setRecommendations(res.data.titles.map(title => ({ title, summary: "No summary available" })));
          } else {
            setRecommendations(res.data.recommendations || []);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Something went wrong. Please try again.");
          setRecommendations([]);
        })
        .finally(() => setRecLoading(false));
    }
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#3D4127] mb-4">
        Get Recommendations
      </h2>
      <div className="bg-[#D4DE95] p-6 rounded-lg shadow-md mb-6">
      <div className="flex flex-col mb-4">
        <input
          type="text"
          value={recBook1}
          onChange={(e) => setRecBook1(e.target.value)}
          className="w-full p-3 mb-4 border border-[#BAC095] rounded-md focus:outline-none focus:ring-2 focus:ring-[#636B2F] text-[#3D4127] placeholder-[#636B2F]"
          placeholder="First book title..."
        />
        <select
            value={rating1}
            onChange={(e) => setRating1(parseInt(e.target.value))}
            className="mt-2 p-2 border border-[#BAC095] rounded-md focus:outline-none focus:ring-2 focus:ring-[#636B2F] text-[#3D4127]"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          </div>
          <div className="flex flex-col mb-4">
        <input
          type="text"
          value={recBook2}
          onChange={(e) => setRecBook2(e.target.value)}
          className="w-full p-3 mb-4 border border-[#BAC095] rounded-md focus:outline-none focus:ring-2 focus:ring-[#636B2F] text-[#3D4127] placeholder-[#636B2F]"
          placeholder="Second book title..."
        />
        <select
            value={rating2}
            onChange={(e) => setRating2(parseInt(e.target.value))}
            className="mt-2 p-2 border border-[#BAC095] rounded-md focus:outline-none focus:ring-2 focus:ring-[#636B2F] text-[#3D4127]"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          </div>
        <button
          onClick={handleRecommend}
          className="w-full px-5 py-3 bg-[#636B2F] text-white rounded-md hover:bg-[#3D4127] transition-colors disabled:opacity-50"
          disabled={recLoading || !recBook1 || !recBook2}
        >
          {recLoading ? <Loader /> : "Get Recommendations"}
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {error ? (
          <p className="text-red-500 italic">{error}</p>
        ) : recommendations.length === 0 ? (
          <p className="text-[#636B2F] italic">
            Recommendations will appear here.
          </p>
        ) : (
          recommendations.map((rec, index) => (
            <Book
              key={`rec-${index}`}
              id={`rec-${index}`}
              coverSrc={rec.cover || coverUnavailable}
              title={rec.title}
              author={Array.isArray(rec.authors) ? rec.authors.join(', ') : rec.authors || "Unknown Author"}
              bookDescription={rec.summary}
            />
          ))
        )}
      </div>
    </section>
  );
}