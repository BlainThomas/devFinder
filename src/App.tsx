import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import useGitSearch from "./hooks/useGitSearch";
import LoadingIcon from "./components/LoadingIcon";
import SearchBar from "./components/SearchBar";


const App: React.FC = () => {
  const { handleSearch, firstLoad, searchTerm, setSearchTerm, user, loading, error } = useGitSearch();
  const [ darkMode, setDarkMode ] = useState(false);

  function handleThemeChange() {
    const backgroundColor = darkMode ? '#4B6A9B' : '#141D2F'
    const color = darkMode ? '#FFFFFF' : '#FEFEFE'
    const rootElement = document.querySelector('body') as HTMLElement;
    rootElement.style.setProperty('background-color', backgroundColor);
    rootElement.style.setProperty('color', color);
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (firstLoad) {
      handleSearch()
    }
  }, [firstLoad, handleSearch]);

  return (
    <div className="main ">
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <SearchBar darkMode={darkMode} handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} error={error} />
      {loading && <LoadingIcon darkMode={darkMode} />}
      {user && !loading && (<UserCard darkMode={darkMode} user={user} />)}
    </div>
  );
};

export default App;