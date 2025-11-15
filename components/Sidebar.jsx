"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const categories = ["clothing", "electronics", "accessories"];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>

      <div className="sidebar-menu">
        {categories.map((cat) => (
          <Link key={cat} href={`/${cat}`}>
            <div
              className={`sidebar-link ${
                pathname === "/" + cat ? "active" : ""
              }`}
            >
              {cat}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
