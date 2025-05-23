import React, { useState, useEffect } from 'react';
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "ae721eebfe7d4c3da5d3fffe6a4139c8";

  // State to track input field value
  const [query, setQuery] = useState("pizza");

  // State to track the actual search term to trigger API call
  const [searchTerm, setSearchTerm] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${searchTerm}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    if (searchTerm.trim() !== "") {
      fetchFood();
    }
  }, [searchTerm, setFoodData]);

  // Handle form submission (search button click or enter key)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query.trim());
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
}
