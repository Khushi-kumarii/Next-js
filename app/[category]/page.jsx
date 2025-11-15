"use client"; 

import ClientSection from "@/components/ClientSection";
import { items } from "@/data/items";
import { useParams } from "next/navigation"; 

export const dynamic = "force-dynamic";

export default function CategoryPage() {
  const params = useParams();       
  const category = params?.category; 

  if (!category) return <p>Category not found.</p>; 

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
