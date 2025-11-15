import ClientSection from "@/components/ClientSection";
import { items } from "../../data/items";

export const dynamic = "force-dynamic";

export default function CategoryPage({ params }) {
  const category = params.category;

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
