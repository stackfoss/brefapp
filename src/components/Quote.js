import React from 'react';
import quotesData from '../data/QuoteData.json';

const Quote = () => {
  // Get a random quote from the data
  const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];

  return (
    <main className='bg-[#365daa]'>
    <div className="container mx-auto p-8 bg-[#F3F4F6]">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-[#0d3b66]">Quote of the Day</h1>
      <div className="p-8 rounded-md shadow-md bg-gradient-to-br from-blue-200 to-blue-100">
        {randomQuote ? (
          <>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{randomQuote.quote}</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Author:</span> {randomQuote.author} |{' '}
              <span className="font-semibold">Book Title:</span> {randomQuote.bookTitle} |{' '}
              <span className="font-semibold">Category:</span> {randomQuote.category}
            </p>
          </>
        ) : (
          <p className="text-lg text-center text-gray-700">No quotes available.</p>
        )}
      </div>
    </div>
 </main>
  );
};

export default Quote;
