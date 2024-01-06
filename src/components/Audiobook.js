import React from 'react';

const Audiobook = () => {
  return (
    <section className="bg-gradient-to-b from-[#0d3b66] to-blue-500 text-white py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Listen to Audiobooks on YouTube</h2>
        <p className="text-lg mb-6">
          Immerse yourself in captivating audiobooks on our YouTube channel.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/@brefapp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0d3b66] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Explore Audiobooks
          </a>
        </div>
      </div>
    </section>
  );
};

export default Audiobook;
