import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D4127] mb-4">
        Welcome to Bookavida
      </h1>
      <p className="text-lg text-[#636B2F] max-w-md mb-6">
        Discover your next favorite book! Search our vast library or get
        personalized recommendations based on what you love.
      </p>
      <div className="space-x-4">
        <Link
          to="/search"
          className="px-6 py-3 bg-[#636B2F] text-white rounded-md hover:bg-[#3D4127] transition-colors"
        >
          Search Books
        </Link>
        <Link
          to="/recommendations"
          className="px-6 py-3 bg-transparent border border-[#636B2F] text-[#636B2F] rounded-md hover:bg-[#636B2F] hover:text-white transition-colors"
        >
          Get Recommendations
        </Link>
      </div>
    </section>
  );
}