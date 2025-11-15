"use client";

import Link from "next/link";

export default function CategoryPills({ active, view, setView }) {
  const categories = ["clothing", "electronics", "accessories"];

  return (
    <div className="pill-row fade-in">
      {/* Category Pills */}
      <div className="pill-wrapper">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/${cat}`}
            className={`pill ${active === cat ? "pill-active" : ""}`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Grid/List Toggle */}
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
    </div>
  );
}
