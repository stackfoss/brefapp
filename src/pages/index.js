import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';
import Categories from '@site/src/components/Categories';
import Heading from '@theme/Heading';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="hero" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="container mx-auto p-8 text-center">
          <Heading as="h1" className="text-6xl font-extrabold mb-4">
            {siteConfig.title}
          </Heading>
          <p className="text-2xl mb-6">{siteConfig.tagline}</p>
          <div className="flex space-x-4 justify-center">
            <Link to="/docs/intro">
              <button className="rounded-full bg-red-400 text-white px-6 py-3 hover:bg-red-500">
                Start Learning
              </button>
            </Link>
            <Link to="https://www.github.com/stackfoss">
              <button className="rounded-full border border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-100">
                Start Writing
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features />
        <Categories />
      </main>
    </Layout>
  );
}

