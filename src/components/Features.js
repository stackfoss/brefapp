import React from 'react';
import { FaBook, FaGlasses, FaFileAlt } from 'react-icons/fa';
import clsx from 'clsx';

const Features = () => {
  const features = [
    {
      heading: 'Unlock Book Insights',
      content: 'Dive into the depths of various genres and discover key insights from popular books.',
      icon: <FaBook size={20} />,
      bgColor: 'bg-[#1B2A41]',
      iconColor: 'text-[#1B2A41]',
    },
    {
      heading: 'Enhance Intellectual Growth',
      content: 'Immerse yourself in learning from a diverse range of books without any cost.',
      icon: <FaGlasses size={20} />,
      bgColor: 'bg-[#1B2A41]',
      iconColor: 'text-[#1B2A41]',
    },
    {
      heading: 'Accessible Book Summaries',
      content: 'Experience easy access to concise and insightful summaries of popular books.',
      icon: <FaFileAlt size={20} />,
      bgColor: 'bg-[#1B2A41]',
      iconColor: 'text-[#1B2A41]',
    },
  ];

  const genreColors = {
    Psychology: 'blue',
    Economics: 'green',
    Philosophy: 'purple',
    Sociology: 'yellow',
  };

  return (
    <main className="bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto p-8 md:p-2">
        <h1 className="mb-4 text-xl text-center font-extrabold leading-none tracking-tight text-[#0D3B66] md:text-2xl lg:text-4xl dark:text-white">
          Explore Book Summaries Simplified
        </h1>
        <p className="mb-6 text-lg text-center font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Discover concise and insightful summaries of your favorite books across various genres.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-gray-200 dark:text-white p-8 rounded-xl text-center relative transition-transform hover:scale-105 shadow-md ${feature.bgColor}`}
            >
              <div
                className={`flex items-center justify-center p-3 w-12 h-12 rounded-full absolute top-0 -mt-8 shadow-lg ${feature.iconColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mt-2 text-left">{feature.heading}</h3>
              <p className="text-lg mt-2 text-left">{feature.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 flex-wrap">
          {Object.keys(genreColors).map((genre, index) => (
            <a
              key={index}
              href={`/docs/intro`}
              className={clsx(
                'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white m-2',
                `bg-${genreColors[genre]}-500`
              )}
              title={genre}
            >
              {genre}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;

