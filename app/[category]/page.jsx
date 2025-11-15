"use client"; // already added

import ClientSection from "@/components/ClientSection";
import { items } from "@/data/items";
import { useParams } from "next/navigation"; // <-- import hook

export const dynamic = "force-dynamic";

export default function CategoryPage() {
  const params = useParams();       // <-- get route params
  const category = params?.category; // <-- optional chaining

  if (!category) return <p>Category not found.</p>; // safety check

  const categoryItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container">
      <h1 className="page-title">Category: {category}</h1>

      {categoryItems.length > 0 ? (
        <ClientSection items={categoryItems} />
      ) : (
        <p className="no-results">No items found for "{category}"</p>
      )}
    </div>
  );
}
