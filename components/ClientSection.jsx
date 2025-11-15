"use client";

import { useState } from "react";
import ClientFilters from "./ClientFilters";
import ItemCard from "./ItemCard";

export default function ClientSection({ items }) {
  const [filtered, setFiltered] = useState(items);
  const [view, setView] = useState("grid"); 
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <div className="client-section fade-in">
      <ClientFilters
        items={items}
        setFiltered={setFiltered}
        setSearchQuery={setSearchQuery} 
      />

      {/* Toggle View Buttons */}
      <div className="view-toggle">
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          Grid
        </button>
        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}
        >
          List
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No items found.</p>
      ) : (
        <div className={view === "grid" ? "items-grid fade-in" : "items-list fade-in"}>
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} searchQuery={searchQuery} />
          ))}
        </div>
      )}
    </div>
  );
}
