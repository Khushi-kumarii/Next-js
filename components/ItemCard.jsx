export default function ItemCard({ item, searchQuery = "" }) {

    const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={i} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="card fade-in">
      <div className="card-header">
        <span className="card-chip">{item.category}</span>
      </div>

      <h3 className="card-title">
        {getHighlightedText(item.name, searchQuery)}
      </h3>

      <p className="card-price">₹ {item.price}</p>
    </div>
  );
}
