import ClientSection from "@/components/ClientSection";

export const dynamic = "force-dynamic";

async function getItems() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store",
  });
  return res.json();
}

export default async function CategoryPage(props) {
  const params = await props.params;    
  const category = params.category;     

  const items = await getItems();

  const categoryItems = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container">
      <h1 className="page-title">Category: {category}</h1>
      <ClientSection items={categoryItems} />
    </div>
  );
}
