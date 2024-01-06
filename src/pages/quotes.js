import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import quotesData from '../data/QuoteData.json';

const Quotes = () => {
  const { siteConfig } = useDocusaurusContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 5;

  // Filter quotes based on search term and category
  const filteredQuotes = quotesData.filter(
    (quote) =>
      (quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || quote.category === selectedCategory)
  );

  // Get unique categories for filtering
  const categories = [...new Set(quotesData.map((quote) => quote.category))];

  // Calculate the indexes of the current page's quotes
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = filteredQuotes.slice(indexOfFirstQuote, indexOfLastQuote);

  // Quote of the Day (randomly selected)
  const randomQuoteOfTheDay = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

  return (
    <Layout
      title={`Inspirational Quotes - ${siteConfig.title}`}
      description="Discover inspiring quotes from various authors and books."
    >
      <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-lg md:w-3/4 lg:w-1/2 xl:w-2/3">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Quotes That Inspire</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore a collection of thought-provoking quotes from diverse authors and literary works.
        </p>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by quote, author, or book title"
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category filter dropdown */}
        <select
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Quote of the Day */}
        <div className="mb-8 border p-4 rounded-md shadow-md bg-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Quote of the Day</h2>
          {randomQuoteOfTheDay && (
            <>
              <p className="text-xl mb-4">{randomQuoteOfTheDay.quote}</p>
              <p className="text-gray-600">
                <span className="font-semibold">Author:</span> {randomQuoteOfTheDay.author} |{' '}
                <span className="font-semibold">Book Title:</span> {randomQuoteOfTheDay.bookTitle} |{' '}
                <span className="font-semibold">Category:</span> {randomQuoteOfTheDay.category}
              </p>
            </>
          )}
        </div>

        {/* Display filtered quotes */}
        {currentQuotes.length === 0 ? (
          <p className="text-lg">No quotes found.</p>
        ) : (
          currentQuotes.map((quote, index) => (
            <div key={index} className="mb-8 border p-4 rounded-md shadow-md bg-white">
              <p className="text-xl mb-4">{quote.quote}</p>
              <p className="text-gray-600">
                <span className="font-semibold">Author:</span> {quote.author} |{' '}
                <span className="font-semibold">Book Title:</span> {quote.bookTitle} |{' '}
                <span className="font-semibold">Category:</span> {quote.category}
              </p>
            </div>
          ))
        )}

        {/* Pagination controls */}
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mb-4 md:mb-0"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="text-gray-700 mb-4 md:mb-0">
            Page {currentPage} of {Math.ceil(filteredQuotes.length / quotesPerPage)}
          </span>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredQuotes.length / quotesPerPage)}
          >
            Next Page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Quotes;
