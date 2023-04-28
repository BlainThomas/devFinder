import React, {useEffect } from "react";
import { ReactComponent as  SearchIcon } from '../assets/icon-search.svg'

type Props = {
  handleSearch: () => void;
  searchTerm: string;
  error: string;
  setSearchTerm: (searchTerm: string) => void;
  darkMode: boolean;
};

const SearchBar: React.FC<Props> = ({ handleSearch, searchTerm, setSearchTerm, error, darkMode }) => {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSearch]);

  return (
    <div className={`serach-bar ${darkMode ? 'serach-bar-dark' : ''}`}>
      <div className="search-icon">
        <SearchIcon />
      </div>
      <div className="search-text">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="serach-input"
        />
        <p style={{width: '25%', marginRight: 10, color:'red' }}>{error}</p>
      </div>
      <button className="search-button" style={(error.length > 0) ? { background: '#4B6A9B' } : {}} onClick={() => handleSearch()}>Search</button>
    </div>
  );
};

export default SearchBar;