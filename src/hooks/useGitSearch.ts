
import { useState } from "react";
import axios from "axios";
import User from "../types-modules/User";



const useGitSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      setLoading(true);
      const term = firstLoad ? "BlainThomas" : searchTerm
      setFirstLoad(false);
      const response = await axios.get<User>(
        `https://api.github.com/users/${term}`
      );
      setUser(response.data);
      setTimeout(() => setLoading(false), 500); // set loading to false after 2 seconds
    } catch (e) {
      setUser(null);
      setError("No results");
      setLoading(false);
    }
  };

  return {
    searchTerm,
    firstLoad,
    setSearchTerm,
    user,
    loading,
    error,
    handleSearch
  };
};


export default useGitSearch;
