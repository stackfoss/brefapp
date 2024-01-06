import React from 'react';
import quotesData from '../data/QuoteData.json';
import bookListsData from '../data/BookListsData.json';
import reviewsData from '../data/ReviewsData.json';

const Stats = () => {
  // Calculate counts from the data
  const quotesCount = quotesData.length;
  const bookListsCount = bookListsData.length;
  const reviewsCount = reviewsData.length;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-[#0d3b66]">Community Statistics</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Explore the numbers and impact of our community contributions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quotes Count */}
        <div className="p-4 rounded-md shadow-md bg-blue-500 text-white">
          <h2 className="text-2xl font-semibold mb-2">Inspirational Quotes</h2>
          <p className="text-lg">{quotesCount}</p>
          <p className="text-sm mt-2 opacity-75">Quotes Shared</p>
        </div>

        {/* Book Lists Count */}
        <div className="p-4 rounded-md shadow-md bg-green-500 text-white">
          <h2 className="text-2xl font-semibold mb-2">Curated Book Lists</h2>
          <p className="text-lg">{bookListsCount}</p>
          <p className="text-sm mt-2 opacity-75">Lists Created</p>
        </div>

        {/* Reviews Count */}
        <div className="p-4 rounded-md shadow-md bg-yellow-500 text-white">
          <h2 className="text-2xl font-semibold mb-2">Book Reviews</h2>
          <p className="text-lg">{reviewsCount}</p>
          <p className="text-sm mt-2 opacity-75">Reviews Shared</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
