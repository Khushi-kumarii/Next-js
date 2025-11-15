"use client";

import { useState } from "react";

export default function ClientFilters({ items, setFiltered }) {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const handleFilter = (text, min, max, sortOption) => {
    let result = [...items];

    // Search filter
    if (text) {
      const lower = text.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(lower) ||
          item.price.toString().includes(lower)
      );
    }

    // Price filter
    const minNum = parseFloat(min);
    const maxNum = parseFloat(max);

    if (!isNaN(minNum)) {
      result = result.filter((item) => item.price >= minNum);
    }
    if (!isNaN(maxNum)) {
      result = result.filter((item) => item.price <= maxNum);
    }

    // Sorting
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFiltered(result);
  };

  const handleSearch = (text) => {
    setQuery(text);
    handleFilter(text, minPrice, maxPrice, sort);
  };

  const handleMinPrice = (value) => {
    setMinPrice(value);
    handleFilter(query, value, maxPrice, sort);
  };

  const handleMaxPrice = (value) => {
    setMaxPrice(value);
    handleFilter(query, minPrice, value, sort);
  };

  const handleSort = (value) => {
    setSort(value);
    handleFilter(query, minPrice, maxPrice, value);
  };

  const resetFilters = () => {
    setQuery("");
    setMinPrice("");
    setMaxPrice("");
    setSort("");
    setFiltered(items);
  };

  return (
    <div className="filters-wrapper fade-in">
      <div className="search-container">
        <input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name or price..."
          className="search-input"
        />

        <input
          type="number"
          value={minPrice}
          onChange={(e) => handleMinPrice(e.target.value)}
          placeholder="Min price"
          className="price-input"
        />

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => handleMaxPrice(e.target.value)}
          placeholder="Max price"
          className="price-input"
        />

        <select
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price Low → High</option>
          <option value="price-desc">Price High → Low</option>
          <option value="name-asc">Name A → Z</option>
          <option value="name-desc">Name Z → A</option>
        </select>

        <button onClick={resetFilters} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}
