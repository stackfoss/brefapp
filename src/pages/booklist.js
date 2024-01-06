import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import bookListsData from '../data/BookListsData.json';

const BookList = () => {
  const { siteConfig } = useDocusaurusContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Filter book lists based on search term and category
  const filteredBookLists = bookListsData.filter(
    (list) =>
      (list.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        list.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || list.category === selectedCategory)
  );

  // Get unique categories for filtering
  const categories = [...new Set(bookListsData.map((list) => list.category))];

  // Calculate the indexes of the current page's book lists
  const indexOfLastList = currentPage * booksPerPage;
  const indexOfFirstList = indexOfLastList - booksPerPage;
  const currentBookLists = filteredBookLists.slice(indexOfFirstList, indexOfLastList);

  return (
    <Layout
      title={`Curated Book Lists - ${siteConfig.title}`}
      description="Explore curated lists of the best books in various categories."
    >
      <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-lg md:w-3/4 lg:w-1/2 xl:w-2/3">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Curated Book Lists</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the best books handpicked for you in different categories and timeframes.
        </p>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or category"
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-purple-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category filter dropdown */}
        <select
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-purple-300"
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

        {/* Display filtered book lists */}
        {currentBookLists.length === 0 ? (
          <p className="text-lg">No curated book lists found.</p>
        ) : (
          currentBookLists.map((list, index) => (
            <div key={index} className="mb-8 border p-4 rounded-md shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">{list.title}</h2>
              <p className="text-gray-600 mb-4">{list.description}</p>
              <ul>
                {list.books.map((book, bookIndex) => (
                  <li key={bookIndex} className="mb-4">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">{book.title}</h3>
                    <p className="text-gray-600">
                      <span className="font-semibold">Author:</span> {book.author} |{' '}
                      <span className="font-semibold">Year:</span> {book.year} |{' '}
                      <span className="font-semibold">Rating:</span> {book.rating}
                    </p>
                    <p className="text-gray-700">{book.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}

        {/* Pagination controls */}
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 mb-4 md:mb-0"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="text-gray-700 mb-4 md:mb-0">
            Page {currentPage} of {Math.ceil(filteredBookLists.length / booksPerPage)}
          </span>
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredBookLists.length / booksPerPage)}
          >
            Next Page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default BookList;
