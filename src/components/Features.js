import React from 'react';
import { FaChalkboardTeacher, FaCog, FaBookReader } from 'react-icons/fa';
import clsx from 'clsx'; // Import clsx library

const Features = () => {
  const features = [
    {
      heading: 'Learn Without Boundaries',
      content: 'Explore unlimited knowledge from anywhere, anytime.',
      icon: <FaChalkboardTeacher size={20} />,
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-500', // Set your desired icon color class
    },
    {
      heading: 'Zero-Cost Learning',
      content: 'Focus solely on learning – no fees, no catch.',
      icon: <FaCog size={20} />,
      bgColor: 'bg-yellow-500',
      iconColor: 'text-yellow-500', // Set your desired icon color class
    },
    {
      heading: 'Freedom to Explore',
      content: 'Unrestricted access to enrich your knowledge.',
      icon: <FaBookReader size={20} />,
      bgColor: 'bg-orange-500',
      iconColor: 'text-orange-500', // Set your desired icon color class
    },
  ];

  const badgeColors = {
    Philosophy: 'blue',
    Psychology: 'yellow',
    Sociology: 'orange',
  };

  return (
    <div className="max-w-6xl mx-auto p-8 md:p-2">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Big Ideas Summarized For You</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Explore the depths of knowledge in various fields.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`text-gray-700 dark:text-white p-8 rounded-xl text-center relative transition-transform hover:scale-105 shadow-md ${feature.bgColor}`}
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
      <h4 className="text-2xl font-bold mb-4 text-center">Explore Theories in Various Fields:</h4>
      <div className="flex justify-center space-x-4 flex-wrap">
        {Object.keys(badgeColors).map((category, index) => (
          <a
            key={index}
            href={`/theories/${category.toLowerCase()}`}
            className={clsx(
              'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white m-2',
              `bg-${badgeColors[category]}-500`
            )}
            title={category}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features;

