import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';
import Quote from '@site/src/components/Quote';
import Categories from '@site/src/components/Categories';
import Audiobook from '@site/src/components/Audiobook';
import Stats from '@site/src/components/Stats';
import Heading from '@theme/Heading';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Explore book summaries and enhance your knowledge."
    >
      <header className="hero" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto p-8 text-center">
          <Heading as="h1" className="text-gray-700 text-6xl font-extrabold mb-4">
            {siteConfig.title}
          </Heading>
          <p className="text-gray-500 text-2xl mb-6">{siteConfig.tagline}</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <Link to="/docs/intro">
              <button className="rounded-full bg-blue-500 text-white px-6 py-3 hover:bg-blue-600">
                Explore Categories
              </button>
            </Link>
            <Link to="https://github.com/stackfoss/brefapp">
              <button className="rounded-full border border-gray-300 text-gray-800 px-6 py-3 hover:bg-gray-400 mt-4 md:mt-0">
                Contribute on GitHub
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features />
        <Quote />
        <Categories />
          <Audiobook />
        <Stats />
      </main>
    </Layout>
  );
}

