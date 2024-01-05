import React from 'react';
import {
  FaBrain,
  FaBook,
  FaUsers,
  FaChartLine,
  // ... Add other icons as needed
} from 'react-icons/fa';

const CategoryList = [
  {
    title: 'Psychology',
    subtitle: 'Explore the depths of the human mind',
    icon: <FaBrain size={40} />,
    link: '/psychology',
  },
  {
    title: 'Philosophy',
    subtitle: 'Delve into profound philosophical ideas',
    icon: <FaBook size={40} />,
    link: '/philosophy',
  },
  {
    title: 'Sociology',
    subtitle: 'Study human society and social behavior',
    icon: <FaUsers size={40} />,
    link: '/sociology',
  },
  {
    title: 'Economics',
    subtitle: 'Understand the principles of economics',
    icon: <FaChartLine size={40} />,
    link: '/economics',
  },
  // ... Add other categories as needed
];

const CategoryCard = ({ title, subtitle, icon, link }) => (
  <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
    <div className="flex items-start justify-start mb-4">
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
    <a href={link} className="mt-4 inline-block text-blue-300 hover:underline">
      Explore {title}
    </a>
  </div>
);

const Categories = () => (
  <div className="py-12 bg-gray-100 text-left">
    <div className="container mx-auto">
      <div className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white">
        Our Top Categories
      </div>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Big ideas summarized for you
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CategoryList.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  </div>
);

export default Categories;

