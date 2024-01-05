import React, { useEffect, useState } from 'react';
import SearchBar from '@theme-original/SearchBar';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Fuse from 'fuse.js';

const searchConfig = {
  keys: ['title', 'content', 'description'],
};

export default function SearchBarWrapper(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Fetch your documentation content or load it from a JSON file
    const documentationContent = props.index || [];

    const fuseInstance = new Fuse(documentationContent, searchConfig);

    setFuse(fuseInstance);
  }, [props.index]);

  const handleSearch = (event) => {
    const query = event.target.value;

    if (fuse) {
      const results = fuse.search(query);
      setSearchResults(results);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <SearchBar {...props} onChange={handleSearch} />

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 p-2 bg-white border rounded-md shadow-md">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link to={result.item.permalink} onClick={clearSearchResults}>
                  <h4>{result.item.title}</h4>
                  <p>{result.item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

