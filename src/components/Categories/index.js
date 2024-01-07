import React from 'react';
import { MdOutlinePsychology, MdPsychologyAlt } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
const CategoryList = [
  {
    title: 'Psychology',
    icon: <MdOutlinePsychology size={20} />,
    link: '/docs/psychology/The-Man-Who-Mistook-His-Wife-for-a-Hat',
  },
  {
    title: 'Philosophy',
    icon: <MdPsychologyAlt size={20} />,
    link: '/docs/philosophy/The-Communist-Manifesto',
  },
  {
    title: 'Sociology',
    icon: <IoPeopleSharp size={20} />,
    link: '/docs/sociology/The-Protestant-Ethic-and-the-Spirit-of-Capitalism',
  },
  {
    title: 'Economics',
    icon: <FaChartPie size={20} />,
    link: '/docs/economics/Adam-Smith-and-The%20Wealth-of-Nations',
  },
  // ... Add other categories as needed
];

const CategoryCard = ({ title, icon, link }) => (
  <a
    href={link}
    className="block p-4 rounded-md shadow-md transition-transform hover:scale-105 bg-[#6CB2E1]"
  >
    <div className="flex items-center justify-start mb-2">
      <div className="mr-2">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
    </div>
  </a>
);

const Categories = () => (
  <div className="py-12 bg-[#F3F4F6] text-left">
    <div className="container mx-auto">
      <div className="mb-4 text-xl text-center font-extrabold leading-none tracking-tight text-[#0D3B66] md:text-2xl lg:text-4xl dark:text-white">
        Discover Top Genres
      </div>
      <p className="mb-6 text-lg text-center font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Explore various genres from fiction and non-fiction to science fiction and business.
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

