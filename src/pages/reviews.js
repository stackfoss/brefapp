import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import reviewsData from '../data/ReviewsData.json';

const Reviews = () => {
  const { siteConfig } = useDocusaurusContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Filter reviews based on search term and category
  const filteredReviews = reviewsData.filter(
    (review) =>
      (review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || review.category === selectedCategory)
  );

  // Get unique categories for filtering
  const categories = [...new Set(reviewsData.map((review) => review.category))];

  // Calculate the indexes of the current page's reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <Layout
      title={`Book Reviews - ${siteConfig.title}`}
      description="Explore book reviews and recommendations from various genres."
    >
      <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-lg md:w-3/4 lg:w-1/2 xl:w-2/3">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Book Reviews</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover insightful book reviews and recommendations across various genres.
        </p>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title, author, or category"
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-green-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category filter dropdown */}
        <select
          className="border p-2 mb-4 rounded-md w-full focus:outline-none focus:ring focus:border-green-300"
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

        {/* Display filtered reviews */}
        {currentReviews.length === 0 ? (
          <p className="text-lg">No reviews found.</p>
        ) : (
          currentReviews.map((review, index) => (
            <div key={index} className="mb-8 border p-4 rounded-md shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">{review.title}</h2>
              <p className="text-gray-600">
                <span className="font-semibold">Author:</span> {review.author} |{' '}
                <span className="font-semibold">Category:</span> {review.category}
              </p>
              <p className="text-lg mt-4">{review.content}</p>
            </div>
          ))
        )}

        {/* Pagination controls */}
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 mb-4 md:mb-0"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="text-gray-700 mb-4 md:mb-0">
            Page {currentPage} of {Math.ceil(filteredReviews.length / reviewsPerPage)}
          </span>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredReviews.length / reviewsPerPage)}
          >
            Next Page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
